import _ from 'lodash';
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

  initialize = questions => {
    this.questions = questions;

    Object.keys(this.lifelines).map((key, i) => {
      setTimeout(() => {
        this.lifelines[key].classList.add('showed');
        this.audio.play('loadLifeline', key);
      }, i * 1000);
    });

    this.lifelines.fiftyFifty.addEventListener('click', this.fiftyFifty);
  };

  fiftyFifty = e => {
    e.currentTarget.removeEventListener('click', this.fiftyFifty);
    e.currentTarget.setAttribute('src', 'img/circles/circle1-not.png');
    document.querySelector(`.lifeline:nth-child(1):hover`).style.width = '25%';
    document.querySelector(`.lifeline:nth-child(1):hover`).style.cursor = 'default';
    this.audio.play('fiftyFifty');

    let badAnswers = this.questions.getBadAnswers();
    badAnswers = _.shuffle(badAnswers);
    badAnswers = _.take(badAnswers, 2);
    _.map(badAnswers, answer => {
      answer.letter.style.opacity = 0;
      answer.content.style.opacity = 0;
    });
  };
}

export default Lifelines;

// const { circles, fiftyFifty, askTheAudience, phoneAFriend } = this.lifelines;
// circles[0].addEventListener('click', e => fiftyFifty(e, this.questions));
// circles[1].addEventListener('click', e => askTheAudience(e, this.questions));
// circles[2].addEventListener('click', phoneAFriend);
