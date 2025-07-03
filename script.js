// --- カウントダウンタイマー ---
function countdownTimer() {
    // 旅行の開始日時を設定 (年, 月-1, 日, 時, 分, 秒)
    const tripDate = new Date(2025, 6, 20, 10, 0, 0).getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = tripDate - now;

        // 時間の計算
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // HTMLに表示
        const timerElement = document.getElementById("countdown-timer");
        if (timerElement) {
             if (distance < 0) {
                clearInterval(timer);
                timerElement.innerHTML = "旅行を楽しんで！🎉";
            } else {
                timerElement.innerHTML = `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
            }
        }
    }, 1000);
}

// ページが読み込まれたら実行