import {Injectable} from '@angular/core';


@Injectable()
export class TodoService {
    private _notesArray: any;
    private _count = -1;
    constructor() {
        console.log(this, 'Running...');

        this._notesArray = (localStorage.getItem('notes')) ? JSON.parse(localStorage.getItem('notes')) : [];
        this._count = (this._notesArray.length > 0) ? this._notesArray.length - 1 : -1;
    }
    fetchNotes() {
        this._notesArray = (localStorage.getItem('notes')) ? JSON.parse(localStorage.getItem('notes')) : [];
        return this._notesArray;
    }
    getNote(id: any) {
        console.log(id);
        let notes : any;
        if (this._notesArray.length > 0) {
             for (let i = 0; i < this._notesArray.length; i++) {
                  if (String(this._notesArray[i].id) === id) {
                     notes = this._notesArray[i];
                      break;
                  }
             }
             return notes;
        }
        throw new Error('No notes created yet!');
    }

    editNote(notes: any, index: any) {
        console.log(notes);
        console.log(this._notesArray);
        for (let i = 0; i < this._notesArray.length; i++) {
             if (String(this._notesArray[i].id) === index) {
                   this._notesArray[i].title = notes.title;
                   this._notesArray[i].description = notes.description;
                    this._notesArray[i].date = notes.date;
                    localStorage.setItem('notes', JSON.stringify(this._notesArray));
                 break;
             }
        }


    }
    saveNotes(notes: any) {

        this._count = this._notesArray.length + 1;

        this._notesArray.push({id: this._count, title: notes.title, description: notes.description, date: notes.date});
        localStorage.setItem('notes', JSON.stringify(this._notesArray));
    }
    deleteNotes(id: Number) {
        this._notesArray.splice(id, 1);
        console.log(this._count);
        this._count = this._notesArray.length - 1;
        console.log(this._count);
        localStorage.setItem('notes', JSON.stringify(this._notesArray));

    }
}
