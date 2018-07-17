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
    this.currentBackground.loop = false;
    this.currentBackground.pause();

    const randomNumber = _.random(2);
    this.currentBackground = this.sounds.background[randomNumber];

    this.currentBackground.loop = true;
    this.currentBackground.play();
  };
}

export default AudioPlayer;
