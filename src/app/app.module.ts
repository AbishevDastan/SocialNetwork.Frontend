import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { AuthenticationInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsFeedComponent } from './components/shared/posts-feed/posts-feed.component';
import { PostComponent } from './components/shared/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { UsersListComponent } from './components/shared/users-list/users-list.component';
import { UserShortInfoComponent } from './components/shared/user-short-info/user-short-info.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'user-profile', component: UserProfileComponent }
];

const AUTHENTICATION_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthenticationInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    PostsFeedComponent,
    PostComponent,
    SearchResultsComponent,
    UsersListComponent,
    UserShortInfoComponent,
    UserProfileComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    AUTHENTICATION_INTERCEPTOR,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
