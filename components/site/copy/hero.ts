export const heroCopy = {
  bn: {
    hero: {
      carouselLabel: "আমাদের বীজ ও মাঠের ছবি",
      slideLabel: (current: number, total: number) =>
        `${total.toLocaleString("bn-BD")}টির মধ্যে ${current.toLocaleString("bn-BD")} নম্বর ছবি`,
      pause: "স্লাইড থামান",
      play: "স্লাইড চালু করুন",
      previous: "আগের ছবি",
      next: "পরের ছবি",
      slides: [
        {
          badge: "২০১০ সাল থেকে · বাংলাদেশের বীজ প্রতিষ্ঠান",
          title: "ভুট্টা চাষে ভালো ফলনের প্রথম ধাপ।",
          subtitle: "বাংলাদেশের মাটি ও মৌসুমের উপযোগী বীজ",
          description:
            "বাংলাদেশের মাটি ও মৌসুমের উপযোগী, যত্নে বাছাই করা উচ্চ অঙ্কুরোদ্গম ক্ষমতার ভুট্টার বীজ।",
          image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85",
          imageDescription: "সবুজ শস্যক্ষেত",
        },
        {
          badge: "যত্নে বাছাই · মান যাচাই করা",
          title: "আপনার মাঠের জন্য বাছাই করা ভালো বীজ।",
          subtitle: "ভালো বীজ। ভালো ফসল।",
          description:
            "প্রতিটি বীজ আমরা যত্নে বাছাই ও পরীক্ষা করি—যাতে আপনি নিশ্চিন্তে চাষ শুরু করতে পারেন।",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=2200&q=85",
          imageDescription: "তাজা ভুট্টার মোচা",
        },
      ],
      viewSeed: "ভুট্টার বীজ দেখুন",
      talkToTeam: "আমাদের সঙ্গে কথা বলুন",
      aboutLink: "আমাদের সম্পর্কে আরও জানুন",
    },
  },
  en: {
    hero: {
      carouselLabel: "Our seeds and fields",
      slideLabel: (current: number, total: number) =>
        `Slide ${current} of ${total}`,
      pause: "Pause slides",
      play: "Play slides",
      previous: "Previous slide",
      next: "Next slide",
      slides: [
        {
          badge: "Seed supplier since 2010 · Bangladesh",
          title: "Quality maize seeds for a better harvest.",
          subtitle: "Selected for Bangladeshi fields and seasons",
          description:
            "Reliable, high-germination maize seed selected for Bangladeshi soil, seasons and the people who grow our food.",
          image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85",
          imageDescription: "Green crop fields",
        },
        {
          badge: "Carefully selected · Quality tested",
          title: "Good seed, chosen for your fields.",
          subtitle: "Good seed. Better harvest.",
          description:
            "We select and test every seed with care, so you can begin the growing season with confidence.",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=2200&q=85",
          imageDescription: "Fresh maize cobs",
        },
      ],
      viewSeed: "View our maize seed",
      talkToTeam: "Talk to our team",
      aboutLink: "A little more about us",
    },
  },
} as const;
