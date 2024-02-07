import { Component } from '@angular/core';

import { AppComponent } from '../../app.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    AppComponent,
    RouterModule,
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

}
