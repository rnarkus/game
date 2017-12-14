import React, {Component} from 'react';
import Sound from 'react-sound';
import Disco from './music/disconoise.wav'


export default class Disco extends Component {
	constructor(props){
		super();

	};

	render(){
		return(

			<div>
                <Sound
                    url= "https://song.link/us/i/157434128"
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300 }
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />
			</div>

			);
	}
}
