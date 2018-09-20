import { Component, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
import { NotesService, INote } from "src/app/notes.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note: INote;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<NoteComponent>,
    private noteService: NotesService
  ) {
    this.note = { title: '', text: '' }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.noteService.AddNote(this.note);
    this.dialogRef.close();
  }
}
