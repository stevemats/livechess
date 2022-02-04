import React, {useState} from 'react';
import Sound from 'react-sound';
import soundsong from './assets/testsound.mp3';



const PlaySound = (
      handleSongLoading,
      handleSongPlaying,
      handleSongFinishedPlaying
  ) => {
      const [isPlaying, setIsPlaying] = useState(false);

      return ( 
        <div>
            <button onClick = {() => setIsPlaying(!isPlaying)} > {!isPlaying ? 'Play' : 'Stop'} </button>
            <Sound 
                url = {soundsong}
                playStatus = {isPlaying ? Sound.Status.PLAYING :Sound.status.STOPPED}
                playFromPosition = {0}
                onLoading={handleSongLoading}
                onLoading = {handleSongPlaying}
                onFinishedPlaying = {handleSongFinishedPlaying}
            />
        </div>
      );
    };

export default PlaySound;