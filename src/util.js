export const playSong = (audioRef,isPlaying) => {
    //play selected song
    const playPromise = audioRef.current.play();
    if(isPlaying){
        if(playPromise !== undefined){
            playPromise.then(audio=>{
                audioRef.current.play();
            })
        }
    }
}