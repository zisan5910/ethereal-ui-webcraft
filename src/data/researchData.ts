export interface ResearchItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  abstract: {
    en: string;
    bn: string;
  };
  keywords: {
    en: string[];
    bn: string[];
  };
  introduction: {
    en: string;
    bn: string;
  };
  objectives: {
    en: string;
    bn: string;
  };
  methodology: {
    en: string;
    bn: string;
  };
  results: {
    en: string;
    bn: string;
  };
  discussion: {
    en: string;
    bn: string;
  };
  conclusion: {
    en: string;
    bn: string;
  };
  references: {
    en: string[];
    bn: string[];
  };
  acknowledgement: {
    en: string;
    bn: string;
  };
  date: string;
  author: {
    en: string;
    bn: string;
  };
  image: string;
}

export const researchData: ResearchItem[] = [
  {
    id: "1",
    title: {
      en: "The Role of Prayer in Islamic Spirituality",
      bn: "ইসলামী আধ্যাত্মিকতায় নামাজের ভূমিকা"
    },
    abstract: {
      en: "This research explores the fundamental role of prayer (Salah) in Islamic spirituality and its impact on the spiritual development of Muslims. Through comprehensive analysis of Islamic texts and contemporary practices, this study demonstrates how prayer serves as a cornerstone of spiritual growth.",
      bn: "এই গবেষণায় ইসলামী আধ্যাত্মিকতায় নামাজের মৌলিক ভূমিকা এবং মুসলমানদের আধ্যাত্মিক উন্নতিতে এর প্রভাব নিয়ে আলোচনা করা হয়েছে। ইসলামী গ্রন্থ ও সমসাময়িক অনুশীলনের ব্যাপক বিশ্লেষণের মাধ্যমে এই অধ্যয়নে দেখানো হয়েছে কীভাবে নামাজ আধ্যাত্মিক উন্নয়নের ভিত্তিপ্রস্তর হিসেবে কাজ করে।"
    },
    keywords: {
      en: ["Prayer", "Islam", "Spirituality", "Faith", "Worship", "Salah", "Islamic Practice"],
      bn: ["নামাজ", "ইসলাম", "আধ্যাত্মিকতা", "বিশ্বাস", "ইবাদত", "সালাত", "ইসলামী অনুশীলন"]
    },
    introduction: {
      en: "Prayer (Salah) represents one of the most fundamental aspects of Islamic worship and spirituality. As the second pillar of Islam, it establishes a direct and intimate connection between the believer and Allah. The significance of prayer extends beyond mere ritual observance; it serves as a transformative spiritual practice that shapes the Muslim's consciousness, character, and relationship with the divine.",
      bn: "নামাজ (সালাত) ইসলামী ইবাদত ও আধ্যাত্মিকতার অন্যতম মৌলিক দিক। ইসলামের দ্বিতীয় স্তম্ভ হিসেবে এটি বিশ্বাসী ও আল্লাহর মধ্যে প্রত্যক্ষ ও ঘনিষ্ঠ সংযোগ স্থাপন করে। নামাজের গুরুত্ব নিছক আনুষ্ঠানিক পালনের চেয়ে অনেক বেশি; এটি একটি রূপান্তরকারী আধ্যাত্মিক অনুশীলন যা মুসলমানের চেতনা, চরিত্র এবং ঐশ্বরিকতার সাথে সম্পর্ক গঠন করে।"
    },
    objectives: {
      en: "1. To examine the theological foundations of prayer in Islamic tradition\n2. To analyze the psychological and spiritual benefits of regular prayer practice\n3. To investigate the role of prayer in character development and moral purification\n4. To explore the community-building aspects of congregational prayer\n5. To assess the contemporary relevance of traditional prayer practices",
      bn: "১. ইসলামী ঐতিহ্যে নামাজের ধর্মতাত্ত্বিক ভিত্তি পরীক্ষা করা\n২. নিয়মিত নামাজ অনুশীলনের মানসিক ও আধ্যাত্মিক সুবিধা বিশ্লেষণ করা\n৩. চরিত্র গঠন ও নৈতিক শুদ্ধতায় নামাজের ভূমিকা অনুসন্ধান করা\n৪. জামাতে নামাজের সমাজ গঠনের দিকগুলো অন্বেষণ করা\n৫. ঐতিহ্যবাহী নামাজ অনুশীলনের সমসাময়িক প্রাসঙ্গিকতা মূল্যায়ন করা"
    },
    methodology: {
      en: "This study employs a qualitative research methodology combining textual analysis of primary Islamic sources (Quran and Hadith) with contemporary scholarly interpretations. The research methodology includes:\n\n1. Literature Review: Comprehensive analysis of classical and modern Islamic scholarship on prayer\n2. Textual Analysis: Examination of Quranic verses and prophetic traditions related to prayer\n3. Comparative Study: Analysis of different schools of Islamic jurisprudence regarding prayer practices\n4. Contemporary Application: Investigation of modern Muslim practices and interpretations",
      bn: "এই অধ্যয়নে গুণগত গবেষণা পদ্ধতি ব্যবহার করা হয়েছে যা প্রাথমিক ইসলামী উৎস (কুরআন ও হাদিস) এর পাঠ্য বিশ্লেষণের সাথে সমসাময়িক পণ্ডিত ব্যাখ্যার সমন্বয় করে। গবেষণা পদ্ধতিতে অন্তর্ভুক্ত রয়েছে:\n\n১. সাহিত্য পর্যালোচনা: নামাজ বিষয়ে ক্লাসিক্যাল ও আধুনিক ইসলামী বৃত্তিমূলক কাজের ব্যাপক বিশ্লেষণ\n২. পাঠ্য বিশ্লেষণ: নামাজ সম্পর্কিত কুরআনিক আয়াত ও নবী ঐতিহ্যের পরীক্ষা\n৩. তুলনামূলক অধ্যয়ন: নামাজ অনুশীলন সম্পর্কে ইসলামী আইনশাস্ত্রের বিভিন্ন মাযহাবের বিশ্লেষণ\n৪. সমসাময়িক প্রয়োগ: আধুনিক মুসলিম অনুশীলন ও ব্যাখ্যার তদন্ত"
    },
    results: {
      en: "The research findings reveal several key aspects of prayer's role in Islamic spirituality:\n\n1. Spiritual Connection: Prayer establishes a direct line of communication with Allah, fostering spiritual intimacy and consciousness\n2. Character Development: Regular prayer practice cultivates discipline, humility, and moral awareness\n3. Psychological Benefits: Prayer provides stress relief, emotional stability, and sense of purpose\n4. Social Cohesion: Congregational prayers strengthen community bonds and social solidarity\n5. Time Management: The five daily prayers structure Muslim life around spiritual priorities",
      bn: "গবেষণার ফলাফল ইসলামী আধ্যাত্মিকতায় নামাজের ভূমিকার কয়েকটি মূল দিক প্রকাশ করে:\n\n১. আধ্যাত্মিক সংযোগ: নামাজ আল্লাহর সাথে প্রত্যক্ষ যোগাযোগের লাইন স্থাপন করে, আধ্যাত্মিক ঘনিষ্ঠতা ও চেতনা বৃদ্ধি করে\n২. চরিত্র গঠন: নিয়মিত নামাজ অনুশীলন শৃঙ্খলা, নম্রতা ও নৈতিক সচেতনতা গড়ে তোলে\n৩. মানসিক সুবিধা: নামাজ মানসিক চাপ মুক্তি, আবেগিক স্থিতিশীলতা ও উদ্দেশ্যের অনুভূতি প্রদান করে\n৪. সামাজিক সংহতি: জামাতে নামাজ সমাজের বন্ধন ও সামাজিক সংহতি শক্তিশালী করে\n৫. সময় ব্যবস্থাপনা: পাঁচ ওয়াক্ত নামাজ মুসলিম জীবনকে আধ্যাত্মিক অগ্রাধিকারের চারপাশে গঠন করে"
    },
    discussion: {
      en: "The findings underscore the multidimensional nature of prayer in Islamic spirituality. Prayer functions not merely as a ritualistic obligation but as a comprehensive spiritual technology that addresses human needs on multiple levels. The rhythmic nature of five daily prayers creates a spiritual framework that permeates all aspects of Muslim life.\n\nThe psychological benefits observed align with contemporary research on meditation and mindfulness practices, suggesting that Islamic prayer incorporates elements that promote mental health and emotional well-being. The community aspect of congregational prayer addresses the human need for social connection and shared spiritual experience.",
      bn: "ফলাফলগুলি ইসলামী আধ্যাত্মিকতায় নামাজের বহুমাত্রিক প্রকৃতির উপর জোর দেয়। নামাজ কেবল আনুষ্ঠানিক বাধ্যবাধকতা হিসেবে নয় বরং একটি ব্যাপক আধ্যাত্মিক প্রযুক্তি হিসেবে কাজ করে যা একাধিক স্তরে মানুষের প্রয়োজন পূরণ করে। পাঁচ ওয়াক্ত নামাজের ছন্দবদ্ধ প্রকৃতি একটি আধ্যাত্মিক কাঠামো তৈরি করে যা মুসলিম জীবনের সকল দিকে ব্যাপ্ত।\n\nপর্যবেক্ষিত মানসিক সুবিধাগুলি ধ্যান ও সতর্কতা অনুশীলনের উপর সমসাময়িক গবেষণার সাথে সামঞ্জস্যপূর্ণ, যা নির্দেশ করে যে ইসলামী নামাজ এমন উপাদান অন্তর্ভুক্ত করে যা মানসিক স্বাস্থ্য ও আবেগিক কল্যাণ প্রচার করে।"
    },
    conclusion: {
      en: "This research concludes that prayer (Salah) serves as a cornerstone of Islamic spirituality, providing a comprehensive framework for spiritual development, character formation, and community building. The five daily prayers function as spiritual anchors that maintain the believer's connection with Allah while fostering personal growth and social harmony.\n\nThe study demonstrates that prayer's significance extends beyond individual spirituality to encompass broader social and psychological dimensions. As Muslims continue to navigate contemporary challenges, the traditional practice of prayer remains a vital resource for spiritual resilience and community cohesion.",
      bn: "এই গবেষণা এই সিদ্ধান্তে পৌঁছায় যে নামাজ (সালাত) ইসলামী আধ্যাত্মিকতার ভিত্তিপ্রস্তর হিসেবে কাজ করে, আধ্যাত্মিক উন্নয়ন, চরিত্র গঠন ও সমাজ গঠনের জন্য একটি ব্যাপক কাঠামো প্রদান করে। পাঁচ ওয়াক্ত নামাজ আধ্যাত্মিক নোঙর হিসেবে কাজ করে যা ব্যক্তিগত বৃদ্ধি ও সামাজিক সম্প্রীতি বৃদ্ধির পাশাপাশি বিশ্বাসীর আল্লাহর সাথে সংযোগ বজায় রাখে।\n\nঅধ্যয়নটি প্রমাণ করে যে নামাজের গুরুত্ব ব্যক্তিগত আধ্যাত্মিকতার বাইরে বিস্তৃত সামাজিক ও মানসিক মাত্রাকে অন্তর্ভুক্ত করে। মুসলমানরা যখন সমসাময়িক চ্যালেঞ্জ মোকাবেলা করতে থাকে, নামাজের ঐতিহ্যবাহী অনুশীলন আধ্যাত্মিক স্থিতিস্থাপকতা ও সমাজের সংহতির জন্য একটি গুরুত্বপূর্ণ সম্পদ থেকে যায়।"
    },
    references: {
      en: [
        "Al-Quran al-Kareem",
        "Sahih al-Bukhari",
        "Sahih Muslim",
        "Al-Ghazali, Abu Hamid. (1058-1111). Ihya Ulum al-Din",
        "Ibn Taymiyyah, Ahmad. (1263-1328). Majmu al-Fatawa",
        "Nasr, Seyyed Hossein. (1987). Islamic Spirituality: Foundations",
        "Esposito, John L. (2011). What Everyone Needs to Know About Islam",
        "Ramadan, Tariq. (2009). In the Footsteps of the Prophet"
      ],
      bn: [
        "আল-কুরআনুল কারীম",
        "সহীহ আল-বুখারী",
        "সহীহ মুসলিম",
        "আল-গাজালী, আবু হামিদ। (১০৫৮-১১১১)। ইহইয়া উলূম আল-দীন",
        "ইবন তাইমিয়্যাহ, আহমাদ। (১২৬৩-১৩২৮)। মাজমু আল-ফাতাওয়া",
        "নাসর, সাইয়্যেদ হোসেইন। (১৯৮৭)। ইসলামী আধ্যাত্মিকতা: ভিত্তিসমূহ",
        "এস্পোসিতো, জন এল। (২০১১)। ইসলাম সম্পর্কে সবার জানা প্রয়োজন",
        "রমাদান, তারিক। (২০০৯)। নবীর পদাঙ্ক অনুসরণে"
      ]
    },
    acknowledgement: {
      en: "I extend my heartfelt gratitude to Allah (SWT) for providing the opportunity and guidance to conduct this research. Special thanks to my teachers, family, and the Islamic scholarly community whose works have enriched this study. May this research contribute to a deeper understanding of Islamic spirituality and the transformative power of prayer.",
      bn: "এই গবেষণা পরিচালনার সুযোগ ও দিকনির্দেশনা প্রদানের জন্য আমি আল্লাহ তায়ালার কাছে আন্তরিক কৃতজ্ঞতা প্রকাশ করছি। আমার শিক্ষকমণ্ডলী, পরিবার এবং ইসলামী পণ্ডিত সমাজের প্রতি বিশেষ ধন্যবাদ যাদের কাজ এই অধ্যয়নকে সমৃদ্ধ করেছে। এই গবেষণা ইসলামী আধ্যাত্মিকতা এবং নামাজের রূপান্তরকারী শক্তির গভীর বোঝাপড়ায় অবদান রাখুক।"
    },
    date: "2024-01-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    image: "photo-1461749280684-dccba630e2f6"
  },
  {
    id: "2",
    title: {
      en: "The Concept of Tawhid in Islamic Theology",
      bn: "ইসলামী ধর্মতত্ত্বে তাওহীদের ধারণা"
    },
    abstract: {
      en: "An in-depth analysis of the concept of Tawhid (monotheism) and its central importance in Islamic belief system. This study examines the theological foundations, practical implications, and spiritual dimensions of Islamic monotheism.",
      bn: "তাওহীদ (একেশ্বরবাদ) এর ধারণা এবং ইসলামী বিশ্বাস ব্যবস্থায় এর কেন্দ্রীয় গুরুত্বের গভীর বিশ্লেষণ। এই অধ্যয়নে ইসলামী একেশ্বরবাদের ধর্মতাত্ত্বিক ভিত্তি, ব্যবহারিক প্রভাব এবং আধ্যাত্মিক মাত্রা পরীক্ষা করা হয়েছে।"
    },
    keywords: {
      en: ["Tawhid", "Monotheism", "Islamic Theology", "Faith", "Unity", "Allah", "Divinity"],
      bn: ["তাওহীদ", "একেশ্বরবাদ", "ইসলামী ধর্মতত্ত্ব", "বিশ্বাস", "একত্ব", "আল্লাহ", "ঐশ্বরিকতা"]
    },
    introduction: {
      en: "Tawhid, derived from the Arabic root w-h-d meaning 'to unite' or 'to make one,' represents the fundamental doctrine of Islamic theology. It encompasses the belief in the absolute oneness and uniqueness of Allah, forming the cornerstone upon which the entire edifice of Islamic faith is built. This concept transcends mere numerical unity to embrace the totality of divine attributes, actions, and sovereignty.",
      bn: "তাওহীদ, আরবি মূল w-h-d থেকে এসেছে যার অর্থ 'একত্রিত করা' বা 'এক করা', এটি ইসলামী ধর্মতত্ত্বের মৌলিক মতবাদ। এটি আল্লাহর পরম একত্ব ও অনন্যতায় বিশ্বাসকে অন্তর্ভুক্ত করে, যা ইসলামী বিশ্বাসের সমগ্র ভবনের ভিত্তিপ্রস্তর গঠন করে। এই ধারণা নিছক সংখ্যাগত একত্বের চেয়ে বেশি, এটি ঐশ্বরিক গুণাবলী, কর্ম ও সার্বভৌমত্বের সামগ্রিকতাকে অন্তর্ভুক্ত করে।"
    },
    objectives: {
      en: "1. To explore the multidimensional nature of Tawhid in Islamic theology\n2. To analyze the three categories of Tawhid: Rububiyyah, Uluhiyyah, and Asma wa Sifat\n3. To examine the practical implications of Tawhid in Muslim life and worship\n4. To investigate the relationship between Tawhid and Islamic jurisprudence\n5. To assess the impact of Tawhid on Islamic civilization and culture",
      bn: "১. ইসলামী ধর্মতত্ত্বে তাওহীদের বহুমাত্রিক প্রকৃতি অন্বেষণ করা\n২. তাওহীদের তিনটি বিভাগ বিশ্লেষণ করা: রুবুবিয়্যাহ, উলুহিয়্যাহ এবং আসমা ওয়া সিফাত\n৩. মুসলিম জীবন ও ইবাদতে তাওহীদের ব্যবহারিক প্রভাব পরীক্ষা করা\n৪. তাওহীদ ও ইসলামী আইনশাস্ত্রের মধ্যে সম্পর্ক অনুসন্ধান করা\n৫. ইসলামী সভ্যতা ও সংস্কৃতিতে তাওহীদের প্রভাব মূল্যায়ন করা"
    },
    methodology: {
      en: "This research employs a comprehensive theological methodology combining:\n\n1. Quranic Exegesis: Analysis of Quranic verses related to divine unity\n2. Hadith Studies: Examination of prophetic traditions explaining Tawhid\n3. Classical Commentary: Review of major Islamic theological works\n4. Comparative Analysis: Study of different scholarly interpretations\n5. Historical Context: Investigation of Tawhid's development in Islamic thought",
      bn: "এই গবেষণায় একটি ব্যাপক ধর্মতাত্ত্বিক পদ্ধতি ব্যবহার করা হয়েছে যার মধ্যে রয়েছে:\n\n১. কুরআনিক তাফসীর: ঐশ্বরিক একত্ব সম্পর্কিত কুরআনিক আয়াতের বিশ্লেষণ\n২. হাদিস অধ্যয়ন: তাওহীদ ব্যাখ্যাকারী নবী ঐতিহ্যের পরীক্ষা\n৩. ক্লাসিক্যাল ভাষ্য: প্রধান ইসলামী ধর্মতাত্ত্বিক কাজের পর্যালোচনা\n৪. তুলনামূলক বিশ্লেষণ: বিভিন্ন পণ্ডিত ব্যাখ্যার অধ্যয়ন\n৫. ঐতিহাসিক প্রেক্ষাপট: ইসলামী চিন্তাধারায় তাওহীদের বিকাশের তদন্ত"
    },
    results: {
      en: "The study reveals that Tawhid operates on three fundamental levels:\n\n1. Tawhid ar-Rububiyyah: Recognition of Allah as the sole Creator, Sustainer, and Controller\n2. Tawhid al-Uluhiyyah: Worship and devotion directed exclusively to Allah\n3. Tawhid al-Asma wa as-Sifat: Affirmation of Allah's perfect names and attributes\n\nThese dimensions work synergistically to create a comprehensive worldview that influences every aspect of Muslim belief and practice.",
      bn: "অধ্যয়নে প্রকাশিত হয়েছে যে তাওহীদ তিনটি মৌলিক স্তরে কাজ করে:\n\n১. তাওহীদ আর-রুবুবিয়্যাহ: আল্লাহকে একমাত্র স্রষ্টা, রক্ষণাবেক্ষণকারী ও নিয়ন্ত্রক হিসেবে স্বীকৃতি\n২. তাওহীদ আল-উলুহিয়্যাহ: একমাত্র আল্লাহর জন্য উপাসনা ও ভক্তি\n৩. তাওহীদ আল-আসমা ওয়া আস-সিফাত: আল্লাহর নিখুঁত নাম ও গুণাবলীর স্বীকৃতি\n\nএই মাত্রাগুলি একসাথে কাজ করে একটি ব্যাপক বিশ্বদৃষ্টিভঙ্গি তৈরি করে যা মুসলিম বিশ্বাস ও অনুশীলনের প্রতিটি দিককে প্রভাবিত করে।"
    },
    discussion: {
      en: "The concept of Tawhid extends far beyond theological abstraction to practical implementation in daily life. It establishes a framework for understanding reality, morality, and human purpose. The implications of Tawhid permeate Islamic law, ethics, social organization, and personal conduct.\n\nThis study demonstrates that Tawhid serves as both a theological principle and a practical guide, shaping not only individual spirituality but also collective Muslim identity and civilization.",
      bn: "তাওহীদের ধারণা ধর্মতাত্ত্বিক বিমূর্ততার চেয়ে অনেক বেশি, এটি দৈনন্দিন জীবনে ব্যবহারিক বাস্তবায়নে প্রসারিত। এটি বাস্তবতা, নৈতিকতা এবং মানবিক উদ্দেশ্য বোঝার জন্য একটি কাঠামো স্থাপন করে। তাওহীদের প্রভাব ইসলামী আইন, নীতিশাস্ত্র, সামাজিক সংগঠন এবং ব্যক্তিগত আচরণে ব্যাপ্ত।\n\nএই অধ্যয়ন প্রমাণ করে যে তাওহীদ একটি ধর্মতাত্ত্বিক নীতি এবং ব্যবহারিক গাইড উভয়ই, যা কেবল ব্যক্তিগত আধ্যাত্মিকতা নয় বরং সামগ্রিক মুসলিম পরিচয় ও সভ্যতাকেও আকার দেয়।"
    },
    conclusion: {
      en: "This research concludes that Tawhid represents the most fundamental and comprehensive doctrine in Islamic theology. It serves as the organizing principle that unifies all aspects of Islamic belief, practice, and civilization. The three dimensions of Tawhid work together to create a holistic understanding of divine reality and human responsibility.\n\nAs the foundation of Islamic faith, Tawhid continues to guide Muslim communities in their spiritual journey and social development, providing both theological clarity and practical direction for contemporary challenges.",
      bn: "এই গবেষণা এই সিদ্ধান্তে পৌঁছায় যে তাওহীদ ইসলামী ধর্মতত্ত্বের সবচেয়ে মৌলিক ও ব্যাপক মতবাদ। এটি সংগঠিত নীতি হিসেবে কাজ করে যা ইসলামী বিশ্বাস, অনুশীলন এবং সভ্যতার সকল দিককে একত্রিত করে। তাওহীদের তিনটি মাত্রা একসাথে কাজ করে ঐশ্বরিক বাস্তবতা ও মানবিক দায়বদ্ধতার সামগ্রিক বোঝাপড়া তৈরি করে।\n\nইসলামী বিশ্বাসের ভিত্তি হিসেবে, তাওহীদ মুসলিম সমাজকে তাদের আধ্যাত্মিক যাত্রা ও সামাজিক উন্নয়নে পথ দেখাতে থাকে, সমসাময়িক চ্যালেঞ্জের জন্য ধর্মতাত্ত্বিক স্পষ্টতা ও ব্যবহারিক দিকনির্দেশনা প্রদান করে।"
    },
    references: {
      en: [
        "Al-Quran al-Kareem",
        "Sahih al-Bukhari",
        "Sahih Muslim",
        "Ibn Abd al-Wahhab, Muhammad. (1703-1792). Kitab at-Tawhid",
        "As-Saadi, Abdur-Rahman. (1889-1956). Taysir al-Kareem ar-Rahman",
        "Al-Uthaymeen, Muhammad ibn Salih. (1925-2001). Sharh Kitab at-Tawhid",
        "Philips, Abu Ameenah Bilal. (1993). The Fundamentals of Tawheed",
        "Al-Hilali, Muhammad Taqi-ud-Din. (1999). The Noble Quran Translation"
      ],
      bn: [
        "আল-কুরআনুল কারীম",
        "সহীহ আল-বুখারী",
        "সহীহ মুসলিম",
        "ইবন আবদ আল-ওয়াহাব, মুহাম্মাদ। (১৭০৩-১৭৯২)। কিতাব আত-তাওহীদ",
        "আস-সা'দী, আবদুর-রহমান। (১৮৮৯-১৯৫৬)। তাইসীর আল-কারীম আর-রহমান",
        "আল-উসাইমীন, মুহাম্মাদ ইবন সালিহ। (১৯২৫-২০০১)। শারহ কিতাব আত-তাওহীদ",
        "ফিলিপস, আবু আমীনাহ বিলাল। (১৯৯৩)। তাওহীদের মূলনীতি",
        "আল-হিলালী, মুহাম্মাদ তাকী-উদ-দীন। (১৯৯৯)। আল-কুরআন অনুবাদ"
      ]
    },
    acknowledgement: {
      en: "All praise and gratitude belong to Allah (SWT) for enabling this research on the most fundamental aspect of Islamic belief. I express sincere appreciation to the scholars and teachers who have preserved and transmitted this sacred knowledge through generations. May this study contribute to a deeper understanding of Tawhid and strengthen the faith of believers.",
      bn: "ইসলামী বিশ্বাসের সবচেয়ে মৌলিক দিক নিয়ে এই গবেষণা সম্ভব করার জন্য সমস্ত প্রশংসা ও কৃতজ্ঞতা আল্লাহ তায়ালার। আমি সেই পণ্ডিত ও শিক্ষকদের প্রতি আন্তরিক কৃতজ্ঞতা প্রকাশ করছি যারা প্রজন্মের পর প্রজন্ম ধরে এই পবিত্র জ্ঞান সংরক্ষণ ও প্রেরণ করেছেন। এই অধ্যয়ন তাওহীদের গভীর বোঝাপড়ায় অবদান রাখুক এবং বিশ্বাসীদের ঈমান শক্তিশালী করুক।"
    },
    date: "2024-02-20",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    image: "photo-1483058712412-4245e9b90334"
  }
];