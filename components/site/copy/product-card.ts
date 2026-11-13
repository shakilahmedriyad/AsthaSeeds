export type HomepageProduct = {
  category: string;
  name: string;
  imageSrc: string;
  imageDescription: string;
};

export const productCardCopy: Record<
  "bn" | "en",
  { products: { comingSoon: string; items: HomepageProduct[] } }
> = {
  bn: {
    products: {
      comingSoon: "শিগগিরই আসছে",
      items: [
        {
          category: "ভুট্টা",
          name: "ভুট্টার বীজ",
          imageSrc: "/corn.jpg",
          imageDescription: "গাছে পাকা সোনালি ভুট্টার মোচা",
        },
        {
          category: "ধান",
          name: "ধানের বীজ",
          imageSrc: "/rice.avif",
          imageDescription: "সবুজ ধানক্ষেত ও দূরের পাহাড়",
        },
      ],
    },
  },
  en: {
    products: {
      comingSoon: "Coming Soon",
      items: [
        {
          category: "Corn",
          name: "Corn Seeds",
          imageSrc: "/corn.jpg",
          imageDescription: "Ripe golden corn cobs growing on the stalk",
        },
        {
          category: "Rice",
          name: "Rice Seeds",
          imageSrc: "/rice.avif",
          imageDescription: "A green paddy field with mountains in the distance",
        },
      ],
    },
  },
};
