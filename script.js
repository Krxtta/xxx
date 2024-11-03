// แสดงข้อความอวยพรทีละข้อความ
let currentWishIndex = 0;

function showNextWish() {
    const wishes = document.querySelectorAll('.wish');
    wishes.forEach((wish, index) => {
        wish.style.display = index === currentWishIndex ? 'block' : 'none';
    });
    currentWishIndex = (currentWishIndex + 1) % wishes.length;
}

setInterval(showNextWish, 3000); // แสดงข้อความทุก 3 วินาที

// ฟังก์ชันแสดงของขวัญ
function revealGift() {
    document.getElementById('gift').style.display = 'block';
    document.querySelector('.gif[alt="ของขวัญ"]').style.display = 'block';
}

// ฟังก์ชันเล่น/หยุดเพลงพื้นหลัง
function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
