import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateNotes} from '../notes/createnotes.component';
import { ListNotes }  from '../notes/listnotes.component';

const APP_ROUTES: Routes = [
    {path: 'createnotes', component: CreateNotes},
    {path: 'editnotes/:id', component: CreateNotes},
    {path: '', component: ListNotes },
    {path: '**', component: ListNotes}

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
