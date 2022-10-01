function audio_seikai() {
    document.getElementById('btn_audio_seikai').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio_seikai').play(); //クリックしたら音を再生
}

function audio_huseikai() {
    document.getElementById('btn_audio_huseikai').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio_huseikai').play(); //クリックしたら音を再生
}


const quiz = [
    {
      question: 'ひろくんのようちえんはどこ？',
      answers: [ 'わかば', 'ひかりのこ', 'こばやし', 'たけのこ'],
      correct: 'こばやし'
    }, {
      question: 'ゆりちゃんのすきな公園は？',
      answers: [ 'みなみはねざわ', 'プリン', 'えんどう', 'じどう'],
      correct: 'プリン'
    }, {
      question: 'ひろくんのすきなものは？',
      answers: [ 'すべりだい', 'しんごうき', 'やま', 'しんかんせん'],
      correct: 'しんごうき'
    }
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