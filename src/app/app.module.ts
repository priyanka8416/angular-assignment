import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './userdetails.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { SortPipe } from './sort.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: UserComponent },
      { path: 'users/:userId', component: UserDetailsComponent },
    ]),
  ],
  providers: [UserService, SortPipe],
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    HighlightDirective,
    SortPipe,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
