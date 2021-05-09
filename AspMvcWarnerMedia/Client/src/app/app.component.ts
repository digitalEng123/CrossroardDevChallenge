import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //template: `
  //              <div>
  //                  <nav class='navbar navbar-inverse'>
  //                      <div class='container-fluid'>
  //                          <ul class='nav navbar-nav'>
  //                              <li><a [routerLink]="['home']">Home</a></li>
  //                              <li><a [routerLink]="['titles']">Search Titles</a></li>
  //                              <li><a [routerLink]="['titleDetails']">Title Details</a></li>
  //                          </ul>
  //                      </div>
  //                  </nav>
  //                  <div class='container'>
  //                      <router-outlet></router-outlet>
  //                  </div>
  //               </div>
  //              `
})
export class AppComponent {
  title = 'myapp';
}
