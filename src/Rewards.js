class Rewards {
  constructor() {
    this.rewardLines = document.querySelectorAll('.rewardLine');
    this.points = document.querySelectorAll('.point');
  }

  highlight = questionNumber => {
    if (questionNumber > 1) {
      this.rewardLines[12 - questionNumber + 1].classList.remove('rewardActualLine');
    }

    this.rewardLines[12 - questionNumber].classList.add('rewardActualLine');
    this.points[12 - questionNumber].style.opacity = 1;
  };
}

export default Rewards;
