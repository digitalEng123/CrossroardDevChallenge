import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PathLocationComponent } from './components/pathLocation.component';
import { TitleComponent } from './components/title/title.component';
import { ShowTitleComponent } from './components/title/show-title/show-title.component';
import { TitleDetailComponent } from './components/title-detail/title-detail.component';

import { SharedService } from './service/shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CallbackPipe } from './components/callback.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PathLocationComponent,
    TitleComponent,
    ShowTitleComponent,
    TitleDetailComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
 * Ref Link #1: https://www.code-sample.com/2017/12/appbasehref-in-angular-4-and-5.html
 * Ref Link #2: https://angular.io/api/common/PathLocationStrategy
 * Ref Link #3: https://www.youtube.com/watch?v=Dpv6lUKNL9o
 * 
 * Commands:
 *
 * Component Usage(s):
 * ng generate component <componentName>
 * ng generate component <components/>
 * ng generate component components/subComponent/subComponent
 * 
 * (e.g.
 *    ng generate component components/title/show-title,
 *    ng generate component components/title/add-edit-title,
 *    ng generate component components/title/del-title)
 *
 * Server Usage(s):
 * ng generate service <serviceName>
*/
