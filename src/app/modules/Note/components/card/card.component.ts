import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Note } from "../model/note";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() note: Note;
  @Output() getNote = new EventEmitter;

  constructor() {}

  ngOnInit() {}

  deleteNote(note: Note){

  
    this.getNote.emit(note);

  }
}
