const archetypeData = {
    "explorer": {
        title: "THE EXPLORER",
        theme: { bg: "#f0f9ff", accent: "#0ea5e9", text: "#0f172a" },
        image: "assets/characters/explorer.png",
        fallbackEmoji: "🗺️",
        quote: "Still figuring it out, and that's okay.",
        quote_en: "Still figuring it out, and that's okay.",
        stats: { dir: "████░░░░░░", act: "██████░░░░", gro: "████████░░" },
        insights: [
            "Kamu mungkin nggak benar-benar kehilangan arah. Bisa jadi kamu cuma sedang berada di fase ketika pilihanmu terlalu banyak.",
            "Masalahnya, kamu sering ingin memastikan semuanya 'benar' dulu sebelum mulai.",
            "Akhirnya, terlalu banyak waktu habis di fase mikir. Padahal jawaban yang kamu cari ada di proses 'mencoba'."
        ],
        insights_en: [
            "You aren't necessarily lost. You might just be in a phase where options are overwhelming.",
            "The issue is, you often want to make sure everything is 'right' before starting.",
            "Eventually, too much time is wasted thinking. Yet the answer you seek is in the 'trying'."
        ]
    },
    "restarter": {
        title: "THE RESTARTER",
        theme: { bg: "#fff7ed", accent: "#f97316", text: "#431407" },
        image: "assets/characters/restarter.png",
        fallbackEmoji: "🚪",
        quote: "Not from scratch. From experience.",
        quote_en: "Not from scratch. From experience.",
        stats: { dir: "██████░░░░", act: "████░░░░░░", gro: "█████████░" },
        insights: [
            "Dari jawabanmu terlihat bahwa kamu baru saja atau sedang melewati sebuah transisi besar.",
            "Ada perasaan lelah, tapi di sisi lain ada kesadaran bahwa lembaran lama memang harus ditutup.",
            "Tantangan terbesarmu sekarang adalah memaafkan waktu yang terasa 'terbuang' dan berani mulai melangkah lagi."
        ],
        insights_en: [
            "Your answers show that you recently or are currently undergoing a major transition.",
            "There's exhaustion, but also a realization that the old chapter must close.",
            "Your biggest challenge now is forgiving 'wasted' time and daring to step forward again."
        ]
    },
    "builder": {
        title: "THE BUILDER",
        theme: { bg: "#f7fee7", accent: "#84cc16", text: "#1a2e05" },
        image: "assets/characters/builder.png",
        fallbackEmoji: "🧱",
        quote: "You know the way. Just keep building.",
        quote_en: "You know the way. Just keep building.",
        stats: { dir: "████████░░", act: "████████░░", gro: "███████░░░" },
        insights: [
            "Ada beberapa hal yang sebenarnya sudah kamu tahu. Kamu punya arah dan sistem yang perlahan mulai jalan.",
            "Kamu mungkin sudah tahu apa yang perlu dilakukan, tetapi bagian tersulitnya adalah bertahan saat rasanya membosankan.",
            "Terkadang kamu terlalu keras pada diri sendiri. Jangan lupa bahwa istirahat juga bagian dari proses membangun."
        ],
        insights_en: [
            "There are things you already know. You have a direction and a system slowly moving forward.",
            "You know what to do, but the hardest part is enduring when it gets boring.",
            "Sometimes you are too hard on yourself. Remember that resting is also part of building."
        ]
    },
    "dreamer": {
        title: "THE DREAMER",
        theme: { bg: "#faf5ff", accent: "#a855f7", text: "#3b0764" },
        image: "assets/characters/dreamer.png",
        fallbackEmoji: "✨",
        quote: "Too many tabs open in your head.",
        quote_en: "Too many tabs open in your head.",
        stats: { dir: "██████░░░░", act: "██░░░░░░░░", gro: "████████░░" },
        insights: [
            "Kepalamu adalah tempat yang sangat berisik. Ide-idemu sebenarnya luar biasa.",
            "Kemungkinan besar kamu sering terjebak 'perfection paralysis'—menunggu semuanya sempurna sebelum dieksekusi.",
            "Sadarilah bahwa versi jelek yang selesai jauh lebih berharga daripada versi sempurna yang cuma ada di angan-angan."
        ],
        insights_en: [
            "Your mind is a loud place. Your ideas are actually amazing.",
            "You likely get caught in 'perfection paralysis'—waiting for everything to be perfect before executing.",
            "Realize that a finished imperfect version is far more valuable than a perfect imaginary one."
        ]
    },
    "awakening": {
        title: "THE AWAKENING",
        theme: { bg: "#fffbeb", accent: "#eab308", text: "#422006" },
        image: "assets/characters/awakening.png",
        fallbackEmoji: "🌅",
        quote: "You can't unsee what you know you need to do.",
        quote_en: "You can't unsee what you know you need to do.",
        stats: { dir: "█████░░░░░", act: "████░░░░░░", gro: "██████████" },
        insights: [
            "Ada perasaan 'kegelisahan yang sehat' dalam dirimu belakangan ini.",
            "Kamu mulai sadar dan lelah dengan alasan-alasan penundaan yang kamu buat sendiri.",
            "Ini adalah fase emas. Energi gelisah ini harus segera diubah menjadi aksi nyata sebelum menguap jadi overthinking lagi."
        ],
        insights_en: [
            "There is a sense of 'healthy restlessness' inside you lately.",
            "You are waking up and tired of the self-made excuses for procrastination.",
            "This is a golden phase. Turn this restless energy into real action before it evaporates back into overthinking."
        ]
    }
};

const upgradeOptions = [
    { 
        id: "opt1", 
        title: "🧠 CLEAR MY HEAD", 
        action: "Tulis semua isi kepalamu di kertas selama 10 menit tanpa filter, lalu buang/simpan.",
        action_en: "Write down everything in your head on paper for 10 minutes unfiltered, then discard or save it."
    },
    { 
        id: "opt2", 
        title: "🎯 PICK ONE DIRECTION", 
        action: "Tulis 3 hal yang bikin kamu bingung, coret 2, dan komit coba sisanya selama 7 hari.",
        action_en: "Write 3 things confusing you, cross out 2, and commit to trying the remaining one for 7 days."
    },
    { 
        id: "opt3", 
        title: "⚡ TAKE ACTION", 
        action: "Pilih satu tugas yang tertunda, set timer 15 menit, dan kerjakan sekarang.",
        action_en: "Pick one delayed task, set a 15-minute timer, and work on it now."
    },
    { 
        id: "opt4", 
        title: "🧱 BUILD A SKILL", 
        action: "Tentukan 1 resource belajar (buku/video) dan konsumsi selama 20 menit malam ini.",
        action_en: "Choose 1 learning resource (book/video) and consume it for 20 minutes tonight."
    },
    { 
        id: "opt5", 
        title: "🌱 START AGAIN", 
        action: "Rapikan meja/kamar kamu. Beri sinyal ke otak bahwa ini ruang yang baru.",
        action_en: "Clean up your desk or room. Signal to your brain that this is a fresh space."
    },
    { 
        id: "opt6", 
        title: "🧘 SLOW DOWN", 
        action: "Matikan notifikasi HP selama 2 jam malam ini. Nggak usah mikirin progres.",
        action_en: "Turn off phone notifications for 2 hours tonight. Don't worry about progress."
    }
];
