import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent
  ],
  exports:[

  ]
})
export class AppModule { }
