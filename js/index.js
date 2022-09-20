const music = document.querySelector("audio");
		const img = document.querySelector("img");
		const play = document.getElementById("play");
		const artist = document.getElementById("artist");
		const title = document.getElementById("title");
		const prev = document.getElementById("prev");
		const next = document.getElementById("next");
    // songS
		const songs =[
		{
			name:"Dino_James_-_Arambol__From_the_album__D_____Ft._Nikhita_Gandhi___Def_Jam_India(256k)",
			title:"Arambol",
			artist:"Dino James",
		},
		{
			name:"pawan-2",
			title:"sappheirous",
			artist:"Aurora",
		},
		{
			name:"pawan-3",
			title:"walking Firiri",
			artist:"Gorkhali Takma",
		},
	    ];
      // here we start
		let isPlaying = false;
		// for play function
		const playMusic =  () => {
			isPlaying = false;
			music.play();
			play.classList.replace("fa-play","fa-pause");
			img.classList.add("anime");
		};
		// for pause function 
		const pauseMusic =  () =>{
			isPlaying = true;
			music.pause();
			play.classList.replace("fa-pause","fa-play");
			img.classList.remove("anime");
		};
		play.addEventListener("click", () =>{
			isPlaying ? playMusic() : pauseMusic();
		});

		// changing the music data
        const loadSong = (songs) =>{
			title.textContent = songs.title;
			artist.textContent = songs.artist;
			music.src = "/audio/dino_james/"+songs.name+".mp3";
			// img.src = "image/"+songs.name+".jpg";
		};
		songIndex = 0;
		// loadSong(songs[0]);
		const nextSong = () =>{
			// songIndex++;
			songIndex = (songIndex + 1) % songs.length;
			loadSong(songs[songIndex]);
			playMusic();
		};
		const prevSong = () =>{
			// songIndex++;
			songIndex = (songIndex - 1 +  songs.length) % songs.length;
			loadSong(songs[songIndex]);
			playMusic();
		};
		next.addEventListener("click", nextSong);
		prev.addEventListener("click", prevSong);