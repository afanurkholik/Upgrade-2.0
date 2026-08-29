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

    // PASTIKAN URL INI BENAR MILIKMU
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwtrvVgCVW6Agr9iCHfrTKh67uM40msLYu88v9nxdlTk5L_sEnnEcxtfoV378r89lh2/exec';

    // mode 'no-cors' adalah kunci anti-gagal untuk Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(() => {
        btn.innerText = "Thanks atas feedbacknya! ✨";
    })
    .catch(error => {
        console.error('Error:', error);
        btn.innerText = "Gagal kirim, tapi santai aja!";
        btn.disabled = false;
    });
}
