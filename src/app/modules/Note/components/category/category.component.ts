import { Category } from "./../model/category";
import { CategoryService } from "./../../services/category.service";
import { MediaMatcher } from "@angular/cdk/layout";
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Inject,
  Input
} from "@angular/core";
import { MatDialog } from "@angular/material";
import { Note } from "../model/note";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  note: Note;
  notes: Note[];
  opened: boolean;
  mobileQuery: MediaQueryList;
  categories: Category[];
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private categoryService: CategoryService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getCategories() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    });
  }

  allNote(allNote: Note[]) {
    this.notes = allNote;
  }

getNote(any){
console.log(any);
  this.note = any;

}

}
