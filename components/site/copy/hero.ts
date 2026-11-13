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
          badge: "ধানের মাঠ · বাংলাদেশের কৃষি",
          title: "ধান চাষে নতুন সম্ভাবনার পথে।",
          subtitle: "বিশ্বস্ত সরবরাহকারীদের মানসম্মত বীজ",
          description:
            "আন্তর্জাতিক বীজ সরবরাহকারীদের কাছ থেকে মানসম্মত জাত সংগ্রহ করে বাংলাদেশের ডিলার ও কৃষকদের কাছে পৌঁছে দিই।",
          image: "/rice.avif",
          imageDescription: "সবুজ ধানক্ষেত ও দূরের পাহাড়",
        },
        {
          badge: "ভুট্টা · ফসলের সম্ভাবনা",
          title: "ভুট্টা চাষে নতুন সম্ভাবনার পথে।",
          subtitle: "আন্তর্জাতিক সরবরাহ থেকে স্থানীয় বাজারে",
          description:
            "ভুট্টাসহ নানা ফসল ও সবজির মানসম্মত বীজ ডিলার ও কৃষকদের কাছে পৌঁছে দেওয়াই আমাদের লক্ষ্য।",
          image: "/corn.jpg",
          imageDescription: "গাছে পাকা সোনালি ভুট্টার মোচা",
        },
      ],
      viewSeed: "আমাদের বীজ দেখুন",
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
          badge: "Rice fields · Bangladesh agriculture",
          title: "New possibilities for paddy farming.",
          subtitle: "Quality seed from trusted international suppliers",
          description:
            "We source quality varieties from international seed suppliers and bring them to dealers and farmers across Bangladesh.",
          image: "/rice.avif",
          imageDescription: "A green paddy field with mountains in the distance",
        },
        {
          badge: "Corn · Crop potential",
          title: "New possibilities for corn farming.",
          subtitle: "From international suppliers to local markets",
          description:
            "Our goal is to make quality seeds for crops and vegetables available to dealers and farmers.",
          image: "/corn.jpg",
          imageDescription: "Ripe golden corn cobs growing on the stalk",
        },
      ],
      viewSeed: "Explore our seeds",
      talkToTeam: "Talk to our team",
      aboutLink: "A little more about us",
    },
  },
} as const;
