import React, { useState } from 'react';
import { getTodayVerse } from './data/verses';
import { generateShareableImage } from './utils/share';
import VerseDisplay from './components/VerseDisplay';
import ReflectionInput from './components/ReflectionInput';
import ShareModal from './components/ShareModal';
import HowToModal from './components/HowToModal';
import { Share2 } from 'lucide-react';

function App() {
  const [meaning, setMeaning] = useState('');
  const [action, setAction] = useState('');
  const [prayer, setPrayer] = useState('');
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [howToModalOpen, setHowToModalOpen] = useState(false);
  const [shareableImage, setShareableImage] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const currentVerse = getTodayVerse();

  const handleShare = async () => {
    try {
      setIsGeneratingImage(true);
      const imageUrl = await generateShareableImage({
        verse: currentVerse,
        meaning,
        action,
        prayer,
        story: '' // Empty since we removed the story section
      });
      setShareableImage(imageUrl);
      setShareModalOpen(true);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate shareable image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-800 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">MAPS Guide</h1>
          <div className="text-sm">Daily discoveries of God's direction</div>
        </div>
      </header>

      <main className="flex-grow">
        <VerseDisplay 
          verse={currentVerse} 
          onHowToClick={() => setHowToModalOpen(true)} 
        />
        
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <ReflectionInput
              id="meaning"
              label="Meaning/Paraphrase:"
              value={meaning}
              onChange={setMeaning}
              placeholder="Type your paraphrase here..."
            />
            
            <ReflectionInput
              id="action"
              label="Action:"
              sublabel="By God's grace I will..."
              value={action}
              onChange={setAction}
              placeholder="Type your action commitment here..."
            />
            
            <ReflectionInput
              id="prayer"
              label="Prayer:"
              sublabel="Jesus,"
              value={prayer}
              onChange={setPrayer}
              placeholder="Type your prayer here..."
            />
            
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShare}
                disabled={isGeneratingImage}
                className={`
                  flex items-center px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 
                  text-white font-medium transition-colors text-lg
                  ${isGeneratingImage ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                <Share2 size={20} className="mr-2" />
                {isGeneratingImage ? 'Generating...' : 'Share With A Friend'}
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-800 text-white py-4 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p>© 2025 MAPS</p>
        </div>
      </footer>
      
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        imageUrl={shareableImage}
        verseRef={currentVerse.reference}
      />
      
      <HowToModal
        isOpen={howToModalOpen}
        onClose={() => setHowToModalOpen(false)}
      />
    </div>
  );
}

export default App;