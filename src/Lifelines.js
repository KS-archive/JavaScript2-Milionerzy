class Lifelines {
  constructor() {
    const lifelinesList = document.querySelectorAll('.lifeline');

    this.lifelines = {
      fiftyFifty: lifelinesList[0],
      askTheAudience: lifelinesList[1],
      phoneAFriend: lifelinesList[2],
    };
  }
}

export default Lifelines;
