import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatDialogModule } from "@angular/material";

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NotesService } from "src/app/notes.service";
import { NoteComponent } from "src/app/note/note.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    BrowserModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent],
  entryComponents: [NoteComponent]
})
export class AppModule { }
