// Variables globales para el estado del reproductor
let isPlaying = false;
let currentSongIndex = -1;
let currentTime = 0;
let totalTime = 225; // 3:45 en segundos (canción de ejemplo)
let intervalId = null;

// Datos de las canciones
const songs = [
    { title: "Midnight Dreams", artist: "The Synthwave Collective", duration: 225 },
    { title: "Neon Lights", artist: "Electric Pulse", duration: 252 },
    { title: "Digital Horizon", artist: "Cyber Beats", duration: 208 },
    { title: "Lost in Space", artist: "Cosmic Vibes", duration: 301 },
    { title: "Retro Wave", artist: "80s Revival", duration: 235 },
    { title: "Starlight Symphony", artist: "The Synthwave Collective", duration: 273 }
];

// Elementos del DOM
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const currentTitleEl = document.getElementById('currentTitle');
const currentArtistEl = document.getElementById('currentArtist');
const volumeBar = document.getElementById('volumeBar');
const volumeFill = document.getElementById('volumeFill');
const songItems = document.querySelectorAll('.song-item');

// Función para formatear el tiempo en minutos:segundos
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Función para reproducir una canción
function playSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    
    // Actualizar información de la canción actual
    currentTitleEl.textContent = song.title;
    currentArtistEl.textContent = song.artist;
    totalTime = song.duration;
    totalTimeEl.textContent = formatTime(totalTime);
    currentTime = 0;
    
    // Actualizar estado visual de las canciones
    songItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('playing');
        } else {
            item.classList.remove('playing');
        }
    });
    
    // Iniciar reproducción
    play();
}

// Función para reproducir/pausar
function togglePlay() {
    if (currentSongIndex === -1) {
        playSong(0);
    } else {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }
}

// Función para reproducir
function play() {
    isPlaying = true;
    playBtn.textContent = '⏸';
    
    // Simular progreso de la canción
    intervalId = setInterval(() => {
        currentTime += 0.1;
        if (currentTime >= totalTime) {
            currentTime = totalTime;
            pause();
            // Aquí podrías avanzar a la siguiente canción automáticamente
        }
        updateProgress();
    }, 100);
}

// Función para pausar
function pause() {
    isPlaying = false;
    playBtn.textContent = '▶';
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// Función para actualizar la barra de progreso
function updateProgress() {
    const percentage = (currentTime / totalTime) * 100;
    progressFill.style.width = `${percentage}%`;
    currentTimeEl.textContent = formatTime(currentTime);
}

// Función para canción anterior
function previousSong() {
    if (currentSongIndex > 0) {
        playSong(currentSongIndex - 1);
    }
}

// Función para siguiente canción
function nextSong() {
    if (currentSongIndex < songs.length - 1) {
        playSong(currentSongIndex + 1);
    }
}

// Event listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', previousSong);
nextBtn.addEventListener('click', nextSong);

// Click en la barra de progreso
progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    currentTime = percentage * totalTime;
    updateProgress();
});

// Click en las canciones
songItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        playSong(index);
    });
});

// Click en la barra de volumen
volumeBar.addEventListener('click', (e) => {
    const rect = volumeBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    volumeFill.style.width = `${percentage}%`;
});