// ==========================================
// 1. DATA CENTER (Questions, Archetypes, UI)
// ==========================================

const questionsData = [
    {
        q: "Kalau kamu jujur sama diri sendiri, apa yang bikin kamu ngerasa paling 'stuck' sekarang?",
        q_en: "If you are being completely honest, what makes you feel most 'stuck' right now?",
        options: [
            { text: "Banyak pilihan, tapi bingung mau fokus ke mana.", text_en: "Too many choices, but confused about where to focus.", type: "explorer" },
            { text: "Ide di kepala banyak banget, tapi wacana doang.", text_en: "So many ideas in my head, but all talk no action.", type: "dreamer" },
            { text: "Udah tahu harus ngapain, tapi konsistennya susah.", text_en: "I know what to do, but staying consistent is hard.", type: "builder" },
            { text: "Lagi di fase harus mulai lembaran baru dari nol.", text_en: "In a phase of having to start a fresh chapter from scratch.", type: "restarter" },
            { text: "Mulai sadar kalau cara hidupku sekarang udah nggak works.", text_en: "Realizing that my current way of living no longer works.", type: "awakening" }
        ]
    },
    {
        q: "Temen lamamu nanya, 'Eh, sibuk apa sekarang?' Reaksi dalem hatimu:",
        q_en: "An old friend asks, 'Hey, what are you busy with now?' Your internal reaction:",
        options: [
            { text: "Hmm... lagi proses nyari tahu sih.", text_en: "Hmm... still in the process of figuring it out.", type: "explorer" },
            { text: "Pelan-pelan lagi ngebangun rutinitas nih.", text_en: "Slowly building new routines.", type: "builder" },
            { text: "Banyak ide project sih, tapi ya gitu deh...", text_en: "Have lots of project ideas, but well...", type: "dreamer" },
            { text: "Lagi transisi, doain aja ketemu jalannya.", text_en: "In transition, just pray I find my way.", type: "restarter" },
            { text: "Lagi nyoba ngerapihin hidup yang sempet berantakan.", text_en: "Trying to clean up a life that got messy.", type: "awakening" }
        ]
    },
    {
        q: "Waktu buka sosmed dan lihat temenmu udah 'jauh', apa yang paling kerasa?",
        q_en: "When scrolling social media and seeing friends 'way ahead', what hits hardest?",
        options: [
            { text: "Biasa aja, aku punya jalanku sendiri.", text_en: "Indifferent, I have my own path.", type: "explorer" },
            { text: "Panik pengen berubah, tapi bingung mulai dari mana.", text_en: "Panicked to change, but confused where to start.", type: "awakening" },
            { text: "Kepikiran, karena aku ngerasa baru mau mulai lagi.", text_en: "Bothered, because I feel like I'm just starting over.", type: "restarter" },
            { text: "Terinspirasi buat ngewujudin ide-ideku.", text_en: "Inspired to actually realize my ideas.", type: "dreamer" },
            { text: "Jadi pengen push diri sendiri biar lebih disiplin.", text_en: "Makes me want to push myself to be more disciplined.", type: "builder" }
        ]
    },
    {
        q: "Biasanya, apa yang bikin kamu nunda ngelakuin sesuatu yang penting?",
        q_en: "Usually, what makes you procrastinate on something important?",
        options: [
            { text: "Terlalu banyak mikir 'Gimana kalau nanti salah?'", text_en: "Thinking too much: 'What if I make a mistake?'", type: "explorer" },
            { text: "Nunggu momen atau mood yang 'pas'.", text_en: "Waiting for the 'right' moment or mood.", type: "dreamer" },
            { text: "Masih ngumpulin energi mental buat bangkit.", text_en: "Still gathering mental energy to rise up.", type: "restarter" },
            { text: "Jarang nunda sih, cuma kadang capek fisik aja.", text_en: "Rarely procrastinate, just physically tired sometimes.", type: "builder" },
            { text: "Takut banget gagal, makanya mending nggak usah mulai.", text_en: "So afraid of failing, better not to start.", type: "awakening" }
        ]
    },
    {
        q: "Kalau kamu dikasih libur 1 bulan tanpa beban finansial, kamu bakal ngapain?",
        q_en: "If given 1 month off with zero financial stress, what would you do?",
        options: [
            { text: "Nyoba 3-4 hobi baru sekaligus.", text_en: "Try 3-4 new hobbies all at once.", type: "dreamer" },
            { text: "Traveling ke tempat baru buat nyari perspektif.", text_en: "Travel somewhere new to find fresh perspectives.", type: "explorer" },
            { text: "Fokus ngembangin satu skill spesifik.", text_en: "Focus on developing one specific skill.", type: "builder" },
            { text: "Detox total dan nanya ke diri sendiri sebenernya mau apa.", text_en: "Total detox and ask myself what I actually want.", type: "awakening" },
            { text: "Beres-beres masa lalu dan siapin rencana baru.", text_en: "Clean up past baggage and set a new plan.", type: "restarter" }
        ]
    },
    {
        q: "Pilih kalimat yang paling cocok buat mendeskripsikan kepalamu belakangan ini:",
        q_en: "Choose the phrase that best describes your mind lately:",
        options: [
            { text: "Penuh dengan tanda tanya.", text_en: "Filled with endless question marks.", type: "explorer" },
            { text: "Berisik sama ide, tapi tangannya diam.", text_en: "Noisy with ideas, but hands remain still.", type: "dreamer" },
            { text: "Fokus, tapi lumayan capek.", text_en: "Focused, but quite exhausted.", type: "builder" },
            { text: "Lagi memproses banyak hal yang baru selesai.", text_en: "Processing a lot of things that just ended.", type: "restarter" },
            { text: "Mulai terbangun dari 'autopilot'.", text_en: "Starting to wake up from 'autopilot'.", type: "awakening" }
        ]
    },
    {
        q: "Gimana caramu ngeliat 'kegagalan' saat ini?",
        q_en: "How do you view 'failure' right now?",
        options: [
            { text: "Jadi evaluasi buat bikin sistem yang lebih bener.", text_en: "An evaluation to build a better system.", type: "builder" },
            { text: "Bikin takut banget, sampai bikin aku overthinking.", text_en: "Terrifying, makes me overthink constantly.", type: "awakening" },
            { text: "Lagi proses nerima itu dan nyoba berdiri lagi.", text_en: "In the process of accepting it and trying to stand again.", type: "restarter" },
            { text: "Santai aja, kan emang lagi fase nyoba-nyoba.", text_en: "Relaxed, I'm just in the trial phase anyway.", type: "explorer" },
            { text: "Yah... dijadiin bahan overthinking sebelum tidur.", text_en: "Well... fuel for overthinking before sleep.", type: "dreamer" }
        ]
    },
    {
        q: "Berapa persen energimu yang habis buat 'mikirin rencana' dibanding 'ngelakuinnya'?",
        q_en: "What % of your energy goes to 'planning' vs 'doing'?",
        options: [
            { text: "90% mikir, 10% jalan. Perfect paralysis.", text_en: "90% thinking, 10% doing. Perfect paralysis.", type: "dreamer" },
            { text: "Mulai sadar kebanyakan mikir, mau aku ubah.", text_en: "Realizing I overthink too much, want to change it.", type: "awakening" },
            { text: "50/50, masih nyari balancing-nya.", text_en: "50/50, still finding the balance.", type: "explorer" },
            { text: "Udah lebih banyak eksekusinya sekarang.", text_en: "More execution than planning now.", type: "builder" },
            { text: "Lagi nggak banyak rencana, cuma mau survive step by step.", text_en: "Not much planning, just trying to survive step by step.", type: "restarter" }
        ]
    },
    {
        q: "Hal kecil apa yang bikin kamu ngerasa 'berkembang' akhir-akhir ini?",
        q_en: "What small thing makes you feel like you are 'growing' lately?",
        options: [
            { text: "Bisa ngelakuin rutinitas meskipun lagi males.", text_en: "Able to stick to routines even when feeling lazy.", type: "builder" },
            { text: "Berani ngelepasin hal yang emang udah nggak cocok.", text_en: "Brave enough to let go of what no longer fits.", type: "restarter" },
            { text: "Makin tahu dengan jelas apa yang NGGAK aku suka.", text_en: "Knowing more clearly what I DO NOT like.", type: "explorer" },
            { text: "Berani mengakui kalau aku butuh berubah.", text_en: "Daring to admit that I need to change.", type: "awakening" },
            { text: "Akhirnya ngerjain satu ide dari sekian banyak draft.", text_en: "Finally working on one idea out of many drafts.", type: "dreamer" }
        ]
    },
    {
        q: "Menurutmu, apa yang paling kamu butuhin buat versi 2.0 kamu?",
        q_en: "In your opinion, what do you need most for your 2.0 version?",
        options: [
            { text: "Disiplin. Bukan motivasi.", text_en: "Discipline. Not motivation.", type: "builder" },
            { text: "Keberanian buat nutup mata dan milih satu aja.", text_en: "Courage to close my eyes and pick just one.", type: "explorer" },
            { text: "Waktu buat menyembuhkan diri dan reset.", text_en: "Time to heal and reset.", type: "restarter" },
            { text: "Eksekusi yang jelek nggak apa-apa, asal rilis.", text_en: "Imperfect execution is fine, as long as it releases.", type: "dreamer" },
            { text: "Tamparan realita biar aku berhenti bikin alasan.", text_en: "A reality check so I stop making excuses.", type: "awakening" }
        ]
    },
    {
        q: "Kalau dikasih tombol 'Undo' di hidupmu, kamu bakal...",
        q_en: "If given an 'Undo' button in life, you would...",
        options: [
            { text: "Pencet. Pengen ngulang dari titik tertentu.", text_en: "Press it. Want to restart from a certain point.", type: "restarter" },
            { text: "Nggak pencet. Aku cuma butuh berani ngadepin sekarang.", text_en: "Don't press. I just need to face the present bravely.", type: "awakening" },
            { text: "Nggak. Jadikan pelajaran aja buat bangun fondasi.", text_en: "No. Just a lesson to build a foundation.", type: "builder" },
            { text: "Nggak pencet, tapi pengen pause bentar.", text_en: "Don't press, but want to pause for a bit.", type: "explorer" },
            { text: "Nggak tahu deh wkwk, bingung.", text_en: "I don't even know haha, confused.", type: "dreamer" }
        ]
    },
    {
        q: "Terakhir. Kalau kamu harus ngomong sama dirimu sendiri besok pagi, apa pesannya?",
        q_en: "Lastly. If you had to say one message to yourself tomorrow morning, what is it?",
        options: [
            { text: "'Coba satu aja. Nggak usah mikirin semuanya.'", text_en: "'Try just one thing. Don't worry about everything.'", type: "explorer" },
            { text: "'Kerjain ide itu 15 menit aja, pliss.'", text_en: "'Work on that idea for just 15 minutes, please.'", type: "dreamer" },
            { text: "'Nggak papa mulai dari awal. Pelan-pelan aja.'", text_en: "'It's okay to start over. Just take it slow.'", type: "restarter" },
            { text: "'Hari ini kita lanjut bangun bata-bata itu ya.'", text_en: "'Today we continue building those bricks.'", type: "builder" },
            { text: "'Udah cukup diamnya. Waktunya gerak.'", text_en: "'Enough standing still. Time to move.'", type: "awakening" }
        ]
    }
];

const archetypeData = {
    "explorer": {
        title: "THE EXPLORER", theme: { bg: "#f0f9ff", accent: "#0ea5e9", text: "#0f172a" },
        image: "assets/characters/explorer.png", fallbackEmoji: "🗺️",
        quote: "Still figuring it out, and that's okay.", quote_en: "Still figuring it out, and that's okay.",
        stats: { dir: "████░░░░░░", act: "██████░░░░", gro: "████████░░" },
        insights: [
            "Jujur, kamu sebenarnya punya ambisi yang besar. Tapi masalahnya, terlalu banyak hal yang kelihatan menarik buatmu. Kamu takut kalau salah milih satu jalan, kamu bakal kehilangan kesempatan di jalan yang lain.", 
            "Akibatnya, kamu lebih sering menghabiskan waktu untuk 'riset', cari tahu, dan mikir, dibanding benar-benar mencoba. Kamu ingin semuanya terasa 'benar' dulu sebelum mulai.",
            "Kamu mungkin merasa tertinggal, padahal sebenarnya kamu cuma sedang mengumpulkan data. Tapi ingat, kamu nggak perlu nunggu semuanya 100% jelas. Kadang, kejelasan itu baru muncul *setelah* kamu berani melangkah."
        ],
        insights_en: [
            "Honestly, you have great ambitions. But the problem is, too many things look interesting to you. You fear that by choosing one path, you'll miss out on the others.",
            "As a result, you spend more time 'researching', thinking, and figuring things out rather than actually trying. You want everything to feel 'right' before starting.",
            "You might feel behind, when in reality you are just gathering data. But remember, you don't need 100% clarity before starting. Clarity often comes only *after* you take the first step."
        ]
    },
    "restarter": {
        title: "THE RESTARTER", theme: { bg: "#fff7ed", accent: "#f97316", text: "#431407" },
        image: "assets/characters/restarter.png", fallbackEmoji: "🚪",
        quote: "Not from scratch. From experience.", quote_en: "Not from scratch. From experience.",
        stats: { dir: "██████░░░░", act: "████░░░░░░", gro: "█████████░" },
        insights: [
            "Dari jawabanmu, sangat jelas kalau kamu sedang—atau baru saja—melewati sebuah fase akhir. Mungkin itu project yang gagal, pekerjaan yang ditinggalkan, atau kebiasaan lama yang hancur.",
            "Ada rasa lelah yang wajar, dan mungkin sedikit penyesalan atau overthinking tentang 'waktu yang terbuang'. Tapi ketahuilah, kamu sama sekali tidak mulai dari nol.",
            "Kamu mulai dari pengalaman. Tantangan utamamu sekarang adalah memaafkan masa lalu dan memberikan dirimu sendiri izin untuk memulai lembaran baru tanpa membawa beban yang lama."
        ],
        insights_en: [
            "From your answers, it's clear you are going through—or just finished—a major ending. Maybe a failed project, a left job, or broken habits.",
            "There is a natural exhaustion, and perhaps some regret or overthinking about 'wasted time'. But know this: you are not starting from zero.",
            "You are starting from experience. Your main challenge now is forgiving the past and giving yourself permission to start a fresh chapter without carrying the old baggage."
        ]
    },
    "builder": {
        title: "THE BUILDER", theme: { bg: "#f7fee7", accent: "#84cc16", text: "#1a2e05" },
        image: "assets/characters/builder.png", fallbackEmoji: "🧱",
        quote: "You know the way. Just keep building.", quote_en: "You know the way. Just keep building.",
        stats: { dir: "████████░░", act: "████████░░", gro: "███████░░░" },
        insights: [
            "Kamu adalah orang yang sebenarnya sudah tahu apa yang harus dilakukan. Kamu sudah punya arah, dan mungkin sudah mulai membangun rutinitasnya pelan-pelan.",
            "Tapi masalah terbesar bagi seorang Builder adalah rasa bosan dan ekspektasi. Kamu sering merasa progresmu terlalu lambat, apalagi saat melihat orang lain yang seolah 'berhasil' dalam semalam.",
            "Padahal, fondasi yang kuat memang tidak dibangun dalam semalam. Jangan terlalu keras pada dirimu sendiri. Terkadang kamu butuh apresiasi untuk hal-hal kecil yang sudah berhasil kamu pertahankan."
        ],
        insights_en: [
            "You are someone who actually knows what needs to be done. You have a direction and might have started building the routines slowly.",
            "But the biggest problem for a Builder is boredom and expectations. You often feel your progress is too slow, especially when seeing others who seem to succeed overnight.",
            "In reality, strong foundations are never built overnight. Don't be too hard on yourself. Sometimes you just need to appreciate the small things you've managed to maintain."
        ]
    },
    "dreamer": {
        title: "THE DREAMER", theme: { bg: "#faf5ff", accent: "#a855f7", text: "#3b0764" },
        image: "assets/characters/dreamer.png", fallbackEmoji: "✨",
        quote: "Too many tabs open in your head.", quote_en: "Too many tabs open in your head.",
        stats: { dir: "██████░░░░", act: "██░░░░░░░░", gro: "████████░░" },
        insights: [
            "Isi kepalamu adalah tempat yang luar biasa kaya. Kamu punya visi, selera yang bagus, dan ide-ide yang cemerlang. Tapi sayangnya, semua itu masih sering tertahan di kepalamu.",
            "Kamu sangat rentan terjebak dalam 'perfection paralysis'—alias kelumpuhan karena ingin semuanya sempurna. Kamu takut kalau kamu wujudkan, hasilnya tidak sekeren yang ada di bayanganmu.",
            "Saatnya menerima realita: karya yang jelek tapi selesai, jauh lebih bernilai daripada mahakarya yang tidak pernah lahir. Berhentilah mengumpulkan ide, mulailah merilis realita."
        ],
        insights_en: [
            "Your mind is an incredibly rich place. You have vision, great taste, and brilliant ideas. But unfortunately, they are often still trapped in your head.",
            "You are very prone to 'perfection paralysis'—paralyzed by the need for everything to be flawless. You fear that if you execute it, the result won't be as cool as you imagined.",
            "It's time to accept reality: a finished ugly work is far more valuable than an unborn masterpiece. Stop hoarding ideas, start releasing reality."
        ]
    },
    "awakening": {
        title: "THE AWAKENING", theme: { bg: "#fffbeb", accent: "#eab308", text: "#422006" },
        image: "assets/characters/awakening.png", fallbackEmoji: "🌅",
        quote: "You can't unsee what you know you need to do.", quote_en: "You can't unsee what you know you need to do.",
        stats: { dir: "█████░░░░░", act: "████░░░░░░", gro: "██████████" },
        insights: [
            "Ada sebuah 'kegelisahan yang sangat sehat' yang sedang berkecamuk dalam dirimu akhir-akhir ini. Kamu mulai sadar bahwa alasan-alasan yang sering kamu buat sudah tidak bisa menipumu lagi.",
            "Kamu sedang berada di ambang batas toleransimu sendiri terhadap rasa malas atau penundaanmu. Kamu tahu betul bahwa kamu tidak bisa terus-terusan hidup dengan autopilot seperti ini.",
            "Fase ini sangat krusial. Energi gelisah ini harus segera kamu salurkan menjadi satu tindakan nyata hari ini juga, sebelum ia menguap dan berubah kembali menjadi overthinking di malam hari."
        ],
        insights_en: [
            "There is a 'healthy restlessness' brewing inside you lately. You are starting to realize that the excuses you used to make can no longer fool you.",
            "You are at the edge of your own tolerance for your procrastination. You know perfectly well that you can't keep living on autopilot like this.",
            "This phase is crucial. You must channel this restless energy into one real action today, before it evaporates and turns back into overthinking at night."
        ]
    }
};

const upgradeOptions = [
    { title: "🧠 CLEAR MY HEAD", action: "Tulis isi kepalamu 10 menit di kertas, lalu buang/simpan.", action_en: "Write your thoughts on paper for 10 mins, then keep or discard." },
    { title: "🎯 PICK ONE DIRECTION", action: "Tulis 3 ide, coret 2, dan komit 7 hari buat 1 ide sisa.", action_en: "Write 3 ideas, cross out 2, and commit 7 days to the last one." },
    { title: "⚡ TAKE ACTION", action: "Pilih satu tugas yang tertunda, kerjakan 15 menit sekarang.", action_en: "Pick one delayed task, do it for 15 mins now." },
    { title: "🧱 BUILD A SKILL", action: "Tentukan 1 materi belajar (buku/video) dan pelajari 20 menit malam ini.", action_en: "Pick 1 learning material and study it for 20 mins tonight." },
    { title: "🌱 START AGAIN", action: "Rapikan mejamu. Beri sinyal ke otak bahwa ini ruang yang baru.", action_en: "Clean your desk. Signal to your brain that this is a fresh space." },
    { title: "🧘 SLOW DOWN", action: "Matikan notifikasi HP selama 2 jam malam ini. Nggak usah mikirin progres.", action_en: "Turn off notifications for 2 hours tonight. Don't worry about progress." }
];

const uiTranslations = {
    id: {
        title: "IT'S TIME TO<br>UPGRADE YOURSELF <span class=\"highlight\">2.0</span>",
        subtitle: "Sebelum mulai... kenalan dulu dikit. Biar hasilnya terasa lebih personal.",
        opt_gender: "Gender...", opt_f: "Perempuan", opt_m: "Laki-laki",
        privacy: "Data ini digunakan untuk personalisasi hasil dan pengembangan.",
        btn_start: "Oke, mulai &rarr;",
        res_label: "YOUR CURRENT VERSION", stat_dir: "DIRECTION", stat_act: "ACTION", stat_gro: "GROWTH",
        rc_footer: "Your next version starts with one small move.",
        btn_dl: "Download My Card &darr;", btn_share: "Share My Result",
        insight_title: "Yang aku tangkap dari jawabanmu...",
        upgrade_sub: "Nggak perlu upgrade semuanya sekaligus. Pilih satu yang paling mau kamu commit dulu.",
        fb_title: "Boleh jujur?", fb_sub: "Kalau ada yang terasa relate, aneh, atau kurang pas—aku pengen tahu.",
        btn_fb: "Kirim Feedback &rarr;", err_contact: "Masukkan email (pakai @) atau no WA (angka saja) yang valid.",
        btn_reselect: "Pilih Ulang ↺", btn_restart: "Mulai Lagi ↺"
    },
    en: {
        title: "IT'S TIME TO<br>UPGRADE YOURSELF <span class=\"highlight\">2.0</span>",
        subtitle: "Before we start... let's get to know you.",
        opt_gender: "Gender...", opt_f: "Female", opt_m: "Male",
        privacy: "This data is used to personalize results.",
        btn_start: "Let's begin &rarr;",
        res_label: "YOUR CURRENT VERSION", stat_dir: "DIRECTION", stat_act: "ACTION", stat_gro: "GROWTH",
        rc_footer: "Your next version starts with one small move.",
        btn_dl: "Download My Card &darr;", btn_share: "Share My Result",
        insight_title: "Here is what I gathered...",
        upgrade_sub: "No need to upgrade all at once. Pick one you want to commit to first.",
        fb_title: "Can we be honest?", fb_sub: "If anything felt weird or off—I'd love to know.",
        btn_fb: "Send Feedback &rarr;", err_contact: "Enter a valid email or WA number.",
        btn_reselect: "Change Selection ↺", btn_restart: "Start Over ↺"
    }
};

const placeholders = {
    id: { ph_name: "Nama panggilan...", ph_contact: "Email / WA...", ph_age: "Usia", fb_ph: "Bagian mana yang paling relate? (Opsional)" },
    en: { ph_name: "Nickname...", ph_contact: "Email / WA...", ph_age: "Age", fb_ph: "Which part relates to you? (Optional)" }
};

// ==========================================
// 2. LOGIC CENTER
// ==========================================

let userData = { name: '', contact: '', gender: '', age: '', selectedUpgrade: '' };
let currentQuestionIndex = 0, userAnswers = [], finalArchetype = '', currentLang = 'id', isDarkMode = false;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('onboarding-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const contactInput = document.getElementById('user-contact').value.trim();
        const errEl = document.getElementById('contact-error');
        errEl.classList.add('hidden');

        if (contactInput !== '') {
            const isEmail = contactInput.includes('@') && contactInput.includes('.');
            const isWA = /^\d{10,14}$/.test(contactInput);
            if (!isEmail && !isWA) {
                errEl.innerText = uiTranslations[currentLang].err_contact;
                errEl.classList.remove('hidden');
                return;
            }
        }

        userData.name = document.getElementById('user-name').value;
        userData.contact = contactInput;
        userData.gender = document.getElementById('user-gender').value;
        userData.age = document.getElementById('user-age').value;
        
        switchScreen('screen-assessment');
        renderQuestion();
    });

    const emojis = document.querySelectorAll('.feedback-emojis button');
    emojis.forEach(btn => {
        btn.onclick = () => {
            emojis.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            btn.dataset.selected = 'true';
        }
    });
});

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    document.getElementById('btn-theme').innerText = isDarkMode ? '☀️' : '🌙';
}

function switchLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    document.getElementById('btn-lang').innerText = currentLang === 'id' ? 'EN' : 'ID';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(uiTranslations[currentLang][key]) el.innerHTML = uiTranslations[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if(placeholders[currentLang][key]) el.placeholder = placeholders[currentLang][key];
    });

    if (document.getElementById('screen-assessment').classList.contains('active')) renderQuestion();
    if (document.getElementById('screen-result').classList.contains('active')) {
        populateUpgrades();
        buildResultScreen(); 
    }
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        setTimeout(() => s.style.display = 'none', 400); 
    });
    setTimeout(() => {
        const target = document.getElementById(screenId);
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 50);
    }, 400);
}

function renderQuestion() {
    const q = questionsData[currentQuestionIndex];
    document.getElementById('progress-text').innerText = `${String(currentQuestionIndex + 1).padStart(2, '0')} / ${questionsData.length}`;
    document.getElementById('progress-fill').style.width = `${((currentQuestionIndex + 1) / questionsData.length) * 100}%`;
    
    document.getElementById('question-text').innerText = currentLang === 'en' ? q.q_en : q.q;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        btn.innerText = currentLang === 'en' ? opt.text_en : opt.text;
        btn.onclick = () => handleAnswer(opt.type);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(type) {
    userAnswers.push(type);
    if (currentQuestionIndex < questionsData.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        processResults();
    }
}

function processResults() {
    switchScreen('screen-loading');
    const counts = {};
    userAnswers.forEach(x => counts[x] = (counts[x] || 0) + 1);
    finalArchetype = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    setTimeout(() => {
        buildResultScreen();
        populateUpgrades();
        switchScreen('screen-result');
    }, 4000); 
}

function buildResultScreen() {
    const data = archetypeData[finalArchetype];
    const rCard = document.getElementById('result-card');
    
    rCard.style.backgroundColor = data.theme.bg;
    rCard.style.color = data.theme.text;
    document.documentElement.style.setProperty('--card-accent', data.theme.accent);
    
    document.getElementById('rc-name').innerText = userData.name;
    document.getElementById('rc-archetype').innerText = data.title;
    document.getElementById('rc-quote').innerText = currentLang === 'en' ? `"${data.quote_en}"` : `"${data.quote}"`;
    
    document.getElementById('stat-dir').innerText = data.stats.dir;
    document.getElementById('stat-act').innerText = data.stats.act;
    document.getElementById('stat-gro').innerText = data.stats.gro;
    
    const img = document.getElementById('rc-char-img');
    const fallback = document.getElementById('rc-char-fallback');
    img.src = data.image;
    img.onload = () => { img.style.display = 'block'; fallback.style.display = 'none'; };
    img.onerror = () => { img.style.display = 'none'; fallback.style.display = 'block'; fallback.innerText = data.fallbackEmoji; };

    document.getElementById('qrcode').innerHTML = ""; 
    new QRCode(document.getElementById("qrcode"), {
        text: "https://glittering-sunflower-a860d3.netlify.app/",
        width: 128, height: 128, colorDark: "#000000", colorLight: "#ffffff"
    });

    const insContainer = document.getElementById('insights-container');
    insContainer.innerHTML = '';
    const insights = currentLang === 'en' ? data.insights_en : data.insights;
    insights.forEach(insight => insContainer.innerHTML += `<div class="insight-item mb-4">${insight}</div>`);
}

function populateUpgrades() {
    const upGrid = document.getElementById('upgrade-selector');
    upGrid.innerHTML = '';
    upgradeOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'upgrade-card';
        div.innerHTML = `<h4>${opt.title}</h4>`;
        div.onclick = () => {
            upGrid.style.display = 'none';
            document.getElementById('upgrade-result').classList.remove('hidden');
            document.getElementById('ur-title').innerText = opt.title;
            const actionLabel = currentLang === 'en' ? "24-Hour Action" : "Action 24 Jam";
            const actionText = currentLang === 'en' ? opt.action_en : opt.action;
            document.getElementById('ur-action').innerHTML = `<strong>${actionLabel}:</strong> ${actionText}`;
            userData.selectedUpgrade = opt.title;
        };
        upGrid.appendChild(div);
    });
}

// FUNGSI PILIH ULANG UPGRADE
function resetUpgrade() {
    document.getElementById('upgrade-result').classList.add('hidden');
    document.getElementById('upgrade-selector').style.display = '';
    userData.selectedUpgrade = '';
}

function downloadCard() {
    const btn = document.getElementById('btn-dl');
    const originalText = btn.innerText;
    btn.innerText = "Processing...";
    html2canvas(document.getElementById('capture-area'), { scale: 3, useCORS: true, backgroundColor: null }).then(canvas => {
        const link = document.createElement('a');
        link.download = `walik-labs-${userData.name.toLowerCase()}-upgrade-2.0.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        btn.innerText = originalText;
    });
}

function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: 'Upgrade Yourself 2.0 | Walik Labs',
            text: currentLang === 'id' 
                ? `Ternyata aku adalah ${archetypeData[finalArchetype].title}. Yuk cek versi 2.0 kamu di Walik Labs!`
                : `Turns out I am ${archetypeData[finalArchetype].title}. Find your 2.0 version at Walik Labs!`,
            url: 'https://glittering-sunflower-a860d3.netlify.app/'
        });
    }
}

// ==========================================
// 3. PENGIRIMAN DATA KE GOOGLE SHEETS (ANTI GAGAL)
// ==========================================

function submitFeedback() {
    const text = document.getElementById('feedback-text').value;
    const selectedEmojiBtn = document.querySelector('.feedback-emojis button[data-selected="true"]');
    const rating = selectedEmojiBtn ? selectedEmojiBtn.dataset.val : '-';
    
    const btn = document.getElementById('btn-submit-feedback');
    btn.innerText = currentLang === 'id' ? "Menyimpan..." : "Saving...";
    btn.disabled = true;

    // URL API GOOGLE SHEETS KAMU
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwtrvVgCVW6Agr9iCHfrTKh67uM40msLYu88v9nxdlTk5L_sEnnEcxtfoV378r89lh2/exec';

    // Menggunakan URLSearchParams agar lolos pengamanan Google
    const payload = new URLSearchParams({
        name: userData.name || "-",
        contact: userData.contact || "-",
        gender: userData.gender || "-",
        age: userData.age || "-",
        archetype: finalArchetype || "-",
        selectedUpgrade: userData.selectedUpgrade || "-",
        rating: rating,
        feedback: text || "-"
    });

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', 
        body: payload 
    })
    .then(() => {
        btn.innerText = currentLang === 'id' ? "Thanks atas feedbacknya! ✨" : "Thanks for the feedback! ✨";
    })
    .catch(error => {
        console.error('Error:', error);
        btn.innerText = currentLang === 'id' ? "Gagal kirim, tapi santai aja!" : "Failed to send, but no worries!";
        btn.disabled = false;
    });
}
