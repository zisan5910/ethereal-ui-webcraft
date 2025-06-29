
import { Element } from 'react-scroll';
import { BookOpen, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { researchPosts } from '../data/researchData';

interface ResearchProps {
  onBack?: () => void;
  language: 'en' | 'bn';
}

const Research = ({ onBack, language = 'en' }: ResearchProps) => {
  const pageTitle = {
    en: 'Research',
    bn: 'গবেষণা'
  };

  const pageSubtitle = {
    en: 'My research work and academic contributions from an Islamic perspective on technology and development',
    bn: 'ইসলামিক দৃষ্টিভঙ্গি থেকে প্রযুক্তি এবং উন্নয়নে আমার গবেষণা কাজ এবং একাডেমিক অবদান'
  };

  return (
    <Element name="research">
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Home Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="mb-8 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-blue-600 hover:text-blue-700"
            >
              <Home size={20} />
            </motion.button>

            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6"
              >
                <BookOpen className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{pageTitle[language]}</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                {pageSubtitle[language]}
              </p>
            </div>

            {/* Research Posts */}
            <div className="space-y-6">
              {researchPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category[language]}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title[language]}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">{post.content[language]}</p>
                    <div className="text-sm text-gray-600">
                      <span>{post.author[language]}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Research;
