let keys = document.querySelectorAll('.keys');
let pianoSound = new Audio('./audio/piano/key1.mp3');

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        let clickedKey = e.target.dataset.key;
        pianoSound.src = `./audio/piano/key${clickedKey}.mp3`;
        pianoSound.play();

let pressedKey = e.target;

    pressedKey.classList.add("active"); 
    setTimeout(() => { 
    pressedKey.classList.remove("active");
    }, 150);
    })
})

//Piano made with https://www.geeksforgeeks.org/build-a-piano-using-html-css-and-javascript/ and https://www.codingnepalweb.com/playable-piano-html-css-javascript/

let card1 = document.querySelector('#card1');
let music1 = document.getElementById('track1');

card1.addEventListener('click', function() {
    card1.classList.toggle('flipped');
    
    if (card1.classList.contains('flipped')) {
        music1.play(); 
    } else {
    music1.pause();
    music1.currentTime = 0;
    }
});

let card2 = document.querySelector('#card2');
let music2 = document.getElementById('track2');

card2.addEventListener('click', function() {
    card2.classList.toggle('flipped');
    
    if (card2.classList.contains('flipped')) {
        music2.play(); 
    } else {
        music2.pause(); 
        music2.currentTime = 0;
    }
});

let card3 = document.querySelector('#card3');
let music3 = document.getElementById('track3');

card3.addEventListener('click', function() {
    card3.classList.toggle('flipped');
    
    if (card3.classList.contains('flipped')) {
        music3.play(); 
    } else {
        music3.pause(); 
        music3.currentTime = 0;
    }
});

let card4 = document.querySelector('#card4');
let music4 = document.getElementById('track4');

card4.addEventListener('click', function() {
    card4.classList.toggle('flipped');
    
    if (card4.classList.contains('flipped')) {
        music4.play(); 
    } else {
        music4.pause(); 
        music4.currentTime = 0;
    }
});

let card5 = document.querySelector('#card5');
let music5 = document.getElementById('track5');

card5.addEventListener('click', function() {
    card5.classList.toggle('flipped');
    
    if (card5.classList.contains('flipped')) {
        music5.play(); 
    } else {
        music5.pause(); 
        music5.currentTime = 0;
    }
});

//Music flip cards made with https://www.w3schools.com/howto/howto_css_flip_card.asp and JS instruction from class
