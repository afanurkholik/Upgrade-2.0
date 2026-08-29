const archetypeData = {
    "explorer": {
        title: "THE EXPLORER",
        theme: { bg: "#f0f9ff", accent: "#0ea5e9", text: "#0f172a" },
        image: "assets/characters/explorer.png", // Path to your actual asset
        fallbackEmoji: "🗺️",
        quote: "Still figuring it out, and that's okay.",
        stats: { dir: "████░░░░░░", act: "██████░░░░", gro: "████████░░" },
        insights: [
            "Kamu mungkin nggak benar-benar kehilangan arah. Bisa jadi kamu cuma sedang berada di fase ketika pilihanmu terlalu banyak.",
            "Masalahnya, kamu sering ingin memastikan semuanya 'benar' dulu sebelum mulai.",
            "Akhirnya, terlalu banyak waktu habis di fase mikir. Padahal jawaban yang kamu cari ada di proses 'mencoba'."
        ]
    },
    "restarter": {
        title: "THE RESTARTER",
        theme: { bg: "#fff7ed", accent: "#f97316", text: "#431407" },
        image: "assets/characters/restarter.png",
        fallbackEmoji: "🚪",
        quote: "Not from scratch. From experience.",
        stats: { dir: "██████░░░░", act: "████░░░░░░", gro: "█████████░" },
        insights: [
            "Dari jawabanmu terlihat bahwa kamu baru saja atau sedang melewati sebuah transisi besar.",
            "Ada perasaan lelah, tapi di sisi lain ada kesadaran bahwa lembaran lama memang harus ditutup.",
            "Tantangan terbesarmu sekarang adalah memaafkan waktu yang terasa 'terbuang' dan berani mulai melangkah lagi."
        ]
    },
    "builder": {
        title: "THE BUILDER",
        theme: { bg: "#f7fee7", accent: "#84cc16", text: "#1a2e05" },
        image: "assets/characters/builder.png",
        fallbackEmoji: "🧱",
        quote: "You know the way. Just keep building.",
        stats: { dir: "████████░░", act: "████████░░", gro: "███████░░░" },
        insights: [
            "Ada beberapa hal yang sebenarnya sudah kamu tahu. Kamu punya arah dan sistem yang perlahan mulai jalan.",
            "Kamu mungkin sudah tahu apa yang perlu dilakukan, tetapi bagian tersulitnya adalah bertahan saat rasanya membosankan.",
            "Terkadang kamu terlalu keras pada diri sendiri. Jangan lupa bahwa istirahat juga bagian dari proses membangun."
        ]
    },
    "dreamer": {
        title: "THE DREAMER",
        theme: { bg: "#faf5ff", accent: "#a855f7", text: "#3b0764" },
        image: "assets/characters/dreamer.png",
        fallbackEmoji: "✨",
        quote: "Too many tabs open in your head.",
        stats: { dir: "██████░░░░", act: "██░░░░░░░░", gro: "████████░░" },
        insights: [
            "Kepalamu adalah tempat yang sangat berisik. Ide-idemu sebenarnya luar biasa.",
            "Kemungkinan besar kamu sering terjebak 'perfection paralysis'—menunggu semuanya sempurna sebelum dieksekusi.",
            "Sadarilah bahwa versi jelek yang selesai jauh lebih berharga daripada versi sempurna yang cuma ada di angan-angan."
        ]
    },
    "awakening": {
        title: "THE AWAKENING",
        theme: { bg: "#fffbeb", accent: "#eab308", text: "#422006" },
        image: "assets/characters/awakening.png",
        fallbackEmoji: "🌅",
        quote: "You can't unsee what you know you need to do.",
        stats: { dir: "█████░░░░░", act: "████░░░░░░", gro: "██████████" },
        insights: [
            "Ada perasaan 'kegelisahan yang sehat' dalam dirimu belakangan ini.",
            "Kamu mulai sadar dan lelah dengan alasan-alasan penundaan yang kamu buat sendiri.",
            "Ini adalah fase emas. Energi gelisah ini harus segera diubah menjadi aksi nyata sebelum menguap jadi overthinking lagi."
        ]
    }
};

const upgradeOptions = [
    { id: "opt1", title: "🧠 CLEAR MY HEAD", action: "Tulis semua isi kepalamu di kertas selama 10 menit tanpa filter, lalu buang/simpan." },
    { id: "opt2", title: "🎯 PICK ONE DIRECTION", action: "Tulis 3 hal yang bikin kamu bingung, coret 2, dan komit coba sisanya selama 7 hari." },
    { id: "opt3", title: "⚡ TAKE ACTION", action: "Pilih satu tugas yang tertunda, set timer 15 menit, dan kerjakan sekarang." },
    { id: "opt4", title: "🧱 BUILD A SKILL", action: "Tentukan 1 resource belajar (buku/video) dan konsumsi selama 20 menit malam ini." },
    { id: "opt5", title: "🌱 START AGAIN", action: "Rapikan meja/kamar kamu. Beri sinyal ke otak bahwa ini ruang yang baru." },
    { id: "opt6", title: "🧘 SLOW DOWN", action: "Matikan notifikasi HP selama 2 jam malam ini. Nggak usah mikirin progres." }
];
