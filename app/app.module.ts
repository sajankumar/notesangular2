import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {HeadBlock} from './shared/header.component';
import {AlertBox} from './shared/alert.componet';
import { ListNotes }  from './notes/listnotes.component';

import {CreateNotes} from './notes/createnotes.component';
import {routing, appRoutingProviders} from './routes/app.route';

@NgModule({
  imports: [ BrowserModule , routing, FormsModule ],
  declarations: [ AppComponent , HeadBlock, ListNotes, CreateNotes, AlertBox],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
