import AudioPlayer from './AudioPlayer';

class Lifelines {
  constructor() {
    const lifelinesList = document.querySelectorAll('.lifeline');

    this.lifelines = {
      fiftyFifty: lifelinesList[0],
      askTheAudience: lifelinesList[1],
      phoneAFriend: lifelinesList[2],
    };

    this.audio = new AudioPlayer();
  }

  initialize = () => {
    Object.keys(this.lifelines).map((key, i) => {
      setTimeout(() => {
        this.lifelines[key].classList.add('showed');
        this.audio.play('loadLifeline', key);
      }, i * 1000);
    });
  };
}

export default Lifelines;
