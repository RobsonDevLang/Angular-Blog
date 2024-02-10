import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { data } from '../../data/data';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AppComponent, RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  contentImg: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id:string | null="1"

  constructor(
    private route:ActivatedRoute
    ){}
  ngOnInit():void{
    this.route.paramMap.subscribe(value=>
      this.id=value.get('id')
    )
    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id:string | null){
    const result = data.filter(article => article.id === id)[0]
      this.contentTitle =result.title
      this.contentDescription = result.description
      this.contentImg = result.photo
  }
}
