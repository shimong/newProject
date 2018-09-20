import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { NoteComponent } from "src/app/note/note.component";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OpenModal() {
    this.dialog.open(NoteComponent);
  }
}
