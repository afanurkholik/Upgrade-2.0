// STATE MANAGEMENT
let userData = { name: '', contact: '', gender: '', age: '', selectedUpgrade: '' };
let currentQuestionIndex = 0;
let userAnswers = []; 
let finalArchetype = '';
let currentLang = 'id';
let isDarkMode = false;

// DOM ELEMENTS
const screens = {
    onboarding: document.getElementById('screen-onboarding'),
    assessment: document.getElementById('screen-assessment'),
    loading: document.getElementById('screen-loading'),
    result: document.getElementById('screen-result')
};

// UI DICTIONARY (Bilingual)
const uiTranslations = {
    id: {
        title: "IT'S TIME TO<br>UPGRADE YOURSELF <span class=\"highlight\">2.0</span>",
        subtitle: "Sebelum mulai... kenalan dulu dikit. Biar hasilnya terasa lebih personal.",
        opt_gender: "Gender...", opt_f: "Perempuan", opt_m: "Laki-laki",
        privacy: "Data ini digunakan untuk personalisasi hasil dan pengembangan assessment Walik Labs.",
        btn_start: "Oke, mulai &rarr;",
        res_label: "YOUR CURRENT VERSION",
        stat_dir: "DIRECTION", stat_act: "ACTION", stat_gro: "GROWTH",
        rc_footer: "Your next version starts with one small move.",
        rc_scan: "Scan & find<br>your 2.0",
        btn_dl: "Download My Card &darr;", btn_share: "Share My Result",
        insight_title: "Yang aku tangkap dari jawabanmu...",
        upgrade_sub: "Nggak perlu upgrade semuanya sekaligus. Pilih satu yang paling mau kamu commit dulu.",
        fb_title: "Boleh jujur?",
        fb_sub: "Tes ini masih versi awal. Kalau ada yang terasa relate, aneh, atau kurang pas—aku pengen tahu.",
        btn_fb: "Kirim Feedback &rarr;",
        cta_text: "Walik Labs sedang bikin tools kecil untuk membantu kamu menjalani proses upgrade ini.",
        err_contact: "Masukkan email (pakai @) atau no WA (10-14 angka)."
    },
    en: {
        title: "IT'S TIME TO<br>UPGRADE YOURSELF <span class=\"highlight\">2.0</span>",
        subtitle: "Before we start... let's get to know you. To make it more personal.",
        opt_gender: "Gender...", opt_f: "Female", opt_m: "Male",
        privacy: "This data is used to personalize results and improve Walik Labs' assessment.",
        btn_start: "Let's begin &rarr;",
        res_label: "YOUR CURRENT VERSION",
        stat_dir: "DIRECTION", stat_act: "ACTION", stat_gro: "GROWTH",
        rc_footer: "Your next version starts with one small move.",
        rc_scan: "Scan & find<br>your 2.0",
        btn_dl: "Download My Card &darr;", btn_share: "Share My Result",
        insight_title: "Here is what I gathered...",
        upgrade_sub: "No need to upgrade everything at once. Pick one you want to commit to first.",
        fb_title: "Can we be honest?",
        fb_sub: "This is an early version. If anything felt relatable, weird, or off—I'd love to know.",
        btn_fb: "Send Feedback &rarr;",
        cta_text: "Walik Labs is building a small tool to help you through this upgrade process.",
        err_contact: "Enter a valid email (with @) or WA number (10-14 digits)."
    }
};

const placeholders = {
    id: { ph_name: "Nama panggilan kamu...", ph_contact: "Email atau nomor WA...", ph_age: "Usia", fb_ph: "Bagian mana yang paling relate / nggak relate? (Opsional)" },
    en: { ph_name: "Your nickname...", ph_contact: "Email or WA number...", ph_age: "Age", fb_ph: "Which part relates to you the most / least? (Optional)" }
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('onboarding-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // VALIDASI KONTAK (Dibuat aman dari crash)
        const contactInput = document.getElementById('user-contact') ? document.getElementById('user-contact').value.trim() : '';
        const errEl = document.getElementById('contact-error');
        if (errEl) errEl.classList.add('hidden');

        if (contactInput !== '') {
            const isEmail = contactInput.includes('@') && contactInput.includes('.');
            const isWA = /^\d{10,14}$/.test(contactInput);
            
            if (!isEmail && !isWA) {
                if (errEl) {
                    errEl.innerText = uiTranslations[currentLang].err_contact;
                    errEl.classList.remove('hidden');
                } else {
                    alert(uiTranslations[currentLang].err_contact);
                }
                return; // Stop form submit jika tidak valid
            }
        }

        userData.name = document.getElementById('user-name') ? document.getElementById('user-name').value : '';
        userData.contact = contactInput;
        userData.gender = document.getElementById('user-gender') ? document.getElementById('user-gender').value : '';
        userData.age = document.getElementById('user-age') ? document.getElementById('user-age').value : '';
        
        switchScreen('assessment');
        renderQuestion();
    });

    populateUpgrades();

    const emojis = document.querySelectorAll('.feedback-emojis button');
    emojis.forEach(btn => {
        btn.onclick = () => {
            emojis.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            btn.dataset.selected = 'true';
        }
    });
});

// THEME & LANGUAGE TOGGLES
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    const btnTheme = document.getElementById('btn-theme');
    if (btnTheme) btnTheme.innerText = isDarkMode ? '☀️' : '🌙';
}

function switchLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) btnLang.innerText = currentLang === 'id' ? 'EN' : 'ID';
    
    // Aesthetic Fade Out
    const fadeEls = document.querySelectorAll('.fade-content');
    fadeEls.forEach(el => el.classList.add('fade-out'));
    
    setTimeout(() => {
        // Update Static UI
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(uiTranslations[currentLang][key]) el.innerHTML = uiTranslations[currentLang][key];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if(placeholders[currentLang][key]) el.placeholder = placeholders[currentLang][key];
        });

        // Update Dynamic UI based on current screen
        if (screens.assessment && screens.assessment.classList.contains('active')) renderQuestion();
        if (screens.result && screens.result.classList.contains('active')) {
            populateUpgrades();
            buildResultScreen(); 
        }
        
        // Aesthetic Fade In
        fadeEls.forEach(el => el.classList.remove('fade-out'));
    }, 300);
}

// NAVIGATION
function switchScreen(screenName) {
    Object.values(screens).forEach(s => {
        if (s) {
            s.classList.remove('active');
            setTimeout(() => s.style.display = 'none', 400); 
        }
    });
    setTimeout(() => {
        if (screens[screenName]) {
            screens[screenName].style.display = 'block';
            setTimeout(() => screens[screenName].classList.add('active'), 50);
        }
    }, 400);
}

// ASSESSMENT LOGIC
function renderQuestion() {
    const q = questionsData[currentQuestionIndex];
    document.getElementById('progress-text').innerText = `${String(currentQuestionIndex + 1).padStart(2, '0')} / ${questionsData.length}`;
    document.getElementById('progress-fill').style.width = `${((currentQuestionIndex + 1) / questionsData.length) * 100}%`;
    
    const container = document.getElementById('question-container');
    container.classList.remove('slide-up');
    void container.offsetWidth; 
    container.classList.add('slide-up');

    // Fallback yang aman jika bahasa Inggris belum ada
    document.getElementById('question-text').innerText = (currentLang === 'en' && q.q_en) ? q.q_en : q.q;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        btn.innerText = (currentLang === 'en' && opt.text_en) ? opt.text_en : opt.text;
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

// LOADING & RESULTS
function processResults() {
    switchScreen('loading');
    const counts = {};
    userAnswers.forEach(x => counts[x] = (counts[x] || 0) + 1);
    finalArchetype = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    const loadingTexts = currentLang === 'id' 
        ? ["Oke...", "Lagi nyusun potongan jawabanmu...", "Nyari polanya...", "Sedikit lagi...", "Okay. I think we got something."]
        : ["Alright...", "Piecing your answers together...", "Finding the pattern...", "Almost there...", "Okay. I think we got something."];
    
    let lIndex = 0;
    const lText = document.getElementById('loading-text');
    lText.innerText = loadingTexts[0];
    
    const interval = setInterval(() => {
        lIndex++;
        if(lIndex < loadingTexts.length) {
            lText.innerText = loadingTexts[lIndex];
        } else {
            clearInterval(interval);
            buildResultScreen();
            switchScreen('result');
        }
    }, 1200); 
}

function buildResultScreen() {
    const data = archetypeData[finalArchetype];
    const rCard = document.getElementById('result-card');
    
    rCard.style.backgroundColor = data.theme.bg;
    rCard.style.color = data.theme.text;
    document.documentElement.style.setProperty('--card-accent', data.theme.accent);
    
    document.getElementById('rc-name').innerText = userData.name;
    document.getElementById('rc-archetype').innerText = data.title;
    document.getElementById('rc-quote').innerText = (currentLang === 'en' && data.quote_en) ? `"${data.quote_en}"` : `"${data.quote}"`;
    
    const imgElement = document.getElementById('rc-char-img');
    const fallbackElement = document.getElementById('rc-char-fallback');
    imgElement.src = data.image;
    imgElement.onload = () => { imgElement.style.display = 'block'; fallbackElement.style.display = 'none'; };
    imgElement.onerror = () => { imgElement.style.display = 'none'; fallbackElement.style.display = 'block'; fallbackElement.innerText = data.fallbackEmoji; };

    document.getElementById('stat-dir').innerText = data.stats.dir;
    document.getElementById('stat-act').innerText = data.stats.act;
    document.getElementById('stat-gro').innerText = data.stats.gro;
    
    document.getElementById('qrcode').innerHTML = ""; 
    new QRCode(document.getElementById("qrcode"), {
        text: "https://glittering-sunflower-a860d3.netlify.app/",
        width: 128, height: 128, colorDark: "#000000", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.H
    });

    const insContainer = document.getElementById('insights-container');
    insContainer.innerHTML = '';
    const insights = (currentLang === 'en' && data.insights_en) ? data.insights_en : data.insights;
    insights.forEach(insight => {
        insContainer.innerHTML += `<div class="insight-item mb-4">${insight}</div>`;
    });
}

// INTERACTIVE UPGRADE
function populateUpgrades() {
    const upGrid = document.getElementById('upgrade-selector');
    if (!upGrid) return;
    upGrid.innerHTML = '';
    upgradeOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'upgrade-card';
        div.innerHTML = `<h4>${opt.title}</h4>`;
        div.onclick = () => selectUpgrade(opt);
        upGrid.appendChild(div);
    });
}

function selectUpgrade(opt) {
    document.getElementById('upgrade-selector').style.display = 'none';
    const resultDiv = document.getElementById('upgrade-result');
    resultDiv.classList.remove('hidden');
    document.getElementById('ur-title').innerText = opt.title;
    
    const actionText = (currentLang === 'en' && opt.action_en) ? opt.action_en : opt.action;
    const actionLabel = currentLang === 'en' ? "24-Hour Action" : "Action 24 Jam";
    document.getElementById('ur-action').innerHTML = `<strong>${actionLabel}:</strong> ${actionText}`;
    
    userData.selectedUpgrade = opt.title;
}

// EXPORT & SHARE
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
            url: 'https://glittering-sunflower-a860d3.netlify.app/',
        }).catch(console.error);
    } else {
        alert(currentLang === 'id' ? "Download card-nya lalu share ke story kamu \u2728" : "Download your card and share it on your story \u2728");
    }
}

// DATA COLLECTION (Solusi Anti Gagal)
function submitFeedback() {
    const text = document.getElementById('feedback-text').value;
    const selectedEmojiBtn = document.querySelector('.feedback-emojis button[data-selected="true"]');
    const rating = selectedEmojiBtn ? selectedEmojiBtn.dataset.val : '-';
    
    const btn = document.getElementById('btn-submit-feedback');
    btn.innerText = currentLang === 'id' ? "Menyimpan..." : "Saving...";
    btn.disabled = true;

    const payload = {
        name: userData.name || "-", contact: userData.contact || "-",
        gender: userData.gender || "-", age: userData.age || "-",
        archetype: finalArchetype || "-", selectedUpgrade: userData.selectedUpgrade || "-",
        rating: rating, feedback: text || "-"
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwtrvVgCVW6Agr9iCHfrTKh67uM40msLYu88v9nxdlTk5L_sEnnEcxtfoV378r89lh2/exec';

    // KUNCI UTAMA: text/plain dan TIDAK menggunakan mode: 'no-cors' agar data diterima Google
    fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        btn.innerText = currentLang === 'id' ? "Thanks atas feedbacknya! ✨" : "Thanks for the feedback! ✨";
    }).catch(error => {
        console.error(error);
        btn.innerText = currentLang === 'id' ? "Gagal kirim, tapi santai aja!" : "Failed to send, but no worries!";
        btn.disabled = false;
    });
}
