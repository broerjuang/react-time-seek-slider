/// <reference types="react" />
import * as React from 'react';
export interface Props {
    max: number;
    currentTime: number;
    progress?: number;
    onSeeking: (time: number, offsetTime: number) => void;
    onSeekend?: () => void;
    hideHoverTime?: boolean;
    offset?: number;
    secondsPrefix?: string;
    minutesPrefix?: string;
}
export interface State {
    ready: boolean;
    trackWidth: number;
    seekHoverPosition: number;
}
export declare class TimeSeekSlider extends React.Component<Props, State> {
    state: State;
    static defaultProps: Props;
    private seeking;
    private mobileSeeking;
    private track;
    private hoverTime;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleTouchSeeking;
    private endTouchSeeking;
    private handleSeeking;
    private endSeeking;
    private changeCurrentTimePosition(pageX);
    private setTrackWidthState;
    private handleTrackHover;
    private getPositionStyle(time);
    private getThumbHandlerPosition();
    private getSeekHoverPosition();
    private getHoverTimePosition();
    private secondsToTime(seconds);
    private getHoverTime();
    private setSeeking;
    private setMobileSeeking;
    private isThumbActive();
    private drawHoverTime();
    render(): JSX.Element;
}
