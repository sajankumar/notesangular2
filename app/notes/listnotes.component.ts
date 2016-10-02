import {Component} from '@angular/core';
import {TodoService} from '../shared/services/service';

@Component({
    selector: 'list-notes',
    template: `
        <style>
            .heading3{ 
              text-align:center;
            }

            .notes-container{
                border:7px solid black;
                padding:5px 5px 5px 5px;
                background-color:yellow;
            }


            .notes-header{
                border-bottom:1px solid black;
                    padding-bottom: 5px;

            }
             .notes-title{
                 font-size:21px;
                 float:left;
            }
            .options{
                float:right;
                margin-right: 7px;
            }
            .notes-desc{
                padding:10px;
                
            }
            .notes-date{
                text-align: right;
                padding-right: 1px;
                font-size: 14px;
                color: red;
            }
            .clear{
                clear:both;
            }
        </style>
    
        <div class='container'>
            <h3 class='heading3' *ngIf="notes.length === 0">Note's has not been created so far.</h3>
            <div *ngIf="notes.length > 0"> 
                <div class="rows">
                    <div class="col-md-4 col-lg-4 col-sm-4" *ngFor="let n of notes">
                        <div class="notes-container">
                        <div class="notes-header">
                        <div class="notes-title">{{n.title | uppercase}}</div>
                           <div class="options">
                                    <a class="btn btn-primary" 
                                   routerLink='/editnotes/{{n.id}}'> <i class="fa fa-edit"></i> </a>
                                    <a class="btn btn-danger"  (click)="delete(n)"> <i class="fa fa-trash"></i> </a>
                                 </div>

                                <div class="clear"></div>    

                             </div>

                                 
                            <div class="notes-desc">
                                <p>{{n.description}}</p>
                            </div>
                            <div class="notes-date">
                                <p class="notes-date"> {{ n.date | date }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    providers: [TodoService]
})
export class ListNotes {
    public notes: any;
    public id: any;
    constructor( private _todo: TodoService ) {
        console.log(this, 'list notes running...');
        this.notes = this._todo.fetchNotes();
    }

    delete(n: any) {
       // alert(n);
       let id: Number = this.notes.indexOf(n);
       console.log(id);
        this._todo.deleteNotes(id);

    }

 
}
