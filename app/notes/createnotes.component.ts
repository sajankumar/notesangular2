import {Component} from '@angular/core';
import {TodoService} from '../shared/services/service';
import {AlertBox} from '../shared/alert.componet';

import {ActivatedRoute} from '@angular/router';
 class Notes {
    title: String = '';
    description: String = '';
    date: Date;
}

@Component({
    selector: 'create-notes',
    template: `
    <style>
    .control{
             height: 37px;
            width: 100%;
            padding: 5px;
            border-color: rgba(0, 0, 0, 0.12);
    }
    </style>
    <div class='container'>
        <table class='table table-stripped'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>DueDate</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td> <input type='text'  [(ngModel)]="notes.title" placeholder='Title' class='control'></td> 
                    <td> <input type='textarea' [(ngModel)]="notes.description" placeholder='Descriptions' class='control'></td> 
                    <td> <input type='date' [(ngModel)]="notes.date" class='control'></td>
                    <td>        <button class="btn btn-primary btn-large" (click)="save()">save</button></td>
                </tr>
            </tbody>

        </table>

        <alert-box [msg]="alertMsg" [type]="alertType" [toggle]="alertToggle"> </alert-box>
      </div>  
    `,
    providers: [TodoService, AlertBox]

})
export class CreateNotes {
  public notes: Notes = new Notes();
  public id: any;

  private _isEdit: Boolean = false;

  public alertMsg: String;
  public alertType: String;
  public alertToggle: Boolean;

    constructor(private _todo: TodoService, private _routeparams: ActivatedRoute, private alertbox: AlertBox) {
        console.log(this, 'CreateNotes running');
        this._routeparams.params.subscribe(params => {
            this.id = params['id'];
            if (this.id) {
                    this.editNotes();

            }
        });
    }

    editNotes() {
            this._isEdit = true;
            let note = this._todo.getNote(this.id);
            console.log(note);

            this.notes.title = note.title;
            this.notes.description = note.description;
            this.notes.date = note.date;


    }
    save() {
        if(this.avoidEmptyNotes()){
            return;
        }
        if (this._isEdit) {
            this._todo.editNote(this.notes, this.id);
             let params = {msg: 'Notes has been updated!', type: 'alert-success', boo: false};
               this.alertMsg = params.msg;
               this.alertType = params.type;
               this.alertToggle = params.boo;
        }else {

            this._todo.saveNotes(this.notes);
               this.notes = new Notes();
               let params = {msg: 'Notes has been created!', type: 'alert-success', boo: false};
               this.alertMsg = params.msg;
               this.alertType = params.type;
               this.alertToggle = params.boo;


        }


    }

    avoidEmptyNotes() {
        let isError = false;
        if ((this.notes.title.length === 0 && this.notes.description.length === 0) || this.notes.title === '' || this.notes.description === '') {
               this.alertMsg = 'Notes title and description should not be empty!';
               this.alertType = 'alert-danger';
               this.alertToggle = false;

               isError = true;
        }

        return isError;
    }
}
