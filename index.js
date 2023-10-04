function clickSound(){
for (var i =  0;i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buthtml = this.innerHTML;
        makeSound(buthtml);
        animationButt(buthtml);
    })}}

function keySound(){
    document.addEventListener("keydown", function(event){
        var keyContent = event.key;
        makeSound(keyContent); 
        animationButt(keyContent);   
    })}

function makeSound(boom){
    switch (boom) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;

    default:
        break;
    }}
function animationButt(akshar){
    var butt = document.querySelector("." + akshar);
    butt.classList.add("pressed");
    setTimeout(function(){
        butt.classList.remove("pressed");
    }, 100)
}
























keySound();
clickSound();