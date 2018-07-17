const gameArea = document.querySelector('.gameArea');
const question = document.querySelector('#question');
const answers = {
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

const circlesList = document.querySelectorAll('.lifeline');

const circles = {
    fiftyFifty: circlesList[0],
    askTheAudience: circlesList[1],
    phoneAFriend: circlesList[2],
};

const rewardLines = document.querySelectorAll('.rewardLine');

const endGame = document.querySelector('.endGame');

const audio = {
    fiftyFifty: document.querySelector('#fifty-fifty'),
    askTheAudience: [
        document.querySelector('#audience1'),
        document.querySelector('#audience2'),
        document.querySelector('#audience3'),
    ],
    phoneAFriend: [
        document.querySelector('#phone1'),
        document.querySelector('#phone2'),
        document.querySelector('#phone3'),
    ],
    badAns: document.querySelector('#bad_ans'),
    correctAns: document.querySelector('#correct_ans'),
    loadLifeline: {
        fiftyFifty: document.querySelector('#load_lifeline1'),
        askTheAudience: document.querySelector('#load_lifeline2'),
        phoneAFriend: document.querySelector('#load_lifeline3'),
    },
    choice: {
        start: document.querySelector('#choice_start'),
        loop: document.querySelector('#choice_loop'),
    },
    milion: document.querySelector('#milion'),
    resignation: document.querySelector('#resignation'),
    background: document.querySelectorAll('.tlo'),
}
