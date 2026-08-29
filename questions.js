const questionsData = [
    {
        q: "Kalau kamu jujur sama diri sendiri, apa yang bikin kamu ngerasa paling 'stuck' sekarang?",
        options: [
            { text: "Banyak pilihan, tapi bingung mau fokus ke mana.", type: "explorer" },
            { text: "Ide di kepala banyak banget, tapi wacana doang.", type: "dreamer" },
            { text: "Udah tahu harus ngapain, tapi konsistennya susah.", type: "builder" },
            { text: "Lagi di fase harus mulai lembaran baru dari nol.", type: "restarter" },
            { text: "Mulai sadar kalau cara hidupku sekarang udah nggak works.", type: "awakening" }
        ]
    },
    {
        q: "Temen lamamu nanya, 'Eh, sibuk apa sekarang?' Reaksi dalem hatimu:",
        options: [
            { text: "Hmm... lagi proses nyari tahu sih.", type: "explorer" },
            { text: "Pelan-pelan lagi ngebangun rutinitas nih.", type: "builder" },
            { text: "Banyak ide project sih, tapi ya gitu deh...", type: "dreamer" },
            { text: "Lagi transisi, doain aja ketemu jalannya.", type: "restarter" },
            { text: "Lagi nyoba ngerapihin hidup yang sempet berantakan.", type: "awakening" }
        ]
    },
    {
        q: "Waktu buka sosmed dan lihat temenmu udah 'jauh', apa yang paling kerasa?",
        options: [
            { text: "Biasa aja, aku punya jalanku sendiri (walau belum nemu).", type: "explorer" },
            { text: "Panik pengen berubah, tapi bingung mulai dari mana.", type: "awakening" },
            { text: "Kepikiran, karena aku ngerasa baru mau mulai lagi.", type: "restarter" },
            { text: "Terinspirasi buat ngewujudin ide-ideku.", type: "dreamer" },
            { text: "Jadi pengen push diri sendiri biar lebih disiplin.", type: "builder" }
        ]
    },
    {
        q: "Biasanya, apa yang bikin kamu nunda ngelakuin sesuatu yang penting?",
        options: [
            { text: "Terlalu banyak mikir 'Gimana kalau nanti salah?'", type: "explorer" },
            { text: "Nunggu momen atau mood yang 'pas'.", type: "dreamer" },
            { text: "Masih ngumpulin energi mental buat bangkit.", type: "restarter" },
            { text: "Jarang nunda sih, cuma kadang capek fisik aja.", type: "builder" },
            { text: "Takut banget gagal, makanya mending nggak usah mulai.", type: "awakening" }
        ]
    },
    {
        q: "Kalau kamu dikasih libur 1 bulan tanpa beban finansial, kamu bakal ngapain?",
        options: [
            { text: "Nyoba 3-4 hobi baru sekaligus.", type: "dreamer" },
            { text: "Traveling ke tempat baru buat nyari perspektif.", type: "explorer" },
            { text: "Fokus ngembangin satu skill spesifik.", type: "builder" },
            { text: "Detox total dan nanya ke diri sendiri sebenernya mau apa.", type: "awakening" },
            { text: "Beres-beres masa lalu dan siapin rencana baru.", type: "restarter" }
        ]
    },
    {
        q: "Pilih kalimat yang paling cocok buat mendeskripsikan kepalamu belakangan ini:",
        options: [
            { text: "Penuh dengan tanda tanya.", type: "explorer" },
            { text: "Berisik sama ide, tapi tangannya diam.", type: "dreamer" },
            { text: "Fokus, tapi lumayan capek.", type: "builder" },
            { text: "Lagi memproses banyak hal yang baru selesai.", type: "restarter" },
            { text: "Mulai terbangun dari 'autopilot'.", type: "awakening" }
        ]
    },
    {
        q: "Gimana caramu ngeliat 'kegagalan' saat ini?",
        options: [
            { text: "Jadi evaluasi buat bikin sistem yang lebih bener.", type: "builder" },
            { text: "Bikin takut banget, sampai bikin aku overthinking.", type: "awakening" },
            { text: "Lagi proses nerima itu dan nyoba berdiri lagi.", type: "restarter" },
            { text: "Santai aja, kan emang lagi fase nyoba-nyoba.", type: "explorer" },
            { text: "Yah... dijadiin bahan overthinking sebelum tidur.", type: "dreamer" }
        ]
    },
    {
        q: "Berapa persen energimu yang habis buat 'mikirin rencana' dibanding 'ngelakuinnya'?",
        options: [
            { text: "90% mikir, 10% jalan. Perfect paralysis.", type: "dreamer" },
            { text: "Mulai sadar kebanyakan mikir, mau aku ubah.", type: "awakening" },
            { text: "50/50, masih nyari balancing-nya.", type: "explorer" },
            { text: "Udah lebih banyak eksekusinya sekarang.", type: "builder" },
            { text: "Lagi nggak banyak rencana, cuma mau *survive* step by step.", type: "restarter" }
        ]
    },
    {
        q: "Hal kecil apa yang bikin kamu ngerasa 'berkembang' akhir-akhir ini?",
        options: [
            { text: "Bisa ngelakuin rutinitas meskipun lagi males.", type: "builder" },
            { text: "Berani ngelepasin hal yang emang udah nggak cocok.", type: "restarter" },
            { text: "Makin tahu dengan jelas apa yang NGGAK aku suka.", type: "explorer" },
            { text: "Berani mengakui kalau aku butuh berubah.", type: "awakening" },
            { text: "Akhirnya ngerjain satu ide dari sekian banyak draft.", type: "dreamer" }
        ]
    },
    {
        q: "Menurutmu, apa yang paling kamu butuhin buat versi 2.0 kamu?",
        options: [
            { text: "Disiplin. Bukan motivasi.", type: "builder" },
            { text: "Keberanian buat nutup mata dan milih satu aja.", type: "explorer" },
            { text: "Waktu buat menyembuhkan diri dan reset.", type: "restarter" },
            { text: "Eksekusi yang jelek nggak apa-apa, asal rilis.", type: "dreamer" },
            { text: "Tamparan realita biar aku berhenti bikin alasan.", type: "awakening" }
        ]
    },
    {
        q: "Kalau dikasih tombol 'Undo' di hidupmu, kamu bakal...",
        options: [
            { text: "Pencet. Pengen ngulang dari titik tertentu.", type: "restarter" },
            { text: "Nggak pencet. Aku cuma butuh berani ngadepin sekarang.", type: "awakening" },
            { text: "Nggak. Jadikan pelajaran aja buat bangun fondasi.", type: "builder" },
            { text: "Nggak pencet, tapi pengen pause bentar.", type: "explorer" },
            { text: "Nggak tahu deh wkwk, bingung.", type: "dreamer" }
        ]
    },
    {
        q: "Terakhir. Kalau kamu harus ngomong sama dirimu sendiri besok pagi, apa pesannya?",
        options: [
            { text: "'Coba satu aja. Nggak usah mikirin semuanya.'", type: "explorer" },
            { text: "'Kerjain ide itu 15 menit aja, pliss.'", type: "dreamer" },
            { text: "'Nggak papa mulai dari awal. Pelan-pelan aja.'", type: "restarter" },
            { text: "'Hari ini kita lanjut bangun bata-bata itu ya.'", type: "builder" },
            { text: "'Udah cukup diamnya. Waktunya gerak.'", type: "awakening" }
        ]
    }
];
