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
  // Create a hidden canvas element to render our image
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not create canvas context');
  }
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 1000;
  
  // Set background
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add header background
  ctx.fillStyle = '#1e3a5f';
  ctx.fillRect(0, 0, canvas.width, 160);
  
  // Configure text styles
  ctx.textAlign = 'center';
  
  // Add verse reference
  ctx.font = 'bold 32px serif';
  ctx.fillStyle = 'white';
  ctx.fillText(data.verse.reference, canvas.width / 2, 60);
  
  // Add verse text
  ctx.font = 'italic 18px serif';
  ctx.fillStyle = 'white';
  
  // Handle wrapping for verse text
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
    return lineCount;
  };
  
  const verseLineCount = wrapText(`"${data.verse.text}"`, canvas.width / 2, 100, 700, 25);
  let currentY = 160 + 40; // Start after header with padding
  
  // Add sections
  const addSection = (title: string, content: string) => {
    ctx.font = 'bold 22px sans-serif';
    ctx.fillStyle = '#1e3a5f';
    ctx.textAlign = 'left';
    ctx.fillText(title, 50, currentY);
    currentY += 30;
    
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#333';
    
    const contentLineCount = wrapText(content || '[No response]', 50, currentY, 700, 25);
    currentY += contentLineCount * 25 + 40; // Add padding after content
  };
  
  addSection('Meaning/Paraphrase:', data.meaning);
  addSection('Action: By God\'s grace I will...', data.action);
  addSection('Prayer: Jesus,', data.prayer);
  addSection('Share the Story:', data.story);
  
  // Add footer
  ctx.fillStyle = '#1e3a5f';
  ctx.fillRect(0, canvas.height - 60, canvas.width, 60);
  ctx.fillStyle = 'white';
  ctx.font = '16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Reflection created with MAPS Guide', canvas.width / 2, canvas.height - 30);
  
  // Convert canvas to data URL
  return canvas.toDataURL('image/png');
};

export const shareViaEmail = (imageUrl: string, verseRef: string) => {
  const subject = encodeURIComponent(`My Reflection on ${verseRef}`);
  const body = encodeURIComponent(`Here's my reflection on ${verseRef}. \n\n(Image is attached to this email)`);
  
  // Create a temporary link to download the image
  const a = document.createElement('a');
  a.href = `mailto:?subject=${subject}&body=${body}`;
  a.click();
};

export const shareViaSMS = (imageUrl: string, verseRef: string) => {
  // For mobile devices, we can try to use the Web Share API if available
  if (navigator.share) {
    fetch(imageUrl)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], `reflection-${verseRef.replace(/\s+/g, '-')}.png`, { type: 'image/png' });
        navigator.share({
          title: `My Reflection on ${verseRef}`,
          text: `Here's my reflection on ${verseRef}.`,
          files: [file],
        }).catch(error => {
          console.error('Error sharing:', error);
          // Fallback for devices that don't support file sharing
          const smsBody = encodeURIComponent(`My reflection on ${verseRef}`);
          window.open(`sms:?&body=${smsBody}`);
        });
      });
  } else {
    // Fallback for browsers that don't support Web Share API
    const smsBody = encodeURIComponent(`My reflection on ${verseRef}`);
    window.open(`sms:?&body=${smsBody}`);
  }
};

export const downloadImage = (imageUrl: string, verseRef: string) => {
  const a = document.createElement('a');
  a.href = imageUrl;
  a.download = `reflection-${verseRef.replace(/\s+/g, '-')}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};