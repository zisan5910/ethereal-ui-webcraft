
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Trophy, Target, Binary, Network, Calculator, ExternalLink } from 'lucide-react';

interface OlympiadProps {
  language: 'en' | 'bn';
}

const Olympiad = ({ language }: OlympiadProps) => {
  const olympiads = [
    {
      id: 'zero-olympiad',
      title: {
        en: 'Zero Olympiad',
        bn: 'জিরো অলিম্পিয়াড',
      },
      description: {
        en: 'UN SDGs and climate action strategies',
        bn: 'জাতিসংঘের এসডিজি এবং জলবায়ু কর্ম কৌশল',
      },
      icon: <Target size={20} className="text-red-500" />,
      certificateUrl: 'https://drive.google.com/drive/folders/10q_vKhkwR6a5rKgoutz_spN4qpOp1J1C',
      websiteUrl: 'https://faatihaaayat.com/zeroolympiad/',
      color: 'red',
    },
    {
      id: 'ai-olympiad',
      title: {
        en: 'Bangladesh Artificial Intelligence Olympiad',
        bn: 'বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড',
      },
      description: {
        en: 'National AI competition testing knowledge in machine learning, neural networks, and AI ethics',
        bn: 'মেশিন লার্নিং, নিউরাল নেটওয়ার্ক এবং এআই নীতিশাস্ত্রের জ্ঞান পরীক্ষা করে জাতীয় এআই প্রতিযোগিতা',
      },
      icon: <Binary size={20} className="text-indigo-500" />,
      certificateUrl: 'https://example.com/certificates/ai-olympiad',
      websiteUrl: 'https://bdaio.org/',
      color: 'indigo',
    },
    {
      id: 'ict-olympiad',
      title: {
        en: 'ICT Olympiad Bangladesh',
        bn: 'আইসিটি অলিম্পিয়াড বাংলাদেশ',
      },
      description: {
        en: 'National competition testing knowledge in information and communication technologies',
        bn: 'তথ্য ও যোগাযোগ প্রযুক্তি বিষয়ক জ্ঞান পরীক্ষা করে জাতীয় প্রতিযোগিতা',
      },
      icon: <Network size={20} className="text-emerald-500" />,
      certificateUrl: 'https://drive.google.com/drive/folders/1bfZ0wgs_YPL9VW0IFRD_G2MW4xkrZUwP',
      websiteUrl: 'https://www.ictolympiadbangladesh.com/',
      color: 'emerald',
    },
    {
      id: 'math-olympiad',
      title: {
        en: 'Math Olympiad',
        bn: 'গণিত অলিম্পিয়াড',
      },
      description: {
        en: 'Prestigious mathematics competition for exceptional problem-solving skills',
        bn: 'অসাধারণ সমস্যা সমাধানের দক্ষতার জন্য মর্যাদাপূর্ণ গণিত প্রতিযোগিতা',
      },
      icon: <Calculator size={20} className="text-cyan-500" />,
      certificateUrl: 'https://drive.google.com/drive/folders/1v6cYDB9Rdyc4YyaFSZ-54w7EZ-dy6QbC',
      websiteUrl: 'https://online.matholympiad.org.bd/',
      color: 'cyan',
    },
  ];

  return (
    <Element name="olympiad">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="bg-white p-8 rounded-2xl shadow-xl"
        aria-labelledby="olympiad-heading"
      >
        <h2
          id="olympiad-heading"
          className="text-3xl font-bold mb-8 flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
        >
          <Trophy className="text-amber-500" />
          {language === 'en' ? 'Academic Olympiads' : 'একাডেমিক অলিম্পিয়াড'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {olympiads.map((olympiad, index) => (
            <motion.div
              key={olympiad.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br from-${olympiad.color}-50 to-${olympiad.color}-100 p-6 rounded-xl border border-${olympiad.color}-200 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-${olympiad.color}-200 rounded-full group-hover:scale-110 transition-transform`}>
                  {olympiad.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {olympiad.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {olympiad.description[language]}
                  </p>
                  <div className="flex gap-3">
                    {olympiad.certificateUrl && (
                      <a
                        href={olympiad.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs flex items-center gap-1 text-${olympiad.color}-600 hover:text-${olympiad.color}-800 transition-colors`}
                      >
                        <ExternalLink size={14} />
                        {language === 'en' ? 'Certificate' : 'সার্টিফিকেট'}
                      </a>
                    )}
                    {olympiad.websiteUrl && (
                      <a
                        href={olympiad.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink size={14} />
                        {language === 'en' ? 'Website' : 'ওয়েবসাইট'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Element>
  );
};

export default Olympiad;
