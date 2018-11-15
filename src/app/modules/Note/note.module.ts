import { httpInterceptorProviders } from './interceptor/http-interceptor';
import { CategoryService } from './services/category.service';
import { TokenInterceptor } from './interceptor/tokenInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoteComponent } from './components/note/note.component';
import { CardComponent } from './components/card/card.component';


// Material Imports
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



//Flex
import {FlexLayoutModule} from '@angular/flex-layout';
import { CategoryComponent } from './components/category/category.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { HomeComponent } from './components/home/home.component';
import { MatListModule } from '@angular/material';
import { DisplayComponent } from './components/display/display.component';




@NgModule({
    declarations: [
 
    NoteComponent,
 
    CardComponent,
 
    CategoryComponent,
 
    ReminderComponent,
 
    HomeComponent,
 
    DisplayComponent 
    ],
    imports: [
      MatExpansionModule,
      MatIconModule,
      MatFormFieldModule,
      FlexLayoutModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      MatChipsModule,
      MatTooltipModule,
      MatMenuModule,
      BrowserModule,
      MatCheckboxModule,
      MatAutocompleteModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatDialogModule,
      MatCardModule,
      HttpClientModule,
      MatDividerModule
    ],
     exports:[HomeComponent],
    providers: [httpInterceptorProviders],
    bootstrap: []
  })

export class NoteModule { }
