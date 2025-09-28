import React from 'react';
import { ChevronDown, Sparkles, BookOpen, Users, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/35 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-white/25 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white/35 rounded-full animate-bounce delay-2500"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-16 w-16 text-yellow-400 mr-4 animate-spin-slow" />
          <h1 className="text-6xl md:text-8xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            PhilosoPath
          </h1>
        </div>
        
        <p className="text-2xl md:text-3xl text-blue-100 mb-6 leading-relaxed font-light">
          Lược Sử Triết Học Nhân Loại
        </p>
        
        <p className="text-lg md:text-xl text-blue-200 mb-12 leading-relaxed">
          Từ Hy Lạp Cổ Đại đến Tư Tưởng Đương Đại
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <BookOpen className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">2500+</div>
            <div className="text-sm text-blue-200">Năm Lịch Sử</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-blue-200">Triết Gia</div>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-sm text-blue-200">Thời Kỳ</div>
          </div>
        </div>
        
        <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Khám phá dòng chảy tư tưởng vĩ đại từ những triết gia Hy Lạp cổ đại như Socrates, Plato, Aristotle, 
          qua thời kỳ Trung cổ với Augustine và Aquinas, đến kỷ nguyên Hiện đại với Descartes và Kant, 
          và cuối cùng là tư tưởng Đương đại với Sartre, Foucault và nhiều nhà tư tưởng khác.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToTimeline}
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
          >
            Bắt đầu hành trình
            <ChevronDown className="inline-block ml-2 h-5 w-5 group-hover:animate-bounce" />
          </button>
          
          <button 
            onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Thử thách kiến thức
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;