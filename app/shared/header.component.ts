import {Component} from '@angular/core';


@Component({
  selector: 'head-block',
  template: `
    <style>
        .heading1{ 
           text-align:center;
           padding-top:20px;
        }
        nav{
          text-align:center;
          padding-top:10px;
          padding-bottom:10px;
        }
    </style>

    <header>
       <div class='container'>
           <h1 class='heading1'>  Note demo App by using Angular2 :) | -sajankumar vijayan </h1>
       </div>
       <nav>
          <a routerLink='/' routerLinkActive='active' class='btn btn-small btn-primary'> Home </a>
          <a routerLink='/createnotes' routerLinkActive='active' class='btn btn-small btn-primary'> Create Notes </a>
       </nav>
       
    </header>
  `

})
export class HeadBlock {
  constructor() {
      console.log(this, 'running....');
  }
}
