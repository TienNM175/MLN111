import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-blue-600" />
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              PhilosoPath
              <p className="text-xs text-gray-600">Hành trình tư tưởng nhân loại</p>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#timeline" className="text-gray-700 hover:text-blue-600 transition-colors">Timeline</a>
            <a href="#quiz" className="text-gray-700 hover:text-blue-600 transition-colors">Quiz</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Về chúng tôi</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;