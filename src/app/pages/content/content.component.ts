import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    AppComponent,
    // MenuTitleComponent,
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

}
