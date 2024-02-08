import { Component, Input } from '@angular/core';
import { AppRoutingModule } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  bigCardImg:string="";
  @Input()
  bigCardTitle:string="Saiu a nova vesão do angular";
  @Input()
  bigCardDescription:string="Lorem ipsum, ";
  @Input()
  bigCardId:string="1";


}
