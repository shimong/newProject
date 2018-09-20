import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public Notes: Array<INote>;

  constructor() { 
    this.Notes = new Array<INote>();
  }

  AddNote(note: INote) {
    this.Notes.push(note);
  }

  // getNotes() {
  //   return this.Notes;
  // }
}

export interface INote{
    title: string,
    text: string
}