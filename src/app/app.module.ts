import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ HttpModule } from '@angular/http';
import{ RouterModule, Routes }  from '@angular/router';


import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelsService } from './services/hotels.service';

import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatListModule
    /*BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule*/
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
