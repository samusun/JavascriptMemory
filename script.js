let newDiv = [];
let theMemory;
let images = ["cat", "dog", "giraffe", "bird", "panda", "dolphin", "cat", "dog", "giraffe", "bird", "panda", "dolphin"];
let newArray = [];
let tryOne = true;
let answer1;
let number;
let counter = 0;
let startTime = 60;
let timer;
let timeLeft = startTime;
let highScore = 20;
let gamePlaying = true;
let cleanArray;

document.querySelector("#record").innerHTML = `Highscore: ${highScore}`

function gameOver() {
    timeLeft = 0;
    document.querySelector('#timer').innerHTML = "00"
    clearInterval(timer);

    for (let i = 0; i < 12; i++) {
        document.querySelector("#newDiv" + [i]).remove();
    }
    for (let i = 0; i < 12; i++) {
        newDiv[i] = document.createElement("img");
        newDiv[i].id = "newDiv" + i;
        newDiv[i].src = `pics/${cleanArray[i]}.jpg`;
        document.getElementById("diver").appendChild(newDiv[i]);
        oldDiv = cleanArray;
    }
}

function updateTimer() {
    timeLeft = timeLeft - 1;
    if (gamePlaying) {
        if (timeLeft >= 0)
            document.querySelector('#timer').innerHTML = timeLeft;
        else {
            gameOver();
        }
    }
}

function start() {
    gamePlaying = true;
    timer = setInterval(updateTimer, 1000);
    timeLeft = startTime;
    updateTimer();
}

for (let i = images.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * 900)
    newArray[i * j] = images[i];
}
cleanArray = newArray.filter(function() { return true });



for (let i = 0; i < 12; i++) {
    newDiv[i] = document.createElement("img");
    newDiv[i].id = "newDiv" + i;
    newDiv[i].src = `pics/${cleanArray[i]}.jpg`;
    document.getElementById("diver").appendChild(newDiv[i]);
    oldDiv = cleanArray;
}


document.querySelector("#btnStart").addEventListener("click", function() {

    counter = 0;
    console.log(counter);
    tryOne = true;
    answer1 = null;
    start()
    for (let i = 0; i < 12; i++) {
        newDiv[i].src = "pics/backside.png";

        function reveal() {
            if (tryOne) {
                answer1 = oldDiv[i]
                number = i;
                tryOne = !tryOne;
                document.querySelector("#newDiv" + i).src = `pics/${oldDiv[i]}.jpg`

            } else if (!tryOne) {
                tryOne = !tryOne;
                if (oldDiv[i] === answer1) {
                    answer1 = "empty";
                    counter++;
                    document.querySelector("#newDiv" + i).src = `pics/${oldDiv[i]}.jpg`
                    if (counter === 6) {
                        gamePlaying = false;
                        console.log("You made it!");

                        if (timeLeft > highScore) {
                            highScore = timeLeft;
                            document.querySelector("#record").innerHTML = `Highscore: ${highScore}`
                            alert("New HighScore!")
                            console.log(counter);

                        }
                    }
                } else {
                    alert("Wrong")
                    document.querySelector("#newDiv" + number).src = "pics/backside.png";
                }
            }
        }
        document.querySelector("#newDiv" + i).addEventListener("click", reveal)
    }


})


document.querySelector("#btnRestart").addEventListener("click", function() {
    gameOver()
    counter = 0;
    cleanArray = "empty";
    newArray = [];
    gameOver();
    for (let i = images.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * 600)
        newArray[i * j] = images[i];

    }

    cleanArray = newArray.filter(function() { return true });
    console.log(cleanArray);

    for (let i = 0; i < 12; i++) {
        let updateDiv = [];

        updateDiv[i] = document.querySelector("#newDiv" + i);
        updateDiv[i].src = `pics/${cleanArray[i]}.jpg`;
        oldDiv = cleanArray;
    }
})