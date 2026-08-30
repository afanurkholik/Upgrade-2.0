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
    }
    // (Kamu bisa tambahkan pertanyaan lain sesuai format di atas jika mau)
];

const archetypeData = {
    "explorer": {
        title: "THE EXPLORER", theme: { bg: "#f0f9ff", accent: "#0ea5e9", text: "#0f172a" },
        image: "assets/characters/explorer.png", fallbackEmoji: "🗺️",
        quote: "Still figuring it out, and that's okay.", quote_en: "Still figuring it out, and that's okay.",
        stats: { dir: "████░░░░░░", act: "██████░░░░", gro: "████████░░" },
        insights: ["Kamu mungkin nggak kehilangan arah, cuma terlalu banyak pilihan.", "Berhenti memastikan semuanya 'benar' sebelum mulai."],
        insights_en: ["You aren't necessarily lost, just overwhelmed with options.", "Stop making sure everything is 'perfect' before starting."]
    },
    "restarter": {
        title: "THE RESTARTER", theme: { bg: "#fff7ed", accent: "#f97316", text: "#431407" },
        image: "assets/characters/restarter.png", fallbackEmoji: "🚪",
        quote: "Not from scratch. From experience.", quote_en: "Not from scratch. From experience.",
        stats: { dir: "██████░░░░", act: "████░░░░░░", gro: "█████████░" },
        insights: ["Kamu sedang melewati transisi besar.", "Tantangan terbesarmu adalah berani melangkah lagi."],
        insights_en: ["You are going through a major transition.", "Your biggest challenge is daring to step forward again."]
    },
    "builder": {
        title: "THE BUILDER", theme: { bg: "#f7fee7", accent: "#84cc16", text: "#1a2e05" },
        image: "assets/characters/builder.png", fallbackEmoji: "🧱",
        quote: "You know the way. Just keep building.", quote_en: "You know the way. Just keep building.",
        stats: { dir: "████████░░", act: "████████░░", gro: "███████░░░" },
        insights: ["Kamu punya arah dan sistem yang perlahan mulai jalan.", "Jangan terlalu keras pada diri sendiri."],
        insights_en: ["You have a direction and a system slowly working.", "Don't be too hard on yourself."]
    },
    "dreamer": {
        title: "THE DREAMER", theme: { bg: "#faf5ff", accent: "#a855f7", text: "#3b0764" },
        image: "assets/characters/dreamer.png", fallbackEmoji: "✨",
        quote: "Too many tabs open in your head.", quote_en: "Too many tabs open in your head.",
        stats: { dir: "██████░░░░", act: "██░░░░░░░░", gro: "████████░░" },
        insights: ["Kepalamu sangat berisik dengan ide.", "Versi jelek yang selesai jauh lebih berharga dari versi sempurna di kepala."],
        insights_en: ["Your mind is loud with ideas.", "A finished bad version is better than a perfect imaginary one."]
    },
    "awakening": {
        title: "THE AWAKENING", theme: { bg: "#fffbeb", accent: "#eab308", text: "#422006" },
        image: "assets/characters/awakening.png", fallbackEmoji: "🌅",
        quote: "You can't unsee what you know you need to do.", quote_en: "You can't unsee what you know you need to do.",
        stats: { dir: "█████░░░░░", act: "████░░░░░░", gro: "██████████" },
        insights: ["Ada rasa gelisah yang sehat dalam dirimu.", "Ubah energi gelisah ini jadi aksi nyata."],
        insights_en: ["There is a healthy restlessness inside you.", "Turn this restless energy into real action."]
    }
};

const upgradeOptions = [
    { title: "🧠 CLEAR MY HEAD", action: "Tulis isi kepalamu 10 menit.", action_en: "Write your thoughts for 10 mins." },
    { title: "⚡ TAKE ACTION", action: "Pilih satu tugas, kerjakan 15 menit sekarang.", action_en: "Pick one task, do it for 15 mins now." }
];

const uiTranslations = {
    id: {
        title: "IT'S TIME TO<br>UPGRADE YOURSELF <span class=\"highlight\">2.0</span>",
        subtitle: "Sebelum mulai... kenalan dulu dikit. Biar hasilnya terasa lebih personal.",
        opt_gender: "Gender...", opt_f: "Perempuan", opt_m: "Laki-laki",
        privacy: "Data ini digunakan untuk personalisasi hasil dan pengembangan.",
        btn_start: "Oke, mulai &rarr;",
        res_label: "YOUR CURRENT VERSION", stat_dir: "DIRECTION", stat_act: "ACTION", stat_gro: "GROWTH",
        rc_footer: "Your next version starts with one small move.", rc_scan: "Scan & find<br>your 2.0",
        btn_dl: "Download My Card &darr;", btn_share: "Share My Result",
        insight_title: "Yang aku tangkap dari jawabanmu...",
        upgrade_sub: "Pilih satu yang paling mau kamu commit dulu.",
        fb_title: "Boleh jujur?", fb_sub: "Kalau ada yang terasa relate, aneh, atau kurang pas—aku pengen tahu.",
        btn_fb: "Kirim Feedback &rarr;", err_contact: "Masukkan email (pakai @) atau no WA valid."
    },
    en: {
        title: "IT'S TIME TO<br>UPGRADE YOURSELF <span class=\"highlight\">2.0</span>",
        subtitle: "Before we start... let's get to know you.",
        opt_gender: "Gender...", opt_f: "Female", opt_m: "Male",
        privacy: "This data is used to personalize results.",
        btn_start: "Let's begin &rarr;",
        res_label: "YOUR CURRENT VERSION", stat_dir: "DIRECTION", stat_act: "ACTION", stat_gro: "GROWTH",
        rc_footer: "Your next version starts with one small move.", rc_scan: "Scan & find<br>your 2.0",
        btn_dl: "Download My Card &darr;", btn_share: "Share My Result",
        insight_title: "Here is what I gathered...",
        upgrade_sub: "Pick one you want to commit to first.",
        fb_title: "Can we be honest?", fb_sub: "If anything felt weird or off—I'd love to know.",
        btn_fb: "Send Feedback &rarr;", err_contact: "Enter a valid email or WA number."
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

function downloadCard() {
    html2canvas(document.getElementById('capture-area'), { scale: 3, useCORS: true }).then(canvas => {
        const link = document.createElement('a');
        link.download = `walik-labs-${userData.name.toLowerCase()}-upgrade-2.0.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: 'Upgrade Yourself 2.0 | Walik Labs',
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

    // GANTI URL DI BAWAH INI DENGAN URL APPS SCRIPT-MU YANG BARU
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwtrvVgCVW6Agr9iCHfrTKh67uM40msLYu88v9nxdlTk5L_sEnnEcxtfoV378r89lh2/exec';

    // Menggunakan URLSearchParams (Metode Paling Ampuh untuk Google Sheets)
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
        body: payload 
    })
    .then(response => {
        btn.innerText = currentLang === 'id' ? "Thanks atas feedbacknya! ✨" : "Thanks for the feedback! ✨";
    })
    .catch(error => {
        console.error('Error:', error);
        btn.innerText = currentLang === 'id' ? "Gagal kirim, tapi santai aja!" : "Failed to send, but no worries!";
        btn.disabled = false;
    });
}
