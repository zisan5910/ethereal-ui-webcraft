
import { useState } from 'react';
import { Element } from 'react-scroll';
import { BookOpen, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResearchPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

interface ResearchProps {
  onBack?: () => void;
}

const Research = ({ onBack }: ResearchProps) => {
  const [posts] = useState<ResearchPost[]>([
    {
      id: '1',
      title: 'ইসলামিক শিক্ষায় বিজ্ঞান ও প্রযুক্তির ভূমিকা',
      content: 'ইসলামে জ্ঞান অর্জনকে ফরজ বলা হয়েছে। কুরআন ও হাদিসের আলোকে দেখা যায় যে, ইসলাম বিজ্ঞান ও প্রযুক্তির উন্নয়নে সবসময় উৎসাহ দিয়েছে। আধুনিক প্রযুক্তি ব্যবহার করে কিভাবে ইসলামিক শিক্ষাকে আরও কার্যকর করা যায় তার উপর এই গবেষণায় আলোকপাত করা হয়েছে।',
      date: '2024-01-15',
      author: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান',
      category: 'ধর্ম ও প্রযুক্তি'
    },
    {
      id: '2',
      title: 'কুরআনে বর্ণিত বৈজ্ঞানিক সত্যসমূহ',
      content: 'পবিত্র কুরআনে বহু বৈজ্ঞানিক তথ্য রয়েছে যা আধুনিক বিজ্ঞান দ্বারা প্রমাণিত। ভ্রূণতত্ত্ব, জ্যোতির্বিদ্যা, ভূতত্ত্ব ইত্যাদি বিষয়ে কুরআনের বর্ণনা এবং আধুনিক বিজ্ঞানের আবিষ্কারের মধ্যে সাদৃশ্য নিয়ে এই গবেষণায় বিস্তারিত আলোচনা করা হয়েছে।',
      date: '2024-02-10',
      author: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান',
      category: 'ইসলামিক সায়েন্স'
    },
    {
      id: '3',
      title: 'ইসলামে পরিবেশ সংরক্ষণের গুরুত্ব',
      content: 'ইসলাম একটি পূর্ণাঙ্গ জীবনব্যবস্থা যা পরিবেশ সংরক্ষণের উপর বিশেষ গুরুত্ব আরোপ করে। কুরআন ও সুন্নাহর আলোকে পরিবেশ রক্ষার নির্দেশনা এবং আধুনিক পরিবেশগত চ্যালেঞ্জ মোকাবেলায় ইসলামিক দৃষ্টিভঙ্গি নিয়ে এই গবেষণায় আলোচনা করা হয়েছে।',
      date: '2024-03-05',
      author: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান',
      category: 'ইসলাম ও পরিবেশ'
    }
  ]);

  return (
    <Element name="research">
      <div className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 py-12">
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
              className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Home size={20} />
            </motion.button>

            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
              >
                <BookOpen className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">গবেষণা</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                ইসলামিক দৃষ্টিভঙ্গি থেকে প্রযুক্তি এবং উন্নয়নে আমার গবেষণা কাজ এবং একাডেমিক অবদান
              </p>
            </div>

            {/* Research Posts */}
            <div className="space-y-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {post.category}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                      <div className="text-sm text-gray-600 mb-4">
                        <span>{post.author} • {new Date(post.date).toLocaleDateString('bn-BD')}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{post.content}</p>
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
