import { Reminder } from "./../model/reminder";
import { Note } from "./../model/note";
import { Category } from "./../model/category";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatChipInputEvent,
  MatAutocompleteSelectedEvent
} from "@angular/material";
import { NoteService } from "../../services/note.service";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"]
})
export class NoteComponent implements OnInit {
  @Input() categories: Category[];
  @Input() singleNote: Note;
  @Output() allNotes = new EventEmitter();
  title: string = "";
  content: string = "";
  chips = [];
  categoryObject: Category;
  note: Note = new Note();
  notes: Note[];
  reminders: Reminder[];
  step = 0;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.getallNotes();
    this.getAllReminders();
  }
  addChip(any: object) {
    return this.chips.push(any);
  }

  addNote() {
    this.note.noteTitle = this.title;
    this.note.noteContent = this.content;
    this.note.category = this.categoryObject;
    this.note.reminders = this.chips;
    this.noteService.addNote(this.note).subscribe(data => {
      this.getallNotes();
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    console.log("hii");
    this.step++;
  }

  setCategory(category: Category) {
    return (this.categoryObject = category);
  }

  getallNotes() {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
      this.allNotes.emit(this.notes);
    });
  }
  getAllReminders() {
    this.noteService.getReminders().subscribe(data => {
      this.reminders = data;
    });
  }

  deleteNote() {
    console.log(this.singleNote);

    this.noteService.deleteNote(this.singleNote).subscribe(data => {
      console.log(data);

      this.getallNotes();
    });
  }
}
