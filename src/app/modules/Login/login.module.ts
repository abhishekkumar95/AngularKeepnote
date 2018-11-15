import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';


//Material
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';



import {FlexLayoutModule} from '@angular/flex-layout';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
import { TokenStorage } from './core/token.storage';



@NgModule({
    declarations: [LoginComponent],
    imports: [MatCardModule,
        FlexLayoutModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        RouterModule,
        HttpClientModule,
        FormsModule 
    ],
    exports:[LoginComponent],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}}, TokenStorage]

    
})



export class LoginModule {}