import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatModule } from 'src/app/mat/mat.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
