import { Columns, Cross, BookOpen, Lightbulb } from 'lucide-react';

export interface Philosopher {
  name: string;
  years: string;
  mainIdeas: string;
  biography: string;
  famousQuote: string;
  contributions?: string[];
  works?: string[];
  legacy?: string;
}

export interface Era {
  id: string;
  name: string;
  period: string;
  description: string;
  icon: any;
  color: string;
  philosophers: Philosopher[];
}

export const timelineData: Era[] = [
  {
    id: 'ancient',
    name: 'Hy Lạp Cổ Đại',
    period: '800 TCN - 500 SCN',
    description: `Thời kỳ Hy Lạp cổ đại được coi là cái nôi của triết học phương Tây. 
    Thay vì dựa vào thần thoại, các triết gia tìm kiếm lời giải thích hợp lý (logos) cho thế giới. 
    Đây là giai đoạn đặt nền tảng cho logic, siêu hình học, đạo đức, chính trị và khoa học.`,
    icon: Columns,
    color: 'blue',
    philosophers: [
      {
        name: 'Socrates',
        years: '470–399 TCN',
        mainIdeas: 'Đạo đức học, phương pháp đối thoại (Socratic Method), nhấn mạnh tầm quan trọng của tự tri.',
        biography: `Socrates không viết tác phẩm nào, nhưng ảnh hưởng lớn qua học trò như Plato. 
        Ông thường tranh luận công khai, dùng phương pháp chất vấn để gợi mở tư duy phản biện. 
        Năm 399 TCN, ông bị xét xử và kết án tử hình tại Athens.`,
        famousQuote: 'Một cuộc sống không được suy xét thì không đáng sống.',
        contributions: [
          'Đặt trọng tâm triết học vào đời sống đạo đức cá nhân.',
          'Phát triển phương pháp đối thoại Socratic.',
          'Ảnh hưởng trực tiếp đến Plato, gián tiếp đến toàn bộ triết học phương Tây.'
        ],
        works: ['Không có tác phẩm trực tiếp, tư tưởng được ghi lại trong đối thoại của Plato và Xenophon.'],
        legacy: 'Socrates là biểu tượng của sự dũng cảm trong việc tìm kiếm chân lý, sẵn sàng hy sinh vì tri thức.'
      },
      {
        name: 'Plato',
        years: '427–347 TCN',
        mainIdeas: 'Thuyết Ý niệm (Forms), triết học chính trị, công lý, giáo dục.',
        biography: 'Học trò của Socrates, thầy của Aristotle, sáng lập Học viện Athens – trường triết học đầu tiên ở phương Tây.',
        famousQuote: 'Công lý chỉ xuất hiện khi mỗi người làm đúng phần việc của mình.',
        contributions: [
          'Phát triển học thuyết Ý niệm.',
          'Xây dựng triết học chính trị nền tảng.',
          'Ảnh hưởng sâu rộng đến Kitô giáo, Hồi giáo, và triết học phương Tây.'
        ],
        works: ['Cộng hòa', 'Phaedo', 'Symposium', 'Luật pháp'],
        legacy: 'Plato định hình cách tư duy triết học trong chính trị, giáo dục và tôn giáo suốt hàng nghìn năm.'
      },
      {
        name: 'Aristotle',
        years: '384–322 TCN',
        mainIdeas: 'Logic hình thức, đạo đức đức hạnh, chính trị, siêu hình học.',
        biography: 'Học trò của Plato, thầy của Alexander Đại đế, sáng lập trường Lyceum.',
        famousQuote: 'Con người là động vật chính trị.',
        contributions: [
          'Xây dựng logic hình thức (tam đoạn luận).',
          'Đặt nền tảng cho nhiều ngành khoa học tự nhiên và xã hội.',
          'Phát triển triết học đạo đức đức hạnh.'
        ],
        works: ['Nicomachean Ethics', 'Politics', 'Metaphysics', 'Poetics'],
        legacy: 'Tư tưởng Aristotle thống trị triết học và khoa học phương Tây hơn 1500 năm.'
      }
    ]
  },
  {
    id: 'medieval',
    name: 'Trung Cổ',
    period: '500–1500',
    description: `Triết học Trung Cổ chịu ảnh hưởng mạnh mẽ từ Kitô giáo, Hồi giáo và Do Thái giáo. 
    Trọng tâm là dung hòa lý trí và đức tin, phát triển thần học, tranh luận về sự tồn tại của Thượng đế, linh hồn và mục đích tối hậu của con người.`,
    icon: Cross,
    color: 'purple',
    philosophers: [
      {
        name: 'Augustine of Hippo',
        years: '354–430',
        mainIdeas: 'Thần học Kitô giáo, tự do ý chí, tội lỗi nguyên thủy.',
        biography: 'Một trong những nhà thần học Kitô giáo có ảnh hưởng lớn nhất thời kỳ đầu.',
        famousQuote: 'Trái tim tôi không yên cho đến khi nó tìm thấy Chúa.',
        contributions: [
          'Phát triển học thuyết tội lỗi nguyên thủy.',
          'Kết hợp triết học Plato với Kitô giáo.'
        ],
        works: ['Confessions', 'City of God'],
        legacy: 'Đặt nền móng cho thần học và triết học Kitô giáo phương Tây.'
      },
      {
        name: 'Thomas Aquinas',
        years: '1225–1274',
        mainIdeas: 'Kinh viện, kết hợp triết học Aristote với Kitô giáo.',
        biography: 'Triết gia, thần học gia Ý, được Giáo hội Công giáo phong Thánh.',
        famousQuote: 'Đức tin và lý trí cùng hướng đến một chân lý.',
        contributions: [
          'Phát triển 5 chứng minh sự tồn tại của Thượng đế.',
          'Hệ thống hóa thần học Kitô giáo.'
        ],
        works: ['Summa Theologica', 'Summa Contra Gentiles'],
        legacy: 'Một trong “Doctor of the Church”, ảnh hưởng lớn đến triết học và thần học Trung Cổ.'
      },
      {
        name: 'Avicenna (Ibn Sina)',
        years: '980–1037',
        mainIdeas: 'Siêu hình học, triết học Hồi giáo, y học.',
        biography: 'Triết gia và bác sĩ người Ba Tư, nổi tiếng với các công trình y học và triết học.',
        famousQuote: 'Tri thức là ánh sáng soi đường cho linh hồn.',
        contributions: [
          'Viết “Canon of Medicine” – sách y học chuẩn mực ở châu Âu nhiều thế kỷ.',
          'Phát triển triết học kết hợp Aristotle và Hồi giáo.'
        ],
        works: ['The Canon of Medicine', 'The Book of Healing'],
        legacy: 'Ảnh hưởng sâu rộng đến y học và triết học Hồi giáo – phương Tây.'
      }
    ]
  },
  {
    id: 'modern',
    name: 'Hiện Đại',
    period: '1500–1900',
    description: `Thời kỳ Hiện Đại gắn liền với Phục Hưng và Khai sáng. 
    Các triết gia nhấn mạnh lý trí, khoa học, tự do cá nhân, và trật tự xã hội. 
    Đây là thời kỳ hình thành các hệ thống triết học duy lý, kinh nghiệm luận, và triết học chính trị hiện đại.`,
    icon: BookOpen,
    color: 'green',
    philosophers: [
      {
        name: 'René Descartes',
        years: '1596–1650',
        mainIdeas: 'Chủ nghĩa duy lý, phương pháp hoài nghi, Cogito ergo sum.',
        biography: 'Triết gia Pháp, được coi là cha đẻ triết học hiện đại.',
        famousQuote: 'Tôi tư duy, nên tôi tồn tại.',
        contributions: [
          'Đặt nền móng cho triết học duy lý.',
          'Phát triển phương pháp hoài nghi triết học.'
        ],
        works: ['Meditations on First Philosophy', 'Discourse on Method'],
        legacy: 'Ảnh hưởng lớn đến khoa học, toán học và triết học hiện đại.'
      },
      {
        name: 'John Locke',
        years: '1632–1704',
        mainIdeas: 'Chủ nghĩa kinh nghiệm, quyền tự nhiên, xã hội dân sự.',
        biography: 'Triết gia Anh, cha đẻ của chủ nghĩa tự do chính trị.',
        famousQuote: 'Con người sinh ra với quyền tự nhiên về sự sống, tự do và tài sản.',
        contributions: [
          'Đặt nền tảng cho chủ nghĩa tự do chính trị.',
          'Ảnh hưởng trực tiếp đến Hiến pháp Mỹ và Tuyên ngôn Nhân quyền.'
        ],
        works: ['Two Treatises of Government', 'Essay Concerning Human Understanding'],
        legacy: 'Được coi là “Cha đẻ của chủ nghĩa tự do”.'
      },
      {
        name: 'Immanuel Kant',
        years: '1724–1804',
        mainIdeas: 'Đạo đức bổn phận (deontology), tri thức luận, lý tính thuần túy.',
        biography: 'Triết gia Đức, nhân vật trung tâm của Khai sáng.',
        famousQuote: 'Hãy hành động chỉ theo nguyên tắc mà bạn muốn nó trở thành luật phổ quát.',
        contributions: [
          'Tổng hợp chủ nghĩa duy lý và kinh nghiệm.',
          'Phát triển triết học đạo đức bổn phận.'
        ],
        works: ['Critique of Pure Reason', 'Critique of Practical Reason', 'Critique of Judgment'],
        legacy: 'Tư tưởng Kant ảnh hưởng sâu rộng đến đạo đức học, chính trị và triết học hiện đại.'
      }
    ]
  },
  {
    id: 'contemporary',
    name: 'Đương Đại',
    period: '1900–nay',
    description: `Triết học đương đại đa dạng, phản ánh thế giới hiện đại phức tạp. 
    Bao gồm hiện sinh, phân tích ngôn ngữ, hậu hiện đại, nữ quyền, phân tâm học, và triết học ứng dụng.`,
    icon: Lightbulb,
    color: 'orange',
    philosophers: [
      {
        name: 'Jean-Paul Sartre',
        years: '1905–1980',
        mainIdeas: 'Chủ nghĩa hiện sinh, tự do và trách nhiệm.',
        biography: 'Triết gia Pháp, tác giả “Hữu thể và hư vô”.',
        famousQuote: 'Con người bị kết án phải tự do.',
        contributions: [
          'Đặt nền móng cho chủ nghĩa hiện sinh.',
          'Đề cao tự do và trách nhiệm cá nhân.'
        ],
        works: ['Being and Nothingness', 'Nausea'],
        legacy: 'Ảnh hưởng lớn đến triết học, văn học và chính trị thế kỷ 20.'
      },
      {
        name: 'Michel Foucault',
        years: '1926–1984',
        mainIdeas: 'Quyền lực, tri thức, diễn ngôn, phê phán xã hội.',
        biography: 'Triết gia Pháp, phân tích các thiết chế quyền lực xã hội.',
        famousQuote: 'Ở đâu có quyền lực, ở đó có sự kháng cự.',
        contributions: [
          'Phát triển lý thuyết quyền lực – tri thức.',
          'Ảnh hưởng đến xã hội học, nhân học, và lý thuyết phê phán.'
        ],
        works: ['Discipline and Punish', 'The History of Sexuality'],
        legacy: 'Một trong những gương mặt tiêu biểu của triết học hậu hiện đại.'
      },
      {
        name: 'Simone de Beauvoir',
        years: '1908–1986',
        mainIdeas: 'Chủ nghĩa nữ quyền, hiện sinh.',
        biography: 'Triết gia, nhà văn Pháp, tác giả “Giới tính thứ hai”.',
        famousQuote: 'Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.',
        contributions: [
          'Khai sinh triết học nữ quyền hiện đại.',
          'Kết hợp chủ nghĩa hiện sinh với phong trào giải phóng phụ nữ.'
        ],
        works: ['The Second Sex', 'Memoirs of a Dutiful Daughter'],
        legacy: 'Một trong những nhà tư tưởng nữ quyền có ảnh hưởng nhất thế kỷ 20.'
      }
    ]
  }
];
