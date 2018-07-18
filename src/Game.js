import axios from 'axios';
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
  }

  start = url => {
    axios.get(url).then(res => {
      this.questions = new Questions(res.data);
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
}

export default Game;
