import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test-content';
import { SharedModule } from './shared/shared.module';
import { Todos } from './todos';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownService } from './shared/dropdown/dropdown.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Todos
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AppService, DropdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
