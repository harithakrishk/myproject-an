import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleComponent } from './sample/sample.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SampleComponent,
    BloodBankComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
