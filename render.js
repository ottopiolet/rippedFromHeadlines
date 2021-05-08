let score = 0;
let lives = 3;
let actualLives=3;
let keyword;
keywords.sort().forEach(element => {
    $('#keywords').append(`<option>${element}</option>`);
});

const checkAnswer = function(event) {
    let correct = $('#answer').val().toLowerCase() == keyword.toLowerCase();
    if(correct) {
        $('#message').replaceWith(`<div id='message'></div>`);
        $('#message').append(`<h1>Correct!</h1>`);
        score++;
        $('#score').replaceWith(`<div id='score'>Score: ${score}</div>`)
        $('#board').replaceWith(`<div id='board' class='board'></div>`);
        $('#answer').replaceWith(`<input id='answer' list='keywords' name='keywords'></input>`);
        loadQuestion();
        

    }
    else {
        $('#message').replaceWith(`<div id='message'></div>`);
        $('#message').append(`<h1>Try Again</h1>`);
        $('#answer').replaceWith(`<input class='answer' id='answer'></input>`);
        lives--;
        if(lives==0){
            $('#message').replaceWith(`<div id='message'></div>`);
            $('#message').append(`<h1>The correct answer was: ${keyword}</h1>`);
            $('#board').replaceWith(`<div id='board' class='board'></div>`);
            lives=3;
            $(`#life${actualLives}`).remove();
            actualLives--;
            if(actualLives==0) {                
                $('#message').append('<p>Please wait while the song loads...</p>');
                gameOver();
            }
            else {
               loadQuestion();
            }
        }

    }
}

export const gameOver = async function() {
    const result = await axios({
        method: 'GET',
        url: 'https://download-video-youtube1.p.rapidapi.com/mp3/g3jCAyPai2Y',
        params: {etime: '00:01:20', stime: '00:01:05'},
        headers: {
          'x-rapidapi-key': '934eec1660mshcf27d9f91581b8ap1a03a7jsn83b5fc9536a8',
          'x-rapidapi-host': 'download-video-youtube1.p.rapidapi.com'
        }
    });
    let src = result.data.vidInfo[0].dloadUrl;
    $('#message').append(`<audio controls autoplay src=${src}></audio>`);

}

const resetGame = function(event) {
    score = 0;
    lives = 3;
    actualLives=3;
    $('#output').replaceWith(`<div id='output'>
                                <div id='message'></div>
                                <div id='score'>Score: 0</div>
                                <div id='lives' class='columns'>
                                    <div id='life' class='column'>Lives:</div>
                                    <div id='life1' class='column'>
                                        <img class='life' src='check_mark.png'/>
                                    </div>
                                    <div id='life2' class='column'>
                                        <img class='life' src='check_mark.png'/>
                                    </div>
                                    <div id='life3' class='column'>
                                        <img class='life' src='check_mark.png   '/>
                                    </div>
                                </div>
                            </div>`);      
    $('#board').replaceWith(`<div id='board' class='board'></div>`);
    loadQuestion();
}

const giveHint = function(event) {
    $('#message').append(`<h1>_${keyword.substring(1,2)}_____${keyword.substring(keyword.length-1,keyword.length)}</h1>`);
}
const giveUp = function(event) {
    $('#message').replaceWith(`<div id='message'></div>`);
    $('#message').append(`<h1>The correct answer was: ${keyword}</h1>`);
    $('#board').replaceWith(`<div id='board' class='board'></div>`);
    lives=3;
    $(`#life${actualLives}`).remove();
    actualLives--;
    if(actualLives==0) {
        gameOver();
    }
    else {
        loadQuestion();
    }
}

export const loadQuestion = async function() {
    let $board = $('#board');
    let found = false;
    /*const results = await axios({
        method: 'get',
        url: 'https://newsapi.org/v2/everything?apiKey=f77e7d69379d41e08f94964c58f539db&sources=bbc-news&pageSize=100',
    });*/
    let question;
    let titles = result2/*s.data*/.articles.map(item => item.title);    
    while(!found) {
        let rand = Math.floor(Math.random()*keywords.length);
        keyword = keywords[rand];
        let questions = titles.filter(item => item.search(keyword) != -1);
        if(questions.length !=0)
        {
            found= true;
            question = questions[0];    
        }
    }
    let blank = "";
    for (let index = 0; index < keyword.length; index++) {
        blank += "_";
    }
    question = question.replace(keyword, blank);
    $board.append(`<div class='question'>
                       ${question}
                   </div>`);
}

export const loadBoard = function() { 
    loadQuestion();
    $('#answerBox').on('click','.submit', function(event) {
        event.preventDefault();
        checkAnswer(this);
    });
    $('#answerBox').on('click','.reset', function(event) {
        event.preventDefault();
        resetGame(this);
    });
    $('#answerBox').on('click','.hint', function(event) {
        event.preventDefault();
        giveHint(this);
    });
    $('#answerBox').on('click','.giveUp', function(event) {
        event.preventDefault();
        giveUp(this);
    });

};


$(function() {
    loadBoard(); 
});