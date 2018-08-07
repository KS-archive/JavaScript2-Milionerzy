import axios from 'axios';
import Toastify from 'toastify-js';
import AudioPlayer from './AudioPlayer';
import Lifelines from './Lifelines';
import Questions from './Questions';
import Rewards from './Rewards';

class Game {
  constructor() {
    this.gameArea = document.querySelector('.gameArea');
    this.endGame = document.querySelector('.endGame');

    this.audio = new AudioPlayer();
    this.lifelines = new Lifelines();
    this.rewards = new Rewards();

    this.endGame.addEventListener('click', () => {
      this.audio.pauseAllAudio();
      this.audio.play('resignation');

      const money = document.querySelector('.rewardActualLine .reward').innerText;
      this.endGameNotification(`Zakończyłeś grę z kwotą ${money}. Gratulacje!`);
    });
  }

  start = url => {
    axios.get(url).then(res => {
      this.questions = new Questions(res.data, this.endGameNotification);
      this.lifelines.initialize(this.questions);
      this.questions.askQuestion();
    });
  };

  //   start = async url => {
  //     const res = await axios.get(url);
  //     this.questions = new Questions(res.data);
  //     this.lifelines.initialize();
  //     this.questions.askQuestion();
  //   };

  endGameNotification = text => {
    document.querySelector('html').style['pointer-events'] = 'none';

    Toastify({
      text,
      duration: 10000,
      close: true,
      gravity: 'top',
      positionLeft: true,
      backgroundColor: 'linear-gradient(to right, #0C175F, #0C2A7F)',
    }).showToast();
  };
}

export default Game;
