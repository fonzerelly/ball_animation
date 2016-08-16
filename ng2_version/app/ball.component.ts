import { Component } from '@angular/core';

@Component({
    selector: 'ball',
    template: `<div
        class="ball"
        [style.left]="left"
        [style.top]="top"
        [style.color]="color"
        [style.background-color]="color"
    >@</div>`
})
export class Ball {
    left: string;
    top: string;
    color: string;
    dir: {top: number, left: number};

    constructor () {
        let ball = this;
          ball.left = Math.floor(Math.random() * 500) + 'px';
          ball.top = Math.floor(Math.random() * 500) + 'px';
          ball.color = this.makeColor({
            red : Math.floor(Math.random() * 255),
            green : Math.floor(Math.random() * 255),
            blue : Math.floor(Math.random() * 255),
          });

          ball.dir = {
            left: Math.floor(Math.random() * 5),
            top:  Math.floor(Math.random() * 5)
          };

          setInterval(function() {
              let
              curTop = parseInt(ball.top, 10),
              curLeft = parseInt(ball.left, 10);

              if (curTop + ball.dir.top >= 500 || curTop + ball.dir.top <= 0) {
                ball.dir.top = -1 * ball.dir.top;
              }

              if (curLeft + ball.dir.left >= 500 || curLeft + ball.dir.left <= 0 ) {
                ball.dir.left = -1 * ball.dir.left;
              }

              ball.top = curTop + ball.dir.top + 'px';
              ball.left = curLeft + ball.dir.left + 'px';

          });
    }

    private makeColor (rgbObj: {red: Number, green: Number, blue: Number}) {
        return `rgb(${rgbObj.red} ,${rgbObj.green} ,${rgbObj.blue})`;
    }

}
