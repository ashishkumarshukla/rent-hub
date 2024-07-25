import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ViewProfileComponent } from './modules/auth/view-profile/view-profile.component';
import { CreatePostComponent } from './modules/listing/create-post/create-post.component';
import { ListPostComponent } from './modules/listing/list-post/list-post.component';
import { PostDetailsComponent } from './modules/listing/post-details/post-details.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'listing', component: ListPostComponent },
    { path: 'newPost', component: CreatePostComponent, canActivate: [AuthGuard]  },
    { path: 'profile', component: ViewProfileComponent, canActivate: [AuthGuard]  },
    { path: 'post-details', component: PostDetailsComponent },
    { path: '',   redirectTo: '/listing', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  ];
