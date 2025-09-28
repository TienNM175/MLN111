import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw, CheckCircle, XCircle, Trophy, Target } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  era: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Ai được gọi là 'cha đẻ của triết học phương Tây'?",
    options: ["Plato", "Aristotle", "Socrates", "Pythagoras"],
    correctAnswer: 2,
    explanation: "Socrates (470-399 TCN) được coi là cha đẻ của triết học phương Tây với phương pháp đối thoại và tư duy phê phán.",
    era: "Hy Lạp Cổ Đại"
  },
  {
    id: 2,
    question: "Tác phẩm 'Cộng hòa' (The Republic) được viết bởi ai?",
    options: ["Socrates", "Plato", "Aristotle", "Epicurus"],
    correctAnswer: 1,
    explanation: "Plato viết 'Cộng hòa' để khám phá khái niệm về công lý và nhà nước lý tưởng.",
    era: "Hy Lạp Cổ Đại"
  },
  {
    id: 3,
    question: "Aristotle là học trò của ai?",
    options: ["Socrates", "Plato", "Heraclitus", "Democritus"],
    correctAnswer: 1,
    explanation: "Aristotle là học trò của Plato tại Học viện Athens trong khoảng 20 năm.",
    era: "Hy Lạp Cổ Đại"
  },
  {
    id: 4,
    question: "Ai viết tác phẩm 'Confessions' (Sám hối)?",
    options: ["Thomas Aquinas", "Augustine", "Anselm", "Maimonides"],
    correctAnswer: 1,
    explanation: "Thánh Augustine viết 'Confessions' - một trong những tác phẩm tự truyện tâm linh đầu tiên.",
    era: "Trung Cổ"
  },
  {
    id: 5,
    question: "Thomas Aquinas kết hợp triết học của ai với thần học Kitô giáo?",
    options: ["Plato", "Aristotle", "Socrates", "Plotinus"],
    correctAnswer: 1,
    explanation: "Aquinas tạo ra sự tổng hợp vĩ đại giữa triết học Aristotle và thần học Kitô giáo trong 'Summa Theologica'.",
    era: "Trung Cổ"
  },
  {
    id: 6,
    question: "Câu nói nổi tiếng 'Cogito ergo sum' (Tôi suy nghĩ, vậy tôi tồn tại) thuộc về ai?",
    options: ["Immanuel Kant", "René Descartes", "John Locke", "David Hume"],
    correctAnswer: 1,
    explanation: "René Descartes đưa ra 'Cogito ergo sum' như nền tảng chắc chắn đầu tiên của triết học hiện đại.",
    era: "Hiện Đại"
  },
  {
    id: 7,
    question: "Ai viết tác phẩm 'Critique of Pure Reason' (Phê phán lý trí thuần túy)?",
    options: ["René Descartes", "John Locke", "Immanuel Kant", "Georg Hegel"],
    correctAnswer: 2,
    explanation: "Kant viết 'Critique of Pure Reason' để khám phá khả năng và giới hạn của lý trí con người.",
    era: "Hiện Đại"
  },
  {
    id: 8,
    question: "John Stuart Mill là người ủng hộ mạnh mẽ nguyên tắc nào?",
    options: ["Chủ nghĩa tuyệt đối", "Chủ nghĩa thực dụng", "Chủ nghĩa duy tâm", "Chủ nghĩa hoài nghi"],
    correctAnswer: 1,
    explanation: "Mill là nhà triết học thực dụng, ủng hộ nguyên tắc 'hạnh phúc lớn nhất cho số đông lớn nhất'.",
    era: "Hiện Đại"
  },
  {
    id: 9,
    question: "Ai nói 'Con người bị kết án phải tự do'?",
    options: ["Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir", "Maurice Merleau-Ponty"],
    correctAnswer: 1,
    explanation: "Jean-Paul Sartre, nhà triết học hiện sinh, nhấn mạnh tự do tuyệt đối và trách nhiệm của con người.",
    era: "Đương Đại"
  },
  {
    id: 10,
    question: "Tác phẩm 'The Second Sex' (Giới thứ hai) được viết bởi ai?",
    options: ["Virginia Woolf", "Simone de Beauvoir", "Hannah Arendt", "Martha Nussbaum"],
    correctAnswer: 1,
    explanation: "Simone de Beauvoir viết 'The Second Sex' (1949) - tác phẩm nền tảng của phong trào nữ quyền hiện đại.",
    era: "Đương Đại"
  }
];

const QuizSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0 && !showResult) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showExplanation) {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [isTimerRunning, timeLeft, showResult, showExplanation]);

  const startQuiz = () => {
    setQuizStarted(true);
    setIsTimerRunning(true);
    setTimeLeft(30);
  };

  const handleTimeUp = () => {
    setIsTimerRunning(false);
    // Auto-answer as -1 (no answer) when time runs out
    handleAnswer(-1);
  };

  const handleAnswer = (answerIndex: number) => {
    setIsTimerRunning(false);
    setSelectedAnswer(answerIndex);
    const newAnswers = [...userAnswers, answerIndex];
    setUserAnswers(newAnswers);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
      setIsTimerRunning(true);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
    setTimeLeft(30);
    setIsTimerRunning(false);
    setQuizStarted(false);
    setShowExplanation(false);
    setScore(0);
    setSelectedAnswer(null);
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const getScoreColor = () => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    if (score >= 9) return 'Xuất sắc! Bạn là chuyên gia triết học!';
    if (score >= 7) return 'Rất tốt! Bạn có kiến thức vững về triết học.';
    if (score >= 5) return 'Khá ổn! Bạn cần tìm hiểu thêm một chút.';
    return 'Hãy đọc thêm về triết học nhé!';
  };

  const getAnswerStyle = (index: number) => {
    if (!showExplanation) {
      return selectedAnswer === index 
        ? 'bg-blue-100 border-blue-300 text-blue-800' 
        : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-800';
    }
    
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      return 'bg-green-100 border-green-300 text-green-800';
    }
    
    if (selectedAnswer === index && index !== quizQuestions[currentQuestion].correctAnswer) {
      return 'bg-red-100 border-red-300 text-red-800';
    }
    
    return 'bg-gray-50 border-gray-200 text-gray-600';
  };

  if (!quizStarted) {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thử Thách Kiến Thức Triết Học
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            10 câu hỏi trắc nghiệm về lịch sử triết học từ Hy Lạp cổ đại đến đương đại. 
            Mỗi câu có 4 đáp án và 30 giây để trả lời!
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Target className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900">10 Câu Hỏi</h3>
                <p className="text-sm text-gray-600">4 đáp án mỗi câu</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">30 Giây</h3>
                <p className="text-sm text-gray-600">Mỗi câu hỏi</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Thành Tích</h3>
                <p className="text-sm text-gray-600">Điểm số cao</p>
              </div>
            </div>
            
            <button 
              onClick={startQuiz}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Play className="inline-block mr-2 h-5 w-5" />
              Bắt Đầu Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (showResult) {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Kết Quả Quiz</h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
              {score}/10
            </div>
            <p className="text-2xl text-gray-700 mb-6">{getScoreMessage()}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600">{score}</div>
                <div className="text-green-700">Câu đúng</div>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <XCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-red-600">{10 - score}</div>
                <div className="text-red-700">Câu sai</div>
              </div>
            </div>
            
            <button 
              onClick={resetQuiz}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <RotateCcw className="inline-block mr-2 h-5 w-5" />
              Làm Lại Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  const currentQ = quizQuestions[currentQuestion];

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm opacity-90">
                Câu {currentQuestion + 1} / {quizQuestions.length}
              </div>
              <div className="text-sm opacity-90">
                Thời kỳ: {currentQ.era}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6" />
                <span className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-300' : ''}`}>
                  {timeLeft}s
                </span>
                <button
                  onClick={toggleTimer}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                  disabled={showExplanation}
                >
                  {isTimerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
              </div>
              
              <div className="text-right">
                <div className="text-sm opacity-90">Điểm</div>
                <div className="text-xl font-bold">{score}</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mt-4">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            {!showExplanation ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
                  {currentQ.question}
                </h3>

                <div className="grid gap-4">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 transform hover:scale-102 text-left ${getAnswerStyle(index)}`}
                      disabled={!isTimerRunning && timeLeft > 0}
                    >
                      <span className="font-semibold mr-3">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  selectedAnswer === currentQ.correctAnswer 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <CheckCircle className="h-8 w-8" />
                  ) : (
                    <XCircle className="h-8 w-8" />
                  )}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${
                  selectedAnswer === currentQ.correctAnswer 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {selectedAnswer === currentQ.correctAnswer ? 'Chính xác!' : 'Không chính xác!'}
                </h3>
                
                {selectedAnswer !== currentQ.correctAnswer && (
                  <p className="text-lg text-gray-700 mb-4">
                    Đáp án đúng: <strong>{String.fromCharCode(65 + currentQ.correctAnswer)}. {currentQ.options[currentQ.correctAnswer]}</strong>
                  </p>
                )}
                
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <p className="text-gray-700 leading-relaxed">{currentQ.explanation}</p>
                </div>
                
                <button
                  onClick={nextQuestion}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;