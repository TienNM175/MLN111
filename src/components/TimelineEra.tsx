import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Era } from "../data/timelineData";

interface TimelineEraProps {
  era: Era;
  index: number;
}

const TimelineEra: React.FC<TimelineEraProps> = ({ era }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Era Card */}
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden group">
        <div className="p-6">
          {/* Era Icon */}
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <era.icon className="h-10 w-10 text-blue-600" />
          </div>

          {/* Era Name */}
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
            {era.name}
          </h3>

          {/* Period */}
          <p className="text-base text-blue-600 font-semibold text-center mb-4">
            {era.period}
          </p>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            {era.description}
          </p>

          {/* Navigate Button */}
          <button
            onClick={() => navigate(`/era/${era.id}`)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            Xem triết gia
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineEra;
