import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { AppRoutingModule } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        AppComponent,
        MenuTitleComponent,
        BigCardComponent,
        SmallCardComponent,
        MenuBarComponent,
    ]
})
export class HomeComponent {

}
