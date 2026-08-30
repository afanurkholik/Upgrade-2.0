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
        insight: "aku nangkep kamu sebenarnya bukan orang yang nggak punya arah. Kamu justru punya *terlalu banyak* hal yang pengen dicoba. Masalahnya, semuanya terasa penting dan menarik di waktu yang sama.<br><br>Akhirnya kamu maju sedikit, mikir lagi, takut salah pilih, ganti arah, lalu mulai lagi dari awal. Kamu takut banget kalau milih satu, kamu bakal kelewatan kesempatan di tempat lain. Tapi sadar nggak? Akibatnya kamu malah jalan di tempat sambil sibuk mikir. Kamu nggak butuh kejelasan 100% buat mulai. Kejelasan itu justru baru dateng <i>setelah</i> kamu berani nyoba satu jalan.",
        insight_en: "I sense you aren't actually aimless. You just have *too many* things you want to try. The problem is, everything feels equally important right now.<br><br>You take a step, overthink it, fear missing out on other paths, change direction, and restart. Because you're so terrified of picking the wrong path, you end up running in place inside your own head. You don't need 100% clarity to begin. Clarity only comes <i>after</i> you dare to commit to one path."
    },
    "restarter": {
        title: "THE RESTARTER", theme: { bg: "#fff7ed", accent: "#f97316", text: "#431407" },
        image: "assets/characters/restarter.png", fallbackEmoji: "🚪",
        quote: "Not from scratch. From experience.", quote_en: "Not from scratch. From experience.",
        stats: { dir: "██████░░░░", act: "████░░░░░░", gro: "█████████░" },
        insight: "kelihatan banget kalau kamu baru aja ngelewatin sebuah 'akhir' yang lumayan nguras energi. Mungkin ekspektasi yang patah, plan yang gagal, atau emang fasenya udah habis.<br><br>Ada rasa capek, pengen istirahat, tapi di sisi lain ada ego yang maksa buat 'cepetan jalan lagi'. Dengerin aku: kamu nggak mulai dari nol kok. Kamu cuma lagi bawa ransel pengalaman buat masuk ke pintu yang baru. Nggak usah terlalu keras ngatur timeline, gapapa pelan-pelan asal fondasinya bener.",
        insight_en: "it's very clear you just went through an 'ending' that drained your energy. Maybe broken expectations, a failed plan, or just a phase that naturally closed.<br><br>You're exhausted and want to rest, but your ego pushes you to 'hurry up and move'. Listen: you are not starting from zero. You're just carrying your backpack of experience through a new door. Don't be too hard on your timeline; it's okay to move slowly as long as the foundation is right."
    },
    "builder": {
        title: "THE BUILDER", theme: { bg: "#f7fee7", accent: "#84cc16", text: "#1a2e05" },
        image: "assets/characters/builder.png", fallbackEmoji: "🧱",
        quote: "You know the way. Just keep building.", quote_en: "You know the way. Just keep building.",
        stats: { dir: "████████░░", act: "████████░░", gro: "███████░░░" },
        insight: "sebenernya kamu tuh udah tahu persis apa yang harus dilakuin. Fondasinya udah ada, arahnya udah lumayan jelas. Musuh terbesarmu sekarang bukan kebingungan, tapi <b>rasa bosan</b> dan <b>ekspektasi</b>.<br><br>Kamu sering ngerasa udah jalan jauh, tapi kok hasilnya belum kelihatan signifikan? Akhirnya kamu merasa 'stuck', padahal kamu cuma lagi ada di fase pengulangan yang emang wajar. Tolong, jangan nyerah pas lagi capek-capeknya. Bangunan yang kokoh emang nggak kelihatan progresnya dalam semalam.",
        insight_en: "you actually know exactly what needs to be done. The foundation is there, the direction is clear. Your biggest enemies right now aren't confusion, but <b>boredom</b> and <b>expectations</b>.<br><br>You feel like you've walked so far, yet the results aren't massive yet. You feel 'stuck', when in reality you are just in the necessary phase of repetition. Please, don't quit just because you're tired. Solid buildings don't show their full progress overnight."
    },
    "dreamer": {
        title: "THE DREAMER", theme: { bg: "#faf5ff", accent: "#a855f7", text: "#3b0764" },
        image: "assets/characters/dreamer.png", fallbackEmoji: "✨",
        quote: "Too many tabs open in your head.", quote_en: "Too many tabs open in your head.",
        stats: { dir: "██████░░░░", act: "██░░░░░░░░", gro: "████████░░" },
        insight: "kepalamu itu jujur keren banget. Ide-idemu brilian, seleramu bagus. Tapi masalah utamanya: jarak antara kepalamu dan tanganmu kejauhan.<br><br>Kamu terlalu perfeksionis di dalam pikiran. Nunggu siap, nunggu sempurna, nunggu 'waktu yang pas'. Ujung-ujungnya ide itu cuma numpuk jadi wacana, dan kamu malah overthinking ngeliat orang lain udah pada jalan dengan ide yang lebih jelek dari punyamu. Ayo, turunin ekspektasimu ke dirimu sendiri, dan biarin eksekusi pertamamu jelek. Yang penting rilis.",
        insight_en: "your mind is honestly brilliant. Your ideas are great, your taste is impeccable. But the main problem is the distance between your brain and your hands.<br><br>You are a perfectionist in your thoughts. Waiting to be ready, waiting for the 'perfect time'. Ultimately, those ideas just pile up, and you end up overthinking while watching others succeed with ideas worse than yours. Drop your expectations, let your first execution be bad. Just release it."
    },
    "awakening": {
        title: "THE AWAKENING", theme: { bg: "#fffbeb", accent: "#eab308", text: "#422006" },
        image: "assets/characters/awakening.png", fallbackEmoji: "🌅",
        quote: "You can't unsee what you know you need to do.", quote_en: "You can't unsee what you know you need to do.",
        stats: { dir: "█████░░░░░", act: "████░░░░░░", gro: "██████████" },
        insight: "aku ngerasain ada 'kegelisahan' yang udah nyampe di ubun-ubun. Kamu udah capek sama rutinitas autopilotmu, dan yang paling penting: kamu udah muak bikin alasan buat dirimu sendiri.<br><br>Kamu tahu ada yang salah, kamu tahu kamu harus gerak, tapi bingung narik pelatuk pertamanya di mana. Momentum sadar dan gelisah ini mahal banget. Jangan biarin ini cuma jadi bahan overthinking malem ini terus besok pagi kamu balik ke setelan pabrik. Lakuin satu hal kecil besok, just break the cycle.",
        insight_en: "I sense a 'restlessness' that has reached its peak. You are tired of your autopilot routine, and most importantly: you are sick of making excuses for yourself.<br><br>You know something is wrong, you know you have to move, but you don't know how to pull the trigger. This momentum of awakening is rare. Don't let this just become late-night overthinking fuel and return to default settings tomorrow. Do one tiny thing tomorrow. Just break the cycle."
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
        btn_start: "Oke, mulai &rarr;", cq_title: "Oke, sekarang giliran kamu ngomong.",
        cq_sub: "Kalau ada satu hal tentang hidupmu yang belum sempat ditanya di sini, ceritain aja.",
        btn_finish: "Lihat Hasil &rarr;", res_label: "YOUR CURRENT VERSION", 
        stat_dir: "DIRECTION", stat_act: "ACTION", stat_gro: "GROWTH",
        rc_ask: "What's your current version?", rc_scan: "Take the assessment & find your 2.0.",
        btn_dl: "Download My Card &darr;", btn_share: "Share My Result",
        insight_title: "Yang aku tangkap dari jawabanmu...",
        upgrade_sub: "Nggak perlu upgrade semuanya sekaligus. Pilih satu yang paling mau kamu commit dulu.",
        fb_title: "Boleh jujur?", fb_sub: "Kalau ada yang terasa relate, aneh, atau kurang pas—aku pengen tahu.",
        btn_fb: "Kirim Feedback &rarr;", err_contact: "Masukkan email (pakai @) atau no WA (angka saja) yang valid.",
        btn_reselect: "Pilih Ulang ↺", btn_restart: "Mulai Lagi ↺",
        prefix_story: "Membaca ceritamu tadi, ditambah jawaban-jawaban pilihanmu, ", prefix_no_story: "Dari pola jawabanmu, "
    },
    en: {
        title: "IT'S TIME TO<br>UPGRADE YOURSELF <span class=\"highlight\">2.0</span>",
        subtitle: "Before we start... let's get to know you.",
        opt_gender: "Gender...", opt_f: "Female", opt_m: "Male",
        privacy: "This data is used to personalize results.",
        btn_start: "Let's begin &rarr;", cq_title: "Alright, your turn to speak.",
        cq_sub: "If there's one thing about your life we haven't asked, just let it out.",
        btn_finish: "See Results &rarr;", res_label: "YOUR CURRENT VERSION", 
        stat_dir: "DIRECTION", stat_act: "ACTION", stat_gro: "GROWTH",
        rc_ask: "What's your current version?", rc_scan: "Take the assessment & find your 2.0.",
        btn_dl: "Download My Card &darr;", btn_share: "Share My Result",
        insight_title: "Here is what I gathered...",
        upgrade_sub: "No need to upgrade all at once. Pick one you want to commit to first.",
        fb_title: "Can we be honest?", fb_sub: "If anything felt weird or off—I'd love to know.",
        btn_fb: "Send Feedback &rarr;", err_contact: "Enter a valid email or WA number.",
        btn_reselect: "Change Selection ↺", btn_restart: "Start Over ↺",
        prefix_story: "Reading what you just shared, plus your answers... ", prefix_no_story: "From your answers, "
    }
};

const placeholders = {
    id: { ph_name: "Nama panggilan...", ph_contact: "Email / WA...", ph_age: "Usia", fb_ph: "Bagian mana yang paling relate? (Opsional)", cq_ph: "Nggak harus rapi. Tulis aja apa yang lagi ada di kepala kamu. (Opsional)" },
    en: { ph_name: "Nickname...", ph_contact: "Email / WA...", ph_age: "Age", fb_ph: "Which part relates to you? (Optional)", cq_ph: "Doesn't have to be perfect. Just write what's on your mind. (Optional)" }
};

// ==========================================
// 2. LOGIC CENTER
// ==========================================

let userData = { name: '', contact: '', gender: '', age: '', customStory: '', selectedUpgrade: '' };
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

    if (document.getElementById('screen-assessment').classList.contains('active')) {
        if(currentQuestionIndex < questionsData.length) renderQuestion();
    }
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
    // Cek apakah masuk ke pertanyaan Custom (Q 13)
    if (currentQuestionIndex === questionsData.length) {
        document.getElementById('progress-text').innerText = `13 / 13`;
        document.getElementById('progress-fill').style.width = `100%`;
        
        const qContainer = document.getElementById('question-container');
        qContainer.classList.remove('slide-up');
        qContainer.classList.add('hidden');
        
        const customContainer = document.getElementById('custom-question-container');
        customContainer.classList.remove('hidden');
        customContainer.classList.add('slide-up');
        return;
    }

    // Normal MCQ
    const q = questionsData[currentQuestionIndex];
    document.getElementById('progress-text').innerText = `${String(currentQuestionIndex + 1).padStart(2, '0')} / 13`;
    document.getElementById('progress-fill').style.width = `${((currentQuestionIndex + 1) / 13) * 100}%`;
    
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
    
    const container = document.getElementById('question-container');
    container.classList.remove('slide-up');
    void container.offsetWidth; 
    container.classList.add('slide-up');
}

function handleAnswer(type) {
    userAnswers.push(type);
    currentQuestionIndex++;
    renderQuestion();
}

function submitCustomStory() {
    userData.customStory = document.getElementById('custom-story').value.trim();
    processResults();
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
    
    const headline = currentLang === 'en' ? "APPARENTLY, I'M..." : "TERNYATA AKU...";
    document.getElementById('rc-headline').innerText = headline;
    
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
        width: 60, height: 60, colorDark: "#000000", colorLight: "#ffffff"
    });

    const insContainer = document.getElementById('insights-container');
    const insightText = currentLang === 'en' ? data.insight_en : data.insight;
    
    // Personalisasi Insight
    const prefix = userData.customStory 
        ? uiTranslations[currentLang].prefix_story 
        : uiTranslations[currentLang].prefix_no_story;
        
    insContainer.innerHTML = `<p><strong>${userData.name.toUpperCase()}</strong>, ${prefix}${insightText}</p>`;
}

function populateUpgrades() {
    const upGrid = document.getElementById('upgrade-selector');
    upGrid.innerHTML = '';
    upgradeOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'upgrade-card';
        div.innerHTML = `<h4>${opt.title}</h4>`;
        div.onclick = () => {
            // Smooth Transition out
            upGrid.classList.add('transition-fade-out');
            setTimeout(() => {
                upGrid.style.display = 'none';
                upGrid.classList.remove('transition-fade-out');
                
                // Set and fade in result
                const resDiv = document.getElementById('upgrade-result');
                resDiv.classList.remove('hidden');
                resDiv.classList.add('transition-fade-out'); // Start hidden
                
                document.getElementById('ur-title').innerText = opt.title;
                const actionLabel = currentLang === 'en' ? "24-Hour Action" : "Action 24 Jam";
                const actionText = currentLang === 'en' ? opt.action_en : opt.action;
                document.getElementById('ur-action').innerHTML = `<strong>${actionLabel}:</strong> ${actionText}`;
                userData.selectedUpgrade = opt.title;

                // Force reflow
                void resDiv.offsetWidth; 
                resDiv.classList.remove('transition-fade-out');
                resDiv.classList.add('transition-fade-in');
            }, 300);
        };
        upGrid.appendChild(div);
    });
}

function resetUpgrade() {
    const resDiv = document.getElementById('upgrade-result');
    resDiv.classList.remove('transition-fade-in');
    resDiv.classList.add('transition-fade-out');
    
    setTimeout(() => {
        resDiv.classList.add('hidden');
        resDiv.classList.remove('transition-fade-out');
        
        const upGrid = document.getElementById('upgrade-selector');
        upGrid.style.display = '';
        upGrid.classList.add('transition-fade-out');
        
        void upGrid.offsetWidth;
        upGrid.classList.remove('transition-fade-out');
        upGrid.classList.add('transition-fade-in');
        
        userData.selectedUpgrade = '';
    }, 300);
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
// 3. PENGIRIMAN DATA KE GOOGLE SHEETS
// ==========================================

function submitFeedback() {
    const text = document.getElementById('feedback-text').value;
    const selectedEmojiBtn = document.querySelector('.feedback-emojis button[data-selected="true"]');
    const rating = selectedEmojiBtn ? selectedEmojiBtn.dataset.val : '-';
    
    const btn = document.getElementById('btn-submit-feedback');
    btn.innerText = currentLang === 'id' ? "Menyimpan..." : "Saving...";
    btn.disabled = true;

    // URL API GOOGLE SHEETS KAMU
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxnaL4XlkJbx2vBZtxWqeXkaJyPoTUW70IOKTZpMYCdjG8L4nWE0BCuwEodlOH0TXc/exec';

    const payload = new URLSearchParams({
        name: userData.name || "-",
        contact: userData.contact || "-",
        gender: userData.gender || "-",
        age: userData.age || "-",
        customStory: userData.customStory || "-", // Kolom baru cerita
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
