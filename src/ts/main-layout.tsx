import * as React from 'react';
import {TimeSeekSlider} from "./index";

export interface State {
	currentTime: number
}

export class AppComponent extends React.Component<any, State> {
	state: State = {
		currentTime: 0
	};

	public render() {
		return (
			<div className="container">
				<h1>React Time Seek Slider</h1>
				<TimeSeekSlider
					max={1152}
					currentTime={this.state.currentTime}
					progress={400}
					onSeeking={(time: number, offsetTime: number) => {
						this.setState({
							currentTime: time // or offsetTime
						} as State);
					}}
					offset={0}
					secondsPrefix="00:00:"
					minutesPrefix="00:"
				/>
			</div>
		);
	}
}