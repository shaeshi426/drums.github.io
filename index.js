var nofdrums = document.querySelectorAll('.drum').length;
for (var i = 0; i<nofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var bu = this.innerHTML;
        makesound(bu);
        btan(bu);
    })
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    btan(event.key)
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;       
        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break; 
        case "l":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;       
        default:
            break;
    }
}

function btan(activekey){
    var activebut = document.querySelector("."+activekey);
    activebut.classList.add("pressed");
    setTimeout(function(){
        activebut.classList.remove("pressed")
        
    }, 100);

}