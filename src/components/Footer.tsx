import React from 'react';
import { Brain, Users, Cpu } from 'lucide-react';
import { FaRobot, FaGoogle } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand / Product */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">PhilosoPath</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sản phẩm học tập về lịch sử triết học – giúp người dùng khám phá
              tư tưởng nhân loại qua từng giai đoạn, từ cổ đại đến đương đại.
            </p>
          </div>

          {/* Team Members */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-400" />
              <span>Thành viên</span>
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Võ Thành Long – SE170173</li>
              <li>Nguyễn Mạnh Tiến – SE170204</li>
            </ul>
          </div>

          {/* Technologies / AI */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Cpu className="h-5 w-5 text-blue-400" />
              <span>Công nghệ & AI</span>
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <FaRobot className="h-4 w-4 text-white" />
                <a
                  href="https://openai.com/chatgpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  ChatGPT (OpenAI)
                </a>
                – Hỗ trợ tạo nội dung triết học, giải thích khái niệm, trích dẫn tư tưởng, viết bài.
              </li>
              <li className="flex items-center gap-2">
                <FaGoogle className="h-4 w-4 text-white" />
                <a
                  href="https://gemini.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  Gemini AI (Google DeepMind)
                </a>
                – Phân tích lịch sử triết học, gợi ý liên kết giữa triết gia và thời kỳ, hỗ trợ khám phá ý tưởng, tạo ảnh.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 PhilosoPath. Made with ❤️ by our team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
