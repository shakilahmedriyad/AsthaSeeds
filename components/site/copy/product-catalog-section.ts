export const productCatalogCopy = {
  bn: {
    productsPage: {
      category: "ভুট্টা",
      title: "আমাদের বীজ",
      seedCount: (count: number) => `${count.toLocaleString("bn-BD")}টি বীজ`,
      searchLabel: "বীজ খুঁজুন",
      searchPlaceholder: "বীজ খুঁজুন, যেমন: মেইজ...",
      noResults: "এই নামে কোনো বীজ পাওয়া যায়নি।",
      clearSearch: "সব বীজ দেখুন",
      products: [
        {
          name: "আস্থা মেইজ গোল্ড ১০১",
          variety: "হাইব্রিড",
          description: "উজ্জ্বল হলুদ, বড় ও দানায় ভরা মোচা।",
          season: "রবি",
          maturity: "১৪০–১৫০ দিন",
          pack: "১, ৫, ১০, ২০ কেজি",
          imageDescription: "তাজা ভুট্টার মোচা",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=85",
        },
        {
          name: "আস্থা মেইজ সুপার ২০২",
          variety: "হাইব্রিড",
          description: "রবি ও খরিফ-১ মৌসুমে চাষের উপযোগী।",
          season: "রবি, খরিফ-১",
          maturity: "১৩৫–১৪৫ দিন",
          pack: "১, ২, ৫, ১০ কেজি",
          imageDescription: "চাষের উপযোগী ফসলের মাঠ",
          image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85",
        },
      ],
    },
  },
  en: {
    productsPage: {
      category: "Maize",
      title: "Our Seeds",
      seedCount: (count: number) => `${count} seeds`,
      searchLabel: "Search seeds",
      searchPlaceholder: "Search seeds, e.g. maize...",
      noResults: "No seeds match your search.",
      clearSearch: "Show all seeds",
      products: [
        {
          name: "Astha Maize Gold 101",
          variety: "Hybrid",
          description: "Big, well-filled cobs with bright golden-yellow grain.",
          season: "Rabi",
          maturity: "140–150 days",
          pack: "1, 5, 10, 20 kg",
          imageDescription: "Fresh maize cobs",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=85",
        },
        {
          name: "Astha Maize Super 202",
          variety: "Hybrid",
          description: "A dependable choice for Rabi and Kharif-1 seasons.",
          season: "Rabi, Kharif-1",
          maturity: "135–145 days",
          pack: "1, 2, 5, 10 kg",
          imageDescription: "Golden crop field",
          image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85",
        },
      ],
    },
  },
} as const;
