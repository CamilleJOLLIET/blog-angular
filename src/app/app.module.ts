import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { AuthComponent } from './auth/auth.component';
import { PostViewComponent } from './post-view/post-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  { path: 'posts', canActivate: [AuthGuard], component: PostViewComponent },
  { path: 'posts/:id', canActivate: [AuthGuard], component: SinglePostComponent },
  { path: 'new', canActivate: [AuthGuard], component: NewPostComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent,
    AuthComponent,
    PostViewComponent,
    SinglePostComponent,
    FourOhFourComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
