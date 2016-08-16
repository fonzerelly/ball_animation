import { Component } from '@angular/core';
import { Ball } from './ball.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Bouncing Balls in Angular2</h1>
    <input [(ngModel)]="ballCount" [value]="ballCount">
    {{ballCount}}
  <div class="container">
    <ball *ngFor="let b of range(ballCount)"></ball>',
    </div>
    `,
    directives: [Ball]
})
export class AppComponent {
    ballCount: Number = 10;
    range (count: Number) {
        return new Array(Number(count));
    }
}
