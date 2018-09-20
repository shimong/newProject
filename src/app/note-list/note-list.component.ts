import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { NoteComponent } from "src/app/note/note.component";
import { INote, NotesService } from "src/app/notes.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  private Notes: Array<INote>;

  constructor(public notesService: NotesService, public dialog: MatDialog) {}

  ngOnInit() {
  }

  OpenModal() {
    this.dialog.open(NoteComponent);
  }
}
