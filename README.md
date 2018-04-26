# react-time-seek-slider

Youtube-like time seek slider for React. Fork of [react-video-seek-slider](https://github.com/egorovsa/react-video-seek-slider) for enhancements like:

* Time units in millisecond, not second
* More events and callbacks (not yet!)

![react-video-seek-slider](https://github.com/egorovsa/react-video-seek-slider/blob/master/example.png?raw=true)

Video seek slider demo [react-video-seek-slider](http://video-seeker.egorov.pw/)

## How to install
```
npm i react-time-seek-slider
```

## How to import
For TypeScript usage there is a index.d.ts in node_modules folder
```typescript
import {TimeSeekSlider} from 'react-time-seek-slider';
```

or

```javascript
const TimeSeekSlider = require('react-time-seek-slider');
```

Also you have to use css file in a lib folder in: 

```javascript
import 'react-time-seek-slider/lib/time-seek-slider.css';
```

## How to use
```jsx harmony
//JSX
    <TimeSeekSlider
        max={1152}
        currentTime={this.state.currentTime}
        progress={400}
        onChange={(time:number)=>{
            this.setState({
                currentTime:time
            });
        }}
        offset={0}
        secondsPrefix="00:00:"
        minutesPrefix="00:"
    />
```

### Specification

+ `max` (number, required) - Max sliders value
+ `currentTime` (number, required) - Current sliders value
+ `progress` (number) - Current buffered progress
+ `hideSeekTimes` (boolean) - hide hover current time (Default: false)
+ `onChange` ((time:number, offsetTime:number)=>void, required) - script to be run when thumb change position
+ `offset` (number, default:0) - when you need start slider with offset time
+ `secondsPrefix` (string, default: '') - when time is less than one minutes you can use prefix time as "00:00:"
+ `minutesPrefix` (string, default: '')  - when time is less than one hour you can use prefix time as "00:"

## For development
just use:

```javascript 1.8
$ yarn or $ npm i
$ npm run dev
```

open your browser http://localhost:3000

## For Build

```
$ npm run production
```
