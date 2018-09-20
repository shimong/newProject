import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private Notes: Array<Note>;

  constructor() { }

  AddNote(title, text) {
    this.Notes.push({title: title, text: text} as Note);
  }
}

interface Note{
    title: string,
    text: string
}