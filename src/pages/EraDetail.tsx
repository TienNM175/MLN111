import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { timelineData } from "../data/timelineData";
import { Book, Award, ListChecks, Quote } from "lucide-react";

function EraDetail() {
  const { eraId } = useParams<{ eraId: string }>();
  const navigate = useNavigate();
  const era = timelineData.find((e) => e.id === eraId);

  const [currentPhilosopherImage, setCurrentPhilosopherImage] = useState<string | null>(null);
  const philosopherRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Xác định era trước và era sau
  const currentIndex = timelineData.findIndex((e) => e.id === eraId);
  const prevEra = timelineData[currentIndex - 1];
  const nextEra = timelineData[currentIndex + 1];

  // Scroll lên đầu khi thay đổi era
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [eraId]);

  // Observer để thay đổi ảnh triết gia khi scroll
  useEffect(() => {
    if (!era) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const index = philosopherRefs.current.findIndex((el) => el === visible.target);
          const philosopher = era.philosophers[index];
          if (philosopher) {
            const imageName = philosopher.name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "_")
              .toLowerCase();
            setCurrentPhilosopherImage(`/images/philosophers/${imageName}.png`);
          }
        }
      },
      { threshold: [0.3, 0.6, 0.9] }
    );

    philosopherRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, [era]);

  if (!era) {
    return <div className="p-10 text-red-600">Không tìm thấy thời kỳ</div>;
  }

  const defaultEraImage = `/images/${era.id}.png`;

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
      {/* Cột chữ */}
      <div className="md:col-span-2">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {era.name}
        </h1>
        <p className="text-lg text-gray-600 mt-1 font-medium">{era.period}</p>
        <p className="mt-4 text-gray-800 leading-relaxed">{era.description}</p>

        <h2 className="text-2xl font-semibold mt-8 text-gray-900 border-b pb-2">
          🌟 Các triết gia tiêu biểu
        </h2>

        <div className="mt-6 space-y-6">
          {era.philosophers.map((p, i) => (
            <div
              key={p.name}
              ref={(el) => (philosopherRefs.current[i] = el)}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200"
            >
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                <p className="text-sm text-indigo-600 font-medium">{p.years}</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl mb-5 flex gap-3 border border-purple-100">
                <Quote className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <blockquote className="italic text-gray-800 text-lg">
                  “{p.famousQuote}”
                </blockquote>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">🧠 Tư tưởng chính</h4>
                <p className="text-gray-700 leading-relaxed">{p.mainIdeas}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">📖 Tiểu sử</h4>
                <p className="text-gray-700 leading-relaxed">{p.biography}</p>
              </div>

              {p.contributions && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                    <ListChecks className="h-5 w-5 text-indigo-600" />
                    Đóng góp nổi bật
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {p.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {p.works && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                    <Book className="h-5 w-5 text-green-600" />
                    Tác phẩm tiêu biểu
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {p.works.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
              )}

              {p.legacy && (
                <div>
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                    <Award className="h-5 w-5 text-purple-600" />
                    Ảnh hưởng & Di sản
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{p.legacy}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nút Previous / Next Era ở cuối */}
        <div className="flex justify-between mt-8">
          <button
            disabled={!prevEra}
            onClick={() => prevEra && navigate(`/era/${prevEra.id}`)}
            className={`px-4 py-2 rounded-lg text-white font-medium transition ${
              prevEra ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            ← {prevEra ? prevEra.name : "Trước"}
          </button>

          <button
            disabled={!nextEra}
            onClick={() => nextEra && navigate(`/era/${nextEra.id}`)}
            className={`px-4 py-2 rounded-lg text-white font-medium transition ${
              nextEra ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {nextEra ? nextEra.name : "Sau"} →
          </button>
        </div>
      </div>

      {/* Cột ảnh */}
      <div className="flex justify-center md:sticky md:top-20">
        <img
          src={currentPhilosopherImage || defaultEraImage}
          alt={era.name}
          className="rounded-2xl shadow-xl max-h-[600px] object-contain border transition-all duration-500"
        />
      </div>
    </div>
  );
}

export default EraDetail;
