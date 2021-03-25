import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  data: any = "hi";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  clickme(){
    console.log("Clicked");
    this.http.get("http://localhost:4000/").subscribe((res)=>{
      this.data = res;
    })
  }
}
