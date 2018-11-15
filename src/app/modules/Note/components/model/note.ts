import { Reminder } from './reminder';
import { Category } from './category';
export class Note {

    noteTitle: string;
    noteContent:string;
    noteCreatedBy: string;
    category: Category;
    reminders: Reminder[];

    
}