import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  providers: [provideHttpClient()],
  imports: [
    BrowserModule,
    AppComponent,
    CommonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  exports: []
})
export class AppModule {

}
