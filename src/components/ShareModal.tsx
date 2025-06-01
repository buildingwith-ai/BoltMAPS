import React from 'react';
import { Download, MessageSquare, X } from 'lucide-react';
import { shareViaSMS, downloadImage } from '../utils/share';
import { isMobile } from '../utils/utils';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  verseRef: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, imageUrl, verseRef }) => {
  const [isOnMobile, setIsOnMobile] = React.useState(isMobile());

  React.useEffect(() => {
    const checkMobile = () => {
      setIsOnMobile(isMobile());
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Share Your Reflection</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 overflow-auto flex-grow">
          <div className="bg-gray-100 p-2 rounded-lg mb-4 flex justify-center">
            <img 
              src={imageUrl} 
              alt={`Reflection on ${verseRef}`} 
              className="max-w-full h-auto max-h-[50vh] object-contain"
            />
          </div>
          
          <div className={`grid gap-3 ${isOnMobile ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {isOnMobile && (
              <button
                onClick={() => shareViaSMS(imageUrl, verseRef)}
                className="flex flex-col items-center justify-center p-4 bg-green-50 hover:bg-green-100 transition-colors rounded-lg border border-green-200"
              >
                <MessageSquare size={32} className="text-green-600 mb-2" />
                <span className="text-sm font-medium text-gray-800">Text Message</span>
              </button>
            )}
            
            <button
              onClick={() => downloadImage(imageUrl, verseRef)}
              className="flex flex-col items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 transition-colors rounded-lg border border-purple-200"
            >
              <Download size={32} className="text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-800">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;