console.log('hellow my name is himanshu')

let audioElement = new Audio('1.mp3.mp3')
let songIndex = 0
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let Gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItems'))
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))
let previousBtn = document.getElementById('previous')
let nextBtn = document.getElementById('next')
let masterSongName = document.getElementById('masterSongName')

let songs = [
    { songName: "Let me down slowly", filePath: "song/1.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "Polozhenie remix", filePath: "song/2.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "No love", filePath: "song/3.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "Jungle hai/Grind ", filePath: "song/4.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "Baby i like your style", filePath: "song/5.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "Play date song", filePath: "song/6.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "No lie (Dua lipa)", filePath: "song/7.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "Ranjha song", filePath: "song/8.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "Na kajre ki dhar", filePath: "song/9.mp3.mp3", coverPath: "cover/1.jpg" },
    { songName: "kitaben bhaut si", filePath: "song/10.mp3.mp3", coverPath: "cover/1.jpg" }
]

songItems.forEach((element, i) => {
    console.log(element, i)
    // element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName
});

// handle play pause click ---
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        Gif.style.opacity = 1

    }
    else {
        audioElement.pause()
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        Gif.style.opacity = 0
    }
})

// listen to event ---
// updating seekbar--->
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration / 100)
})

const makeAllPlay = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `${songIndex + 1}.mp3.mp3`
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        Gif.style.opacity = 1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

nextBtn.addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    audioElement.src = `${songIndex + 1}.mp3.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    Gif.style.opacity = 1
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})

previousBtn.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `${songIndex + 1}.mp3.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    Gif.style.opacity = 1
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})