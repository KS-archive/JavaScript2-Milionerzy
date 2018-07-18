import _ from 'lodash';

class AudioPlayer {
  constructor() {
    this.sounds = {
      fiftyFifty: document.querySelector('#fifty-fifty'),
      askTheAudience: [
        document.querySelector('#audience1'),
        document.querySelector('#audience2'),
        document.querySelector('#audience3'),
      ],
      phoneAFriend: [
        document.querySelector('#phone1'),
        document.querySelector('#phone2'),
        document.querySelector('#phone3'),
      ],
      badAns: document.querySelector('#bad_ans'),
      correctAns: document.querySelector('#correct_ans'),
      loadLifeline: {
        fiftyFifty: document.querySelector('#load_lifeline1'),
        askTheAudience: document.querySelector('#load_lifeline2'),
        phoneAFriend: document.querySelector('#load_lifeline3'),
      },
      choice: {
        start: document.querySelector('#choice_start'),
        loop: document.querySelector('#choice_loop'),
      },
      milion: document.querySelector('#milion'),
      resignation: document.querySelector('#resignation'),
      background: document.querySelectorAll('.background'),
    };

    this.currentBackground = this.sounds.background[0];
  }

  play = (name, key) => {
    if (key || key === 0) {
      this.sounds[name][key].play();
    } else {
      this.sounds[name].play();
    }
  };

  playBackgroundMusic = () => {
    const randomNumber = _.random(2);
    this.currentBackground = this.sounds.background[randomNumber];

    this.currentBackground.loop = true;
    this.currentBackground.play();
  };

  pauseBackgroundMusic = () => {
    this.currentBackground.pause();
  };

  startChoice = () => {
    this.pauseBackgroundMusic();
    this.sounds.choice.start.play();
    window.setTimeout(() => {
      if (this.sounds.correctAns.paused && this.sounds.badAns.paused) {
        this.sounds.choice.loop.loop = true;
        this.sounds.choice.loop.play();
      }
    }, 2500);
  };

  endChoice = () => {
    this.sounds.choice.start.pause();
    this.sounds.choice.loop.pause();

    const interval = setInterval(() => {
      if (!this.sounds.choice.loop.paused) {
        this.sounds.choice.loop.pause();
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 2500);
  };
}

export default AudioPlayer;
