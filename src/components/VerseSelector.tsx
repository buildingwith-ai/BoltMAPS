import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Verse } from '../data/verses';

interface VerseSelectorProps {
  verses: Verse[];
  currentIndex: number;
  onSelectVerse: (index: number) => void;
}

const VerseSelector: React.FC<VerseSelectorProps> = ({ verses, currentIndex, onSelectVerse }) => {
  const handlePrevious = () => {
    if (currentIndex > 0) {
      onSelectVerse(currentIndex - 1);
    } else {
      // Wrap to the end
      onSelectVerse(verses.length - 1);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < verses.length - 1) {
      onSelectVerse(currentIndex + 1);
    } else {
      // Wrap to the beginning
      onSelectVerse(0);
    }
  };
  
  return (
    <div className="flex items-center justify-between w-full max-w-xs mx-auto">
      <button
        onClick={handlePrevious}
        className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Previous verse"
      >
        <ChevronLeft size={24} className="text-gray-600" />
      </button>
      
      <div className="text-center">
        <div className="font-medium text-sm text-gray-600">
          {currentIndex + 1} of {verses.length}
        </div>
      </div>
      
      <button
        onClick={handleNext}
        className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Next verse"
      >
        <ChevronRight size={24} className="text-gray-600" />
      </button>
    </div>
  );
};

export default VerseSelector;