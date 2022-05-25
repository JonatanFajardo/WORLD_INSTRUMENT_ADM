import { GeneralService } from './services/general.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/instrumentos/list/list.component';
import { EditComponent } from './pages/instrumentos/edit/edit.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GeneralService,
    FormBuilder,
    DatatableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
