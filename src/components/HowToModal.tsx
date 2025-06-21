import React from 'react';
import { X } from 'lucide-react';

interface HowToModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToModal: React.FC<HowToModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">The MAPS Process</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-auto">
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mt-0.5 mr-3">1</div>
              <div>
                <p className="font-medium">Choose from God's Word a simple, direct command or a direction to follow or avoid.</p>
                <p className="text-gray-600 mt-1">(That's been done for you.)</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mt-0.5 mr-3">2</div>
              <div>
                <p className="font-medium">What does it say? Repeat the command/direction to yourself until you know what it says.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mt-0.5 mr-3">3</div>
              <div>
                <p className="font-medium"><span className="text-blue-600">Meaning/Paraphrase:</span> What does it mean? Write what the verse means in your own words, capturing its essence as you understand it.</p>
                <p className="text-gray-600 mt-1">(Helpful Resource: Dictionary)</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mt-0.5 mr-3">4</div>
              <div>
                <p className="font-medium"><span className="text-green-600">Action:</span> What am I going to do to respond? Commit to a specific, practical action informed by the verse and guided by the Spirit.</p>
                <ul className="mt-2 ml-6 list-disc text-gray-700">
                  <li>Specific</li>
                  <li>Measurable</li>
                  <li>Attainable</li>
                  <li>Relevant</li>
                  <li>Time bound</li>
                </ul>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mt-0.5 mr-3">5</div>
              <div>
                <p className="font-medium"><span className="text-amber-600">Pray:</span> Write out and pray a simple prayer reflecting on the verse, your personal context, and your action commitment.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mt-0.5 mr-3">6</div>
              <div>
                <p className="font-medium"><span className="text-purple-600">Share With A Friend:</span> Tell somebody about the verse, your paraphrase, and your action.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="p-4 border-t flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToModal;
