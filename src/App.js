import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import debounce from "lodash/debounce";

import NightSky from './components/NightSky';

const sounds = [
    'media/mozart.mp3',
    'media/mozart2.mp3',
    'media/s1.mp3',
    'media/s2.mp3',
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //soundSrc: 'media/s1.mp3',
            countdown: {
                sec: 3,
                show: false,
            },
            countdown2: {
                sec: 0,
                show: false,
            },
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
        this.interval2 = setInterval(() => this.tick2(), 1000);

        //this.calcHeight();
        //window.addEventListener("resize", debounce(function() { calcHeight() }, 10));

        //window.addEventListener("resize", debounce(this.calcHeight, 100));
    }

    tick() {
        if (this.state.countdown.sec <= 1) {
            this.setState(prevState => ({
                showField: true,
                countdown: {
                    ...prevState.countdown,
                    show: false,
                },
            }));

            this.playMusic();

            clearInterval(this.interval);

        } else {
            console.log(this.state.countdown.sec);
            this.setState(prevState => ({
                countdown: {
                    ...prevState.countdown,
                    sec: prevState.countdown.sec - 1,
                },
            }));
        }
    }

    tick2() {
        if (this.state.countdown2.sec >= 8) {
            this.setState(prevState => ({
                showField: true,
                countdown2: {
                    ...prevState.countdown2,
                    show: false,
                },
            }));

            this.playMusic();

            this.audioNode.src = sounds[1];

            this.playMusic();

            clearInterval(this.interval2);

        } else {
            console.log('counter2: ', this.state.countdown2.sec);
            this.setState(prevState => ({
                countdown2: {
                    ...prevState.countdown2,
                    sec: prevState.countdown2.sec + 1,
                },
            }));
        }
    }

    changeSoundSrc = () => {

        console.log(this.audioNode);
        console.log(this.audioNode.children);
        console.log(this.audioNode.src);

        this.audioNode.src = sounds[1];

        this.playMusic();

        //this.audioNode.play();

        // this.setState(prevState => ({
        //     soundSrc: 'media/s2.mp3',
        // }));
    }

    playMusic = () => {
        this.mute.classList.toggle('on');

        if (this.audioNode.paused) {
            this.audioNode.play();
        }else{
            this.audioNode.pause();
        }
    }

    showResolution = () => {
        const h = window.screen.availHeight;
        const w = window.screen.availWidth;

        const sh = window.screen.height;
        const sw = window.screen.width;

        // considering zoom
        const wclh = document.documentElement.clientHeight;
        const wclw = document.documentElement.clientWidth;

        // resolution
        console.log('w: ',w);
        console.log('h: ',h);
        console.log('sw: ',sw);
        console.log('sh: ',sh);
        console.log('wclh: ',wclh);
        console.log('wclw: ',wclw);
    }

    calcHeight() {
        //window.outerHeight
        var vheight = Math.max( document.documentElement.clientHeight, window.innerHeight );
        var views = document.querySelectorAll('.cont-view');

        console.log('VHEIGHT', vheight);

        // for ( var i  = 0; i < views.length; i++ ) {
        //     var view = views[i];
        //     view.style.height = vheight + "px"
        // }
        //
        // //var name = document.querySelector('.wave');
        // var nameH = parseFloat(getComputedStyle(document.querySelector('.wave')).height),
        //     cubeH = parseFloat(getComputedStyle(document.querySelector('.box-wrap')).height),
        //     aboutH = parseFloat(getComputedStyle(document.querySelector('.about-content')).height),
        //     projectsH = parseFloat(getComputedStyle(document.querySelector('.projects-content')).height),
        //     contactH = parseFloat(getComputedStyle(document.querySelector('.contact-content')).height);
        //
        // if (vheight > 500) {
        //     document.querySelector('.wave').style.marginTop = ((vheight - 50)/2 - nameH)/2 + 'px';
        //     document.querySelector('.wave').style.marginBottom = ((vheight - 50)/2 - nameH)/2 + 'px';
        // }
        // if (vheight > 500) {
        //     document.querySelector('.box-wrap').style.marginTop = ((vheight - 50)/2 - cubeH)/2 + 'px';
        //     document.querySelector('.box-wrap').style.marginBottom = ((vheight - 50)/2 - cubeH)/2 + 'px';
        // }
        // if (vheight > aboutH) {
        //     document.querySelector('.about-content').style.marginTop = ((vheight) - aboutH)/2 + 'px';
        //     document.querySelector('.about-content').style.marginBottom = ((vheight) - aboutH)/2 + 'px';
        // }
        // if (vheight > projectsH) {
        //     document.querySelector('.projects-content').style.marginTop = ((vheight) - projectsH)/2 + 'px';
        //     document.querySelector('.projects-content').style.marginBottom = ((vheight) - projectsH)/2 + 'px';
        // }
        // if (vheight > contactH) {
        //     document.querySelector('.contact-content').style.marginTop = ((vheight) - contactH)/2 + 'px';
        //     document.querySelector('.contact-content').style.marginBottom = ((vheight) - contactH)/2 + 'px';
        // }
        //
        // /*--------- triangles -------------*/
        //
        // var aboutWrap = document.querySelector('.about-wrap');
        // var patternAbout = Trianglify({
        //     height: aboutWrap.offsetHeight,
        //     width: aboutWrap.offsetWidth,
        //     x_colors: ["#e5effa", "#ceddf8", "#8cadde", "#5e8bd9", "#3549d0","#2839a9","#3549d0","#5e8bd9","#8cadde","#ceddf8","#e5effa"],
        //     cell_size: 60
        // });
        //
        // var oldAbout = document.querySelector('.about-svg');
        // if (oldAbout) {
        //     oldAbout.parentNode.removeChild(oldAbout);
        // }
        //
        // var aboutBgElement = patternAbout.svg();
        // aboutBgElement.style.cssText = 'position: absolute; top: 0; height: 100%;';
        // aboutBgElement.classList.add('about-svg');
        // aboutWrap.appendChild(aboutBgElement);
        //
        //
        // var contactWrap = document.querySelector('.contact-wrap');
        // var pattern = Trianglify({
        //     height: contactWrap.offsetHeight,
        //     width: contactWrap.offsetWidth,
        //     x_colors: ["#e5effa", "#ceddf8", "#8cadde", "#5e8bd9", "#3549d0","#2839a9","#3549d0","#5e8bd9","#8cadde","#ceddf8","#e5effa"],
        //     cell_size: 60
        // });
        //
        // var oldContact = document.querySelector('.contact-svg');
        // if (oldContact) {
        //     oldContact.parentNode.removeChild(oldContact);
        // }
        //
        // var bgElement = pattern.svg();
        // bgElement.style.cssText = 'position: absolute; top: 0; height: 100%;';
        // bgElement.classList.add('contact-svg');
        // contactWrap.appendChild(bgElement);
        //
        // /*--------- /triangles -------------*/

    }



  render() {



    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*/!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
          {/*/!*<h1 className="App-title"></h1>*!/*/}
        {/*</header>*/}

          <audio className="audio" ref={(el) => { this.audioNode = el; }} src={sounds[0]} type="audio/mpeg" controls >
          </audio>

          <button onClick={this.showResolution}>
              show resolution
          </button>

          <div className="test">test</div>

          <button
              ref={(m) => {this.mute = m}}
              className="button mute"
              onClick={this.playMusic}
          >
              mute
          </button>

          <NightSky/>
      </div>
    );
  }
}

export default App;
