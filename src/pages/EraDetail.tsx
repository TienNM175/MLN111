import { useParams } from "react-router-dom";
import { timelineData } from "../data/timelineData";
import { Book, Award, ListChecks, Quote } from "lucide-react";

function EraDetail() {
  const { eraId } = useParams<{ eraId: string }>();
  const era = timelineData.find((e) => e.id === eraId);

  if (!era) {
    return <div className="p-10 text-red-600">Không tìm thấy thời kỳ</div>;
  }

  const imageSrc = `/images/${era.id}.png`;

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
      {/* Cột chữ */}
      <div className="md:col-span-2">
        {/* Tên và mô tả thời kỳ */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {era.name}
        </h1>
        <p className="text-lg text-gray-600 mt-1 font-medium">{era.period}</p>
        <p className="mt-4 text-gray-800 leading-relaxed">{era.description}</p>

        {/* Danh sách triết gia */}
        <h2 className="text-2xl font-semibold mt-8 text-gray-900 border-b pb-2">
          🌟 Các triết gia tiêu biểu
        </h2>
        <div className="mt-6 space-y-6">
          {era.philosophers.map((p) => (
            <div
              key={p.name}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200"
            >
              {/* Header triết gia */}
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                <p className="text-sm text-indigo-600 font-medium">{p.years}</p>
              </div>

              {/* Famous Quote */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl mb-5 flex gap-3 border border-purple-100">
                <Quote className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <blockquote className="italic text-gray-800 text-lg">
                  “{p.famousQuote}”
                </blockquote>
              </div>

              {/* Main Ideas */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">🧠 Tư tưởng chính</h4>
                <p className="text-gray-700 leading-relaxed">{p.mainIdeas}</p>
              </div>

              {/* Biography */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">📖 Tiểu sử</h4>
                <p className="text-gray-700 leading-relaxed">{p.biography}</p>
              </div>

              {/* Contributions */}
              {p.contributions && p.contributions.length > 0 && (
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

              {/* Works */}
              {p.works && p.works.length > 0 && (
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

              {/* Legacy */}
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

        {/* Section 3 triết gia Hy Lạp */}
        {era.id === "ancient" && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🏛️ Ba triết gia Hy Lạp vĩ đại
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Socrates */}
              <div>
                <img
                  src="/images/Scorates.png"
                  alt="Socrates"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">Socrates</p>
              </div>

              {/* Plato */}
              <div>
                <img
                  src="/images/Plato.jpg"
                  alt="Plato"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">Plato</p>
              </div>

              {/* Aristotle */}
              <div>
                <img
                  src="/images/Aristotle.jpg"
                  alt="Aristotle"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">Aristotle</p>
              </div>
            </div>
          </div>
        )}

                {/* Section 3 triết gia Trung Cổ */}
        {era.id === "medieval" && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ✝️ Ba triết gia Trung Cổ tiêu biểu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Augustine of Hippo */}
              <div>
                <img
                  src="/images/Augustine of Hippo.jpg"
                  alt="Augustine of Hippo"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Augustine of Hippo
                </p>
              </div>

              {/* Thomas Aquinas */}
              <div>
                <img
                  src="/images/Thomas Aquinas.jpg"
                  alt="Thomas Aquinas"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Thomas Aquinas
                </p>
              </div>

              {/* Avicenna (Ibn Sina) */}
              <div>
                <img
                  src="/images/Avicenna (Ibn Sina).jpg"
                  alt="Avicenna (Ibn Sina)"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Avicenna (Ibn Sina)
                </p>
              </div>
            </div>
          </div>
        )}

                {/* Section 3 triết gia Hiện Đại */}
        {era.id === "modern" && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📚 Ba triết gia Hiện Đại tiêu biểu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* René Descartes */}
              <div>
                <img
                  src="/images/René Descartes.jpg"
                  alt="René Descartes"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  René Descartes
                </p>
              </div>

              {/* John Locke */}
              <div>
                <img
                  src="/images/John Locke.jpg"
                  alt="John Locke"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  John Locke
                </p>
              </div>

              {/* Immanuel Kant */}
              <div>
                <img
                  src="/images/Immanuel Kant.jpg"
                  alt="Immanuel Kant"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Immanuel Kant
                </p>
              </div>
            </div>
          </div>
        )}

                {/* Section 3 triết gia Đương Đại */}
        {era.id === "contemporary" && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🌍 Ba triết gia Đương Đại tiêu biểu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Jean-Paul Sartre */}
              <div>
                <img
                  src="/images/Jean-Paul Sartre.jpg"
                  alt="Jean-Paul Sartre"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Jean-Paul Sartre
                </p>
              </div>

              {/* Michel Foucault */}
              <div>
                <img
                  src="/images/Michel Foucault.jpg"
                  alt="Michel Foucault"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Michel Foucault
                </p>
              </div>

              {/* Simone de Beauvoir */}
              <div>
                <img
                  src="/images/Simone de Beauvoir.jpg"
                  alt="Simone de Beauvoir"
                  className="w-full h-64 object-contain rounded-xl shadow-lg border mb-3"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Simone de Beauvoir
                </p>
              </div>
            </div>
          </div>
        )}



      </div>

      {/* Cột ảnh */}
      <div className="flex justify-center md:sticky md:top-20">
        <img
          src={imageSrc}
          alt={era.name}
          className="rounded-2xl shadow-xl max-h-[600px] object-contain border"
        />
      </div>
    </div>
  );
}

export default EraDetail;
