const sounds = ['tada','attention', "cash" , 'clap',"keyboard"];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add("btn");

    btn.innerText = sound;

btn.addEventListener('click' , () => {
    stopSongs();
document.getElementById(sound).play();
// here sound is element in sounds array , and that array ifself is id name at html
    })
      document.body.appendChild(btn);
    });
    
    function stopSongs() {
        sounds.forEach(sound => {
            const song = document.getElementById(sound);

            song.pause();
            song.currentTime = 0;
        })
    }
 

