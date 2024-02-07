import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        // HomeComponent,
        MenuBarComponent,
        AppRoutingModule,
        // ContentComponent,
    ]
})
export class AppComponent {
  title = 'blog';
}
