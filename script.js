document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    const playPauseBtn = document.getElementById("play-pause-btn");

    // Variable para rastrear si la música está reproduciéndose
    let isPlaying = false;

    // Función para alternar entre reproducir y pausar
    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = "🎵 ▶️ Reproducir Música";
        } else {
            audio.play();
            playPauseBtn.textContent = "🎵 ⏸️ Pausar Música";
        }
        isPlaying = !isPlaying;
    });
});
