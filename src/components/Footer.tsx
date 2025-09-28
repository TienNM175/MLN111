import React from 'react';
import { Brain, Mail, Github, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold">PhilosoPath</h3>
                <p className="text-gray-400">Hành trình tư tưởng nhân loại</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Khám phá và tìm hiểu về những tư tưởng vĩ đại đã định hình nên nền văn minh nhân loại. 
              Từ triết học cổ đại đến tư tưởng đương đại, cùng chúng tôi khám phá hành trình tri thức bất tận.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><a href="#timeline" className="text-gray-300 hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#quiz" className="text-gray-300 hover:text-white transition-colors">Quiz</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Về chúng tôi</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tài liệu tham khảo</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Stanford Encyclopedia of Philosophy</li>
              <li>Internet Encyclopedia of Philosophy</li>
              <li>Philosophy Compass</li>
              <li>The Cambridge Dictionary of Philosophy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 PhilosoPath. Made with ❤️ for philosophy enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;