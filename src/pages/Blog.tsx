
import { useState } from 'react';
import { Element } from 'react-scroll';
import { PenTool, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

interface BlogProps {
  onBack?: () => void;
}

const Blog = ({ onBack }: BlogProps) => {
  const [posts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'স্বপ্নের ডানায়',
      content: `আকাশের নীলিমায় মিশে যাওয়া
স্বপ্নের ডানায় ভর করে উড়াল,
মেঘের পাহাড় পার হয়ে যাওয়া
জীবনের নতুন এক অধ্যায়।

প্রযুক্তির জগতে হারিয়ে যাওয়া
কোডের ভাষায় গড়া নতুন সৃষ্টি,
স্বপ্নের সেতু তৈরি করে যাওয়া
জীবনের প্রতিটি মুহূর্তে।`,
      date: '2024-01-20',
      author: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান',
      tags: ['কবিতা', 'স্বপ্ন', 'প্রযুক্তি']
    },
    {
      id: '2',
      title: 'মায়ের ভালোবাসা',
      content: `মায়ের চোখের পানিতে লুকিয়ে আছে
অসীম ভালোবাসার সমুদ্র,
তার হাসিতে মিশে আছে
জীবনের সব সুখের খবর।

দুঃখে তার বুকে মাথা রেখে
পেয়েছি শান্তির ছোঁয়া,
মায়ের দোয়ায় আছে সেই শক্তি
যা পারে সব বাধা ভেঙে দিতে।`,
      date: '2024-02-14',
      author: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান',
      tags: ['কবিতা', 'মা', 'ভালোবাসা']
    },
    {
      id: '3',
      title: 'বন্ধুত্বের গান',
      content: `বন্ধুত্বের মিষ্টি সুরে বাঁধা
জীবনের সুখ-দুঃখের গল্প,
একসাথে হাসি কান্নার মেলা
একসাথে চলার সব শপথ।

দূরত্ব কখনো পারে না আমাদের
আলাদা করে রাখতে,
বন্ধুত্বের সুতোয় বাঁধা থাকে
জীবনের সব মধুর স্মৃতি।`,
      date: '2024-03-10',
      author: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান',
      tags: ['কবিতা', 'বন্ধুত্ব', 'স্মৃতি']
    }
  ]);

  return (
    <Element name="blog">
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
              className="mb-6 flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              <Home size={20} />
            </motion.button>

            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"
              >
                <PenTool className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">কবিতার ভুবন</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                হৃদয়ের গভীর থেকে উঠে আসা অনুভূতির ছন্দময় প্রকাশ
              </p>
            </div>

            {/* Blog Posts */}
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
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                      <div className="text-sm text-gray-600 mb-3">
                        <span>{post.author} • {new Date(post.date).toLocaleDateString('bn-BD')}</span>
                      </div>
                      <div className="flex gap-2 flex-wrap mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line font-bengali">
                      {post.content}
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

export default Blog;
