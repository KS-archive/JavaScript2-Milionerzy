import AudioPlayer from './AudioPlayer';
import Lifelines from './Lifelines';
import Questions from './Questions';
import Rewards from './Rewards';

class Game {
    constructor(questions) {
        this.gameArea = document.querySelector('.gameArea');
        this.endGame = document.querySelector('.endGame');

        this.audio = new AudioPlayer();
        this.lifelines = new Lifelines();
        this.rewards = new Rewards();
        this.questions = new Questions(questions);
    }

    start = () => {
        console.log('Game started!');
    };
}

export default Game;
