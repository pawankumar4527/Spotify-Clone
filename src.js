console.log("welcome to music world");

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3.mp3');
let masterPlay =document.getElementById('masterPlay');
let progressBar=document.getElementById('progressBar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Baarish Mein Tum", filePath:"songs/1.mp3.mp3", coverPath:"cover.a.PNG"},
    {songName:"Dil Meri Na Sune", filePath:"songs/2.mp3.mp3", coverPath:"cover.a.PNG"},
    {songName:"heer-ranjha", filePath:"songs/3.mp3.mp3", coverPath:"cover.a.PNG"},
    {songName:"Jehda Nasha", filePath:"songs/4.mp3.mp3", coverPath:"cover.a.PNG"},
    {songName:"Kesariya", filePath:"songs/5.mp3.mp3", coverPath:"cover.a.PNG"},
    {songName:"Love Me Like You Do", filePath:"songs/6.mp3.mp3", coverPath:"cover.a.PNG"},
    {songName:"Manike", filePath:"songs/7.mp3.mp3", coverPath:"cover.a.PNG"},
    {songName:"Rimjhim Gire Saawan", filePath:"songs/8.mp3.mp3", coverPath:"cover.a.PNG"},
    {songName:"sare-jaha", filePath:"songs/9.mp3.mp3", coverPath:"cover.a.PNG"},
    
]
songItem.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


// audioElement.play();

// handle play/pause button
masterPlay.addEventListener('click',()=> {
    // let audioElement=e.target;
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
        }
        else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
        }
        })
        
        
        // Listen to Events
        audioElement.addEventListener('timeupdate',()=>{
            // console.log('timeupdate');
        // update seekbar
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        // console.log(progress);
        progressBar.value=progress;
    })
        progressBar.addEventListener('change',()=>{
        audioElement.currentTime=progressBar.value*audioElement.duration/100;
    
    
    })
    const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        
        
    
        })
    
    }
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            // console.log(e.target);
            makeAllPlays();
            songIndex= parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`songs/${songIndex+1}.mp3.mp3`;
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    
        })
    })
    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=8){
            songIndex=0
        }
        else{
            songIndex+=1;
        }
        audioElement.src=`songs/${songIndex+1}.mp3.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex=0
        }
        else{
            songIndex-=1;
        }
        audioElement.src=`songs/${songIndex+1}.mp3.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })