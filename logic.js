removeTranstion= (e) =>{
    if(e.propertyName!=='transform') return;
    else{
        e.target.classList.remove("playing");
    }
}



playsound= (e) =>{
// const audio =document.querySelector(`audio[data-key= "${event.keyCode}"]`);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if (!audio) {
    return;
}

key.classList.add("playing");
audio.currentTime=0;
audio.play();

}


const keys = document.querySelectorAll(".key");
// const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener("transitionend",removeTranstion) );
window.addEventListener("keydown",playsound)