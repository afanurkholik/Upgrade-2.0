// STATE MANAGEMENT
let userData = { name: '', contact: '', gender: '', age: '', selectedUpgrade: '' };
let currentQuestionIndex = 0;
let userAnswers = []; // array of types selected
let finalArchetype = '';

// DOM ELEMENTS
const screens = {
    onboarding: document.getElementById('screen-onboarding'),
    assessment: document.getElementById('screen-assessment'),
    loading: document.getElementById('screen-loading'),
    result: document.getElementById('screen-result')
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Menangkap data dari halaman pertama dan memulai assessment
    document.getElementById('onboarding-form').addEventListener('submit', function(e) {
        e.preventDefault();
        userData.name = document.getElementById('user-name').value;
        userData.contact = document.getElementById('user-contact').value;
        userData.gender = document.getElementById('user-gender').value;
        userData.age = document.getElementById('user-age').value;
        
        switchScreen('assessment');
        renderQuestion();
    });

    // Populate Upgrade Options
    const upGrid = document.getElementById('upgrade-selector');
    upgradeOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'upgrade-card';
        div.innerHTML = `<h4>${opt.title}</h4>`;
        div.onclick = () => selectUpgrade(opt);
        upGrid.appendChild(div);
    });

    // Handle Feedback Selection
    const emojis = document.querySelectorAll('.feedback-emojis button');
    emojis.forEach(btn => {
        btn.onclick = () => {
            emojis.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            btn.dataset.selected = 'true';
        }
    });
});

// NAVIGATION
function switchScreen(screenName) {
    Object.values(screens).forEach(s => {
        s.classList.remove('active');
        setTimeout(() => s.style.display = 'none', 400); // sync with css transition
    });
    
    setTimeout(() => {
        screens[screenName].style.display = 'block';
        setTimeout(() => screens[screenName].classList.add('active'), 50);
    }, 400);
}

// ASSESSMENT LOGIC
function renderQuestion() {
    const q = questionsData[currentQuestionIndex];
    
    // Update Progress
    document.getElementById('progress-text').innerText = `${String(currentQuestionIndex + 1).padStart(2, '0')} / ${questionsData.length}`;
    document.getElementById('progress-fill').style.width = `${((currentQuestionIndex + 1) / questionsData.length) * 100}%`;
    
    // Animate container
    const container = document.getElementById('question-container');
    container.classList.remove('slide-up');
    void container.offsetWidth; // trigger reflow
    container.classList.add('slide-up');

    // Render Q & A
    document.getElementById('question-text').innerText = q.q;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        btn.innerText = opt.text;
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
    
    // Calculate Mode Type
    const counts = {};
    userAnswers.forEach(x => counts[x] = (counts[x] || 0) + 1);
    finalArchetype = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    // Loading Microcopy Sequence
    const loadingTexts = [
        "Oke...",
        "Lagi nyusun potongan-potongan jawabanmu...",
        "Nyari polanya...",
        "Sedikit lagi...",
        "Okay. I think we got something."
    ];
    
    let lIndex = 0;
    const lText = document.getElementById('loading-text');
    
    const interval = setInterval(() => {
        lIndex++;
        if(lIndex < loadingTexts.length) {
            lText.innerText = loadingTexts[lIndex];
        } else {
            clearInterval(interval);
            buildResultScreen();
            switchScreen('result');
        }
    }, 1200); // ~5-6 seconds total
}

function buildResultScreen() {
    const data = archetypeData[finalArchetype];
    
    // Card Styling & Content
    const rCard = document.getElementById('result-card');
    rCard.style.backgroundColor = data.theme.bg;
    rCard.style.color = data.theme.text;
    document.documentElement.style.setProperty('--card-accent', data.theme.accent);
    
    document.getElementById('rc-name').innerText = userData.name;
    document.getElementById('rc-archetype').innerText = data.title;
    document.getElementById('rc-quote').innerText = `"${data.quote}"`;
    
    // Character Image/Fallback
    const imgElement = document.getElementById('rc-char-img');
    const fallbackElement = document.getElementById('rc-char-fallback');
    
    imgElement.src = data.image;
    imgElement.onload = () => {
        imgElement.style.display = 'block';
        fallbackElement.style.display = 'none';
    };
    imgElement.onerror = () => {
        imgElement.style.display = 'none';
        fallbackElement.style.display = 'block';
        fallbackElement.innerText = data.fallbackEmoji;
    };

    // Stats
    document.getElementById('stat-dir').innerText = data.stats.dir;
    document.getElementById('stat-act').innerText = data.stats.act;
    document.getElementById('stat-gro').innerText = data.stats.gro;
    
    // Generate QR
    document.getElementById('qrcode').innerHTML = ""; // clear previous
    new QRCode(document.getElementById("qrcode"), {
        text: "https://glittering-sunflower-a860d3.netlify.app/",
        width: 128, height: 128, colorDark : "#000000", colorLight : "#ffffff", correctLevel : QRCode.CorrectLevel.H
    });

    // Insights
    const insContainer = document.getElementById('insights-container');
    insContainer.innerHTML = '';
    data.insights.forEach(insight => {
        insContainer.innerHTML += `<div class="insight-item mb-4">${insight}</div>`;
    });
}

// INTERACTIVE UPGRADE
function selectUpgrade(opt) {
    document.getElementById('upgrade-selector').style.display = 'none';
    const resultDiv = document.getElementById('upgrade-result');
    resultDiv.classList.remove('hidden');
    
    document.getElementById('ur-title').innerText = opt.title;
    document.getElementById('ur-action').innerHTML = `<strong>Action 24 Jam:</strong> ${opt.action}`;
    
    userData.selectedUpgrade = opt.title;
}

// EXPORT & SHARE
function downloadCard() {
    const btn = document.querySelector('button[onclick="downloadCard()"]');
    btn.innerText = "Processing...";
    
    const card = document.getElementById('capture-area');
    html2canvas(card, { scale: 3, useCORS: true, backgroundColor: null }).then(canvas => {
        const link = document.createElement('a');
        link.download = `walik-labs-${userData.name.toLowerCase()}-upgrade-2.0.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        btn.innerText = "Download My Card \u2193";
    });
}

function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: 'Upgrade Yourself 2.0 | Walik Labs',
            text: `Ternyata aku adalah ${archetypeData[finalArchetype].title}. Yuk cek versi 2.0 kamu di Walik Labs!`,
            url: 'https://glittering-sunflower-a860d3.netlify.app/',
        }).catch(console.error);
    } else {
        alert("Download card-nya lalu share ke story kamu \u2728");
    }
}

// DATA COLLECTION (Google Sheets Integration)
function submitFeedback() {
    const text = document.getElementById('feedback-text').value;
    const selectedEmojiBtn = document.querySelector('.feedback-emojis button[data-selected="true"]');
    const rating = selectedEmojiBtn ? selectedEmojiBtn.dataset.val : '-';
    
    const btn = document.getElementById('btn-submit-feedback');
    btn.innerText = "Menyimpan...";
    btn.disabled = true;

    // Menangkap semua data dari halaman pertama dan hasil assessment
    const payload = {
        name: userData.name || "-",
        contact: userData.contact || "-",
        gender: userData.gender || "-",
        age: userData.age || "-",
        archetype: finalArchetype || "-",
        selectedUpgrade: userData.selectedUpgrade || "-",
        rating: rating,
        feedback: text || "-"
    };

    // Ini URL API Google Sheets kamu
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwtrvVgCVW6Agr9iCHfrTKh67uM40msLYu88v9nxdlTk5L_sEnnEcxtfoV378r89lh2/exec';

    // Menggunakan mode text/plain agar tidak diblokir browser
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        btn.innerText = "Thanks atas feedbacknya! ✨";
    })
    .catch(error => {
        console.error('Error:', error);
        btn.innerText = "Gagal kirim, tapi santai aja!";
        btn.disabled = false;
    });
}
