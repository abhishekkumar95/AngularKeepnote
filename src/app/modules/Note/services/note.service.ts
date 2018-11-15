import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Note } from "../components/model/note";
import { Observable } from "rxjs";
import { Reminder } from "../components/model/reminder";
import { not } from "@angular/compiler/src/output/output_ast";
import { text } from "@angular/core/src/render3/instructions";

const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class NoteService {
  private saveNoteUrl: string = "http://localhost:8082/api/v1/note";
  private getNoteUrl: string = "http://localhost:8082/api/v1/note";
  private getReminderUrl: string = "http://localhost:8081/api/v1/reminder";
  private deleteNoteUrl: string = "http://localhost:8082/api/v1/note/";

  constructor(private http: HttpClient) {}

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.saveNoteUrl, note, httpOptions);
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.getNoteUrl);
  }

  getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.getReminderUrl);
  }

  deleteNote(note: Note){
    const url=`${this.deleteNoteUrl}+${note['noteId']}`;
     return this.http.delete(url,{responseType: 'text'});

  }
}
