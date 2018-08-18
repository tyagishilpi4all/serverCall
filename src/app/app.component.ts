import { Component , } from '@angular/core';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke:any;
  title = 'app';
  constructor(private Data:DataService){

  }
  ngOnInit(){
    this.Data.serverCall().subscribe(res=>{
      this.joke=res;
      console.log("jokes are:",this.joke);
    })
  }
}
