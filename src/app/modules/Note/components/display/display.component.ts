import { EventEmitter } from '@angular/core';
import { NoteService } from './../../services/note.service';
import { Note } from './../model/note';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input() notes: Note[];
@Output() note = new EventEmitter;


  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  getNote(any){
   
    this.noteService.deleteNote(any).subscribe(data => 
    this.noteService.getNotes().subscribe(data => this.notes= data)
    );
}

}
