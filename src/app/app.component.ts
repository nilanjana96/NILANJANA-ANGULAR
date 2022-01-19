import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewUInit {
  title = 'nilanjanaAngular';

  parentValue = "This is from parent app component";

  @ViewChild(HeaderComponent) childData : any;

  ngAfterViewInit(): void {
    console.log("child value is", this.childData.childData);
  }
}
