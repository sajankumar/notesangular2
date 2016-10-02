import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <section class="container-fluid">
          <head-block></head-block>

          <router-outlet></router-outlet>

        </section>
    `
})
export class AppComponent { }
