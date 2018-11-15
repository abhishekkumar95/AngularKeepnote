import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';


//Material
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



import {FlexLayoutModule} from '@angular/flex-layout';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [MatCardModule,
        FlexLayoutModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        HttpClientModule  
    ],
    exports: [RegisterComponent],
    declarations: [RegisterComponent],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}}]

})




export class RegisterModule {

}