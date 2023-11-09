//Variables
let toggle = document.getElementById("mode");
let harshImage = document.getElementById("harshPicture");
let harshImageCounter = 0;

//Code for the light-mode and dark-mode button
toggle.addEventListener('click', modeSwitch);
toggle.addEventListener('click', pictureChange);

//Functions
function modeSwitch() {
    document.body.classList.toggle('light');
}

function pictureChange() {
    harshImageCounter += 1;
    
    if(harshImageCounter % 2 === 1)
    {
        harshImage.innerHTML = '<img class="mainPicture" src="img/Harsh Dramatic Cool.jpg" alt="Profile Picture">';
    }
    else if(harshImageCounter % 2 === 0)
    {
        harshImage.innerHTML = '<img class="mainPicture" src="img/Harsh Dramatic Warm.jpg" alt="Profile Picture">';
    }
}