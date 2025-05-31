import React from 'react';
import { Verse } from '../data/verses';
import { BookOpen } from 'lucide-react';

interface VerseDisplayProps {
  verse: Verse;
  onHowToClick: () => void;
}

const VerseDisplay: React.FC<VerseDisplayProps> = ({ verse, onHowToClick }) => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="mb-2 text-amber-500">{verse.dateLabel}</div>
        <h1 className="text-3xl md:text-4xl font-serif mb-4 font-semibold">
          {verse.reference}
        </h1>
        <p className="text-xl md:text-2xl italic font-serif mb-8">
          {verse.text}
        </p>
        <button
          onClick={onHowToClick}
          className="inline-flex items-center px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors"
        >
          <BookOpen size={20} className="mr-2" />
          How To?
        </button>
      </div>
    </div>
  );
};

export default VerseDisplay;