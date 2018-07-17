class Questions {
  constructor() {
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
  }
}

export default Questions;
