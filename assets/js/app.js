function audio_seikai() {
    document.getElementById('btn_audio_seikai').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio_seikai').play(); //クリックしたら音を再生
}

function audio_huseikai() {
    document.getElementById('btn_audio_huseikai').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio_huseikai').play(); //クリックしたら音を再生
}

function audio_bgm() {
    document.getElementById('btn_audio_bgm').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio_bgm').play(); //クリックしたら音を再生
}



const quiz = [
    {
      question: '漫画にでているキャラクターは？',
      answers: [ 'ドラえもん', 'ひろくん', 'アンパンマン', 'ジャイアン'],
      correct: 'ひろくん'
    }, {
      question: 'ひろくんの星空の定番曲はなに？',
      answers: [ 'トイレたんたんシンタンシー', 'ツーソン', 'パーピターはパピ、パーピター', 'トトロ'],
      correct: 'トイレたんたんシンタンシー'
    }, {
      question: 'ゆっちゃんの定番曲は？',
      answers: [ 'タラリトーレ', '旅人のうた', 'トトロ', 'ツーソン'],
      correct: 'タラリトーレ'
    }, {
        question: 'ゆりちゃんの好きな教科は？',
        answers: [ 'さんすう', 'こくご', 'せいかつ', 'ずこう'],
        correct: 'こくご'
    }, {
        question: 'ひろくんのすきな食べ物は？',
        answers: [ 'なっとう', 'りんご', 'みかん', 'あーぼ'],
        correct: 'なっとう'
    }, {
        question: 'ゴーゴーひろ君が？',
        answers: [ 'わらってるよ', 'ないてるよ', 'おこったよ', 'すねてるよ'],
        correct: 'ないてるよ'
    },
  ];
  




const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName("button")
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById("js-question").textContent =  quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    // $button[0].textContent =  answer[0];
    // $button[1].textContent =  answer[1];
    // $button[2].textContent =  answer[2];
    // $button[3].textContent =  answer[3];
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent =  quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();


//ボタンをクリックしたら正誤判定
const clickHndler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        audio_seikai();
        window.alert('せいかい');
        if(score === 5) {
            audio_bgm();
            document.getElementById("picture_1").src="./assets/image/gogo-hirokun.png";
        } else {  
        };
        score++;
    } else {
        audio_huseikai();
        window.alert('ざんねん');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert("おわり！！　あなたのせいかいは" + quizLength + "問中" + score +"点です" )
    }
};

let handlerIndex = 0;


while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {
    clickHndler(e);
    });
    handlerIndex++;
}



// $button[0].addEventListener("click", (e) => {
//     clickHndler(e);
// });
// $button[1].addEventListener("click", (e) => {
//     clickHndler(e);
// });
// $button[2].addEventListener("click", (e) => {
//     clickHndler(e);
// });
// $button[3].addEventListener("click", (e) => {
//     clickHndler(e);
// });