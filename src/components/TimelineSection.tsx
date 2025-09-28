import { Clock } from 'lucide-react';
import TimelineEra from './TimelineEra';
import { timelineData } from '../data/timelineData';

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Clock className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Dòng Chảy Lịch Sử Triết Học
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hành trình 2500 năm phát triển tư tưởng nhân loại từ những triết gia đầu tiên 
            ở Hy Lạp cổ đại đến các nhà tư tưởng đương đại
          </p>

          {/* Timeline Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-blue-600">800 TCN</div>
              <div className="text-sm text-gray-600">Bắt đầu</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-600">Thời kỳ</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Triết gia</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-orange-600">2024</div>
              <div className="text-sm text-gray-600">Hiện tại</div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 via-green-400 to-orange-400 transform -translate-y-1/2 hidden md:block rounded-full shadow-lg"></div>

          {/* Timeline Eras */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {timelineData.map((era, index) => (
              <TimelineEra key={era.id} era={era} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
