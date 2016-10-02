import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'alert-box',
    template: `
            <div class="alert {{type}}" role="alert" [hidden]="toggle">
               {{msg}}
            </div>

    `,
    inputs: ['msg', 'type', 'toggle']
})
export class AlertBox {

    public msg: String;
    public type: String;
    private toggle: Boolean = true;

    constructor() {
        console.log(this, 'running...');

    }



}
