import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppDaftar} from "./app.daftar";
import { AppNilai } from './app.nilai';

const appRoutes: Routes = [
  { path: 'component', component: AppComponent },
  { path: 'daftar', component: AppDaftar}
];

@NgModule({
  declarations: [
    AppComponent,
    AppDaftar,
    AppNilai
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AppDaftar,
    AppNilai]
})

export class AppModule { }
