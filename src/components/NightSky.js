import React, { PureComponent, Fragment } from 'react';

//import './style.css';

// import bricks from './bricks';
//import bricks from './b1';

import debounce from "lodash/debounce";


export default class NightSky extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            ballSpeed: 300,
            needsRefresh: false,
        };
    }

    componentDidMount() {
        this.skyLogic();

        this.calcHeight();

        //window.addEventListener("resize", debounce(this.calcHeight, 100));
        window.addEventListener("resize", debounce(this.skyLogic, 1000));
        //window.addEventListener("resize", this.skyLogic);
    }

    componentDidUpdate() {
        console.log('update');
    }

    skyLogic = () => {


        //const background = document.getElementById("bgCanvas");
        const bgCtx = this.bgCanvas.getContext("2d");
        const width = Math.max( document.documentElement.clientWidth, window.innerWidth );
        const height = Math.max( document.documentElement.clientHeight, window.innerHeight );


        console.log(document.documentElement);
        console.log('BODY CLW', width);
        console.log('BODY INW', window.innerWidth);

        this.bgCanvas.width = width;
        this.bgCanvas.height = height;

            bgCtx.fillStyle = '#e7e5f8';
            bgCtx.fillRect(0,0,width,height);
            bgCtx.fillStyle = '#ffffff';
            bgCtx.strokeStyle = '#ffffff';

        // // Some random points
        // var points = [],
        //     displacement = 140,
        //     power = Math.pow(2,Math.ceil(Math.log(width)/(Math.log(2))));
        //
        // // set the start height and end height for the terrain
        // points[0] = (height - (Math.random()*height/2))-displacement;
        // points[power] = (height - (Math.random()*height/2))-displacement;
        //
        // // create the rest of the points
        // for(let i = 1; i<power; i*=2){
        //     for(let j = (power/i)/2; j <power; j+=power/i){
        //         points[j] = ((points[j - (power/i)/2] + points[j + (power/i)/2]) / 2) + Math.floor(Math.random()*-displacement+displacement );
        //     }
        //     displacement *= 0.6;
        // }
        //
        // // Second canvas used for the stars
        // bgCtx.fillStyle = '#000';
        // bgCtx.fillRect(0,0,width,height);
        //
        // // stars
        // function Star(options){
        //     this.size = Math.random()*2;
        //     this.speed = Math.random()*.05;
        //     this.x = options.x;
        //     this.y = options.y;
        // }
        //
        // Star.prototype.reset = function(){
        //     this.size = Math.random()*2;
        //     this.speed = Math.random()*.05;
        //     this.x = width;
        //     this.y = Math.random()*height;
        // }
        //
        // Star.prototype.update = function(){
        //     this.y+=this.speed;
        //     if(this.x<0){
        //         this.reset();
        //     }else{
        //         bgCtx.fillRect(this.x,this.y,this.size,this.size);
        //     }
        // }
        //
        // var entities = [];
        //
        // // init the stars
        // for(let i=0; i < height; i++){
        //     entities.push(new Star({x:Math.random()*width, y:Math.random()*height}));
        // }

        // //animate background
        // function animate(){
        //     bgCtx.fillStyle = '#000';
        //     bgCtx.fillRect(0,0,width,height);
        //     bgCtx.fillStyle = '#ffffff';
        //     bgCtx.strokeStyle = '#ffffff';
        //
        //     let entLen = entities.length;
        //
        //     while(entLen--){
        //         entities[entLen].update();
        //     }
        //
        //     requestAnimationFrame(animate);
        // }
        // animate();
    }


    calcHeight() {
        //window.outerHeight
        var vheight = Math.max( document.documentElement.clientHeight, window.innerHeight );
        var views = document.querySelectorAll('.cont-view');

        console.log('VHEIGHT', vheight);
    }


    render() {
        // const {
        //     paddle,
        //     ball,
        // } = this.gameParams;


        return (
            <Fragment>
                <canvas ref={(c) => {this.bgCanvas = c}} id="bgCanvas"/>
            </Fragment>
        );
    }
}