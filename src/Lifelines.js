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
    this.lifelines.askTheAudience.addEventListener('click', this.askTheAudience);
  };

  fiftyFifty = e => {
    this.deactivateLifeline(e, this.fiftyFifty, 1);
    this.audio.play('fiftyFifty');

    let badAnswers = this.questions.getBadAnswers();
    badAnswers = _.shuffle(badAnswers);
    badAnswers = _.take(badAnswers, 2);
    _.map(badAnswers, answer => {
      answer.letter.style.opacity = 0;
      answer.content.style.opacity = 0;
    });
  };

  askTheAudience = e => {
    this.deactivateLifeline(e, this.askTheAudience, 2);
    this.audio.playAudience(0, 1000, () => {
      this.audio.playAudience(1, 2000, () => {
        this.audio.playAudience(2, 300, () => {
          _.map(this.questions.answers, (answer, key) => {
            answer.content.innerText +=
              key === this.questions.currentQuestion.correctAns ? ' 100%' : ' 0%';
          });
        });
      });
    });
  };

  deactivateLifeline = (e, func, number) => {
    e.currentTarget.removeEventListener('click', func);
    e.currentTarget.setAttribute('src', `img/circles/circle${number}-not.png`);
    document.querySelector(`.lifeline:nth-child(${number}):hover`).style.width = '25%';
    document.querySelector(`.lifeline:nth-child(${number}):hover`).style.cursor = 'default';
  };
}

export default Lifelines;
