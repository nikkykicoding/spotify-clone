console.log("welcome to spotify");

let songs = [
    {
         filePath: "Main Hoon Na - Main Hoon Na 128 Kbps (1).mp3"
       
    },
   
    


]

let audioElement = new Audio(songs[0]);
// audioElement.play();
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myPrograssBar = document.getElementById("mypb");
let gif= document.getElementById("gif");





masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        document.getElementById("masterPlay").innerHTML ="pause";
        gif.style.opacity=1;

     
    }
    else{
        audioElement.pause();
        document.getElementById("masterPlay").innerHTML ="play_circle";
        gif.style.opacity=0;


    }


})

audioElement.addEventListener('timeupdate', () => {

    console.log("timeupdate");
    //update seek bar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(audioElement.currentTime);
    myPrograssBar.value=progress;



})

myPrograssBar.addEventListener('change',()=>{



})



