import React from 'react';
import { X, Quote } from 'lucide-react';
import type { Philosopher } from '../data/timelineData';

interface PhilosopherModalProps {
  philosopher: Philosopher;
  onClose: () => void;
}

const PhilosopherModal: React.FC<PhilosopherModalProps> = ({ philosopher, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{philosopher.name}</h2>
              <p className="text-xl text-blue-600 font-semibold">{philosopher.years}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              title="Đóng cửa sổ"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          
          {/* Main Ideas */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tư tưởng chính:</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-gray-700 leading-relaxed text-lg">{philosopher.mainIdeas}</p>
            </div>
          </div>
          
          {/* Biography */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tiểu sử:</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{philosopher.biography}</p>
          </div>
          
          {/* Famous Quote */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100">
            <div className="flex items-start space-x-4">
              <Quote className="h-10 w-10 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <blockquote className="text-xl italic text-gray-800 mb-3 leading-relaxed">
                  "{philosopher.famousQuote}"
                </blockquote>
                <cite className="text-base text-gray-600 font-medium">— {philosopher.name}</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosopherModal;