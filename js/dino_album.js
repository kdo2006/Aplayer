console.log("Welcome to Aplayer");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/Aplayer/audio/dino_james/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Arambol", filePath: "/Aplayer/audio/dino_james/1.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/1.png"},
    {songName: "D_N_Me", filePath: "/Aplayer/audio/dino_james/2.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/2.png"},
    {songName: "D", filePath: "/Aplayer/audio/dino_james/3.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/3.png"},
    {songName: "Dhundhla", filePath: "/Aplayer/audio/dino_james/4.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/4.png"},
    {songName: "Supercop", filePath: "/Aplayer/audio/dino_james/5.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/5.png"},
    {songName: "Higher", filePath: "/Aplayer/audio/dino_james/6.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/6.png"},
    {songName: "Jealous", filePath: "/Aplayer/audio/dino_james/7.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/7.png"},
    {songName: "On_The_Rocks", filePath: "/Aplayer/audio/dino_james/8.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/8.png"},
    {songName: "Rani__Outro", filePath: "/Aplayer/audio/dino_james/9.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/9.png"},
    {songName: "Sabka_Rapper_Ek", filePath: "/Aplayer/audio/dino_james/10.mp3", coverPath: "/Aplayer/Artists_bg/D_dino/10.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/Aplayer/audio/dino_james/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `/Aplayer/audio/dino_james/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `/Aplayer/audio/dino_james/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
