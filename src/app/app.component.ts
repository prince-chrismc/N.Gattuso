import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>

  <br>

  <p>
    Select a title to set on the current HTML document:
  </p>

  <ul>
    <li><a (click)="setTitle( 'Good morning!' )">Good morning</a>.</li>
    <li><a (click)="setTitle( 'Good afternoon!' )">Good afternoon</a>.</li>
    <li><a (click)="setTitle( 'Good evening!' )">Good evening</a>.</li>
  </ul>

  <button type="button" class="btn btn-primary"
        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Simple demo
</button>
  `,
  styles: []
})
export class AppComponent {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
