import { isMobile } from './utils';

interface ReflectionData {
  verse: {
    reference: string;
    text: string;
  };
  meaning: string;
  action: string;
  prayer: string;
  story: string;
}

export const generateShareableImage = async (data: ReflectionData): Promise<string> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not create canvas context');
  }
  
  // Set initial canvas width
  canvas.width = 800;
  
  // Helper function to measure text height
  const measureTextHeight = (text: string, maxWidth: number, lineHeight: number): number => {
    if (!text.trim()) return lineHeight; // Return minimum height for empty text
    
    const words = text.split(' ');
    let line = '';
    let lineCount = 0;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && n > 0) {
        lineCount++;
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lineCount++; // Add the last line
    
    return lineCount * lineHeight;
  };
  
  // Calculate required heights for each section
  const headerHeight = 160;
  const sectionSpacing = 40;
  const footerHeight = 60;
  const padding = 40;
  
  // Set fonts for measurement
  ctx.font = 'italic 18px serif';
  const verseHeight = measureTextHeight(`"${data.verse.text}"`, 700, 25) + 40;
  
  ctx.font = '18px sans-serif';
  const meaningHeight = 30 + measureTextHeight(data.meaning || ' ', 700, 25) + sectionSpacing;
  const actionHeight = 30 + measureTextHeight(data.action || ' ', 700, 25) + sectionSpacing;
  const prayerHeight = 30 + measureTextHeight(data.prayer || ' ', 700, 25) + sectionSpacing;
  
  // Calculate total height needed
  const totalHeight = headerHeight + verseHeight + meaningHeight + actionHeight + prayerHeight + footerHeight + padding;
  
  // Set canvas height to fit content
  canvas.height = Math.max(totalHeight, 500); // Minimum height of 500px
  
  // Fill background
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Header background
  ctx.fillStyle = '#1e3a5f';
  ctx.fillRect(0, 0, canvas.width, 160);
  
  ctx.textAlign = 'center';
  
  // Verse reference
  ctx.font = 'bold 32px serif';
  ctx.fillStyle = 'white';
  ctx.fillText(data.verse.reference, canvas.width / 2, 60);
  
  // Verse text
  ctx.font = 'italic 18px serif';
  ctx.fillStyle = 'white';
  
  const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
    const words = text.split(' ');
    let line = '';
    let testLine = '';
    let lineCount = 0;
    
    for (let n = 0; n < words.length; n++) {
      testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y + (lineCount * lineHeight));
        line = words[n] + ' ';
        lineCount++;
      } else {
        line = testLine;
      }
    }
    
    ctx.fillText(line, x, y + (lineCount * lineHeight));
    return lineCount + 1;
  };
  
  wrapText(`"${data.verse.text}"`, canvas.width / 2, 100, 700, 25);
  let currentY = 160 + 40;
  
  const addSection = (title: string, content: string) => {
    ctx.font = 'bold 22px sans-serif';
    ctx.fillStyle = '#1e3a5f';
    ctx.textAlign = 'left';
    ctx.fillText(title, 50, currentY);
    currentY += 30;
    
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#333';
    
    const contentLineCount = wrapText(content || ' ', 50, currentY, 700, 25);
    currentY += contentLineCount * 25 + 40;
  };
  
  addSection('Meaning/Paraphrase:', data.meaning);
  addSection('Action: By God\'s grace I will...', data.action);
  addSection('Prayer: Jesus,', data.prayer);
  
  // Footer at the bottom
  ctx.fillStyle = '#1e3a5f';
  ctx.fillRect(0, canvas.height - 60, canvas.width, 60);
  ctx.fillStyle = 'white';
  ctx.font = '16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Reflection created with MAPS Guide', canvas.width / 2, canvas.height - 30);
  
  return canvas.toDataURL('image/png');
};

export const shareViaSMS = async (imageUrl: string, verseRef: string) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], `reflection-${verseRef.replace(/\s+/g, '-')}.png`, { type: 'image/png' });
    
    if (navigator.share) {
      await navigator.share({
        title: `My Reflection on ${verseRef}`,
        text: `Here's my reflection on ${verseRef}.`,
        files: [file]
      });
    } else {
      const smsBody = encodeURIComponent(`My reflection on ${verseRef}`);
      window.location.href = `sms:?&body=${smsBody}`;
    }
  } catch (error) {
    console.error('Error sharing via SMS:', error);
  }
};

export const downloadImage = async (imageUrl: string, verseRef: string) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    if (isMobile()) {
      // For mobile, use the native share API with download option
      const file = new File([blob], `reflection-${verseRef.replace(/\s+/g, '-')}.png`, { type: 'image/png' });
      if (navigator.share) {
        await navigator.share({
          files: [file]
        });
        return;
      }
    }
    
    // Fallback to traditional download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reflection-${verseRef.replace(/\s+/g, '-')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};