'use strict';

let querySelector = document.querySelector.bind(document);

const clock = querySelector('.js-clock');
const circle = querySelector('.js-circle');
const svgImage = querySelector('.js-svg-image');
const songTitle = querySelector('.js-song-title');
const singerTitle = querySelector('.js-singer-title');
let seconds = '';
let duration = '';
let timeline = [];

async function stream() {
  const url = 'https://api.powergroup.com.tr/Channels/powerFM/?appRef=iPowerWebV4&qualityIndex=0&lang=tr&apiVersion=28';
  await fetch(url).then((response) => {
    if (response.ok) return response.json();
  }).then((data) => {
    timeline = data.response.timeline;
    if (timeline[0].hide_counter) {
      clock.innerHTML = '....'
      songTitle.innerHTML = 'Power FM';
      singerTitle.innerHTML = 'Playing advertisement';
      svgImage.setAttribute('xlink:href', data.response.channel_logo_medium);
    } else {
      seconds = timeline[0].remainingSeconds;
      duration = timeline[0].duration;
      svgImage.setAttribute('xlink:href', timeline[0].albumCoverIMG);
      songTitle.innerHTML = timeline[0].songTitle;
      songTitle.setAttribute('title', songTitle.innerHTML);
      singerTitle.innerHTML = timeline[0].artistTitle;
      singerTitle.setAttribute('title', singerTitle.innerHTML);
    }
  }).catch((error) => {
    console.error(`Upps ${error} went wrong!`);
  });
}

stream();

const playBtn = document.getElementById('js-btn-play');
const pauseBtn = document.getElementById('js-btn-pause');
const audioPlayer = document.getElementById('js-audio-player');

function playBtnClickEvent() {
  nextBtn.removeAttribute('disabled');
  if (playBtn.classList.contains('display')) {
    playBtn.classList.remove('display');
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    pauseBtn.classList.add('display');
  }
}

function pauseBtnClickEvent() {
  if (pauseBtn.classList.contains('display')) {
    pauseBtn.classList.remove('display');
    pauseBtn.classList.add('hidden');
    playBtn.classList.remove('hidden');
    playBtn.classList.add('display');
  }
}

function countdownCallback(){
  if (!hideCounter) {
    clock.innerHTML = new Date((seconds--) * 1000).toISOString().substr(14, 5);
    circle.setAttribute('stroke-dashoffset', (seconds * Math.floor(732 / duration)));
    if (seconds === 0) stream();
  }
}

let countdown;

playBtn.addEventListener('click', () => {
  audioPlayer.play();
  playBtnClickEvent();
  stream();
  countdown = setInterval(countdownCallback, 1000);
});

pauseBtn.addEventListener('click', () => {
  audioPlayer.pause();
  pauseBtnClickEvent();
  clearInterval(countdown);
});

const nextBtn = document.getElementById('js-btn-next');
const prevBtn = document.getElementById('js-btn-prev');

nextBtn.addEventListener('click', () => {
  clock.innerHTML = new Date((timeline[1].duration) * 1000).toISOString().substr(14, 5);
  svgImage.setAttribute('xlink:href', timeline[1].albumCoverIMG);
  songTitle.innerHTML = timeline[1].songTitle;
  songTitle.setAttribute('title', songTitle.innerHTML);
  singerTitle.innerHTML = timeline[1].artistTitle;
  singerTitle.setAttribute('title', singerTitle.innerHTML);
  circle.setAttribute('stroke-dashoffset', 0);
  prevBtn.removeAttribute('disabled');
  nextBtn.setAttribute('disabled', 'disabled');
  playBtn.setAttribute('disabled', 'disabled');
  pauseBtn.setAttribute('disabled', 'disabled');
  clearInterval(countdown);
});

prevBtn.addEventListener('click', () => {
  stream();
  countdown = setInterval(countdownCallback, 1000);
  nextBtn.removeAttribute('disabled');
  playBtn.removeAttribute('disabled');
  pauseBtn.removeAttribute('disabled');
  prevBtn.setAttribute('disabled', 'disabled');
});
