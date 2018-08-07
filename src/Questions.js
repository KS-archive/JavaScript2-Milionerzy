import _ from 'lodash';
import Toastify from 'toastify-js';
import AudioPlayer from './AudioPlayer';
import Rewards from './Rewards';

class Questions {
  constructor(questions, endGameNotification) {
    this.question = document.querySelector('#question');
    this.answers = {
      a: {
        container: document.querySelector('#a'),
        letter: document.querySelector('#a > span:first-child'),
        content: document.querySelector('#a > span:last-child'),
      },
      b: {
        container: document.querySelector('#b'),
        letter: document.querySelector('#b > span:first-child'),
        content: document.querySelector('#b > span:last-child'),
      },
      c: {
        container: document.querySelector('#c'),
        letter: document.querySelector('#c > span:first-child'),
        content: document.querySelector('#c > span:last-child'),
      },
      d: {
        container: document.querySelector('#d'),
        letter: document.querySelector('#d > span:first-child'),
        content: document.querySelector('#d > span:last-child'),
      },
    };

    this.questionsList = questions;
    this.endGameNotification = endGameNotification;

    this.currentQuestionIndex = 0;
    this.audio = new AudioPlayer();
    this.rewards = new Rewards();
  }

  askQuestion = () => {
    this.currentQuestion = this.questionsList[this.currentQuestionIndex];

    this.question.innerText = this.currentQuestion.question;
    Object.keys(this.answers).map(key => {
      this.answers[key].content.innerText = this.currentQuestion[key];
      this.answers[key].container.addEventListener('click', this.selectAnswer);
    });

    this.currentQuestionIndex++;
    this.rewards.highlight(this.currentQuestionIndex);
    this.audio.playBackgroundMusic();
  };

  selectAnswer = e => {
    if (e.currentTarget.classList.contains('answerChecked')) {
      _.map(this.answers, answer =>
        answer.container.removeEventListener('click', this.selectAnswer),
      );

      this.checkAnswer(e.currentTarget.id);
    } else {
      this.audio.startChoice();
      _.map(this.answers, answer => answer.container.setAttribute('class', 'answer'));
      e.currentTarget.classList.add('answerChecked');
    }
  };

  checkAnswer = id => {
    this.audio.endChoice();

    const correctAnswer = this.answers[this.currentQuestion.correctAns];
    correctAnswer.container.classList.remove('answerChecked');
    correctAnswer.container.classList.add('answerCorrect');

    if (id === this.currentQuestion.correctAns) {
      if (this.currentQuestionIndex !== 12) {
        this.audio.play('correctAns');
        window.setTimeout(this.prepareToNextQuestion, 7500);
      } else {
        this.audio.play('milion');
        this.endGameNotification('Brawo! Wygrałeś 1 000 000 zł!');
      }
    } else {
      this.audio.play('badAns');
      this.endGameNotification('Niestaty tym razem przegrałeś');
    }
  };

  prepareToNextQuestion = () => {
    _.map(this.answers, answer => {
      answer.container.setAttribute('class', 'answer');
      answer.letter.style.opacity = 1;
      answer.content.style.opacity = 1;
    });
    this.askQuestion();
  };

  getBadAnswers = () => _.omit(this.answers, this.currentQuestion.correctAns);
}

export default Questions;
