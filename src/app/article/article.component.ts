import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

title = 'nilanjanaAngular';
isVisible : boolean = false;
jsonArray = [
  {
    "id":1,
    "name":"ABC",
    "mobile":88309838
  },
  {
    "id":2,
    "name":"DEF",
    "mobile":88309838
  },
  {
    "id":3,
    "name":"nvv",
    "mobile":97498477
  }
]
hideParagraph(){
  this.isVisible = true;
}

}
