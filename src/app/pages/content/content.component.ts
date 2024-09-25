import { Component, OnInit } from '@angular/core';
import {dataFake}  from '../../data/dataFake';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent implements OnInit {

  public  contentTitle:string = '';
  private id: string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
     this.route.paramMap.subscribe( value => this.id = value.get("id")
     )  

    this.setValuesTocomponent(this.id)

  }


  setValuesTocomponent(id:string | null){
     const result = dataFake.filter(article => article.id == id)[0]

     console.log("---");
     console.log(result);

    if (result){
      debugger
        this.contentTitle = result.title;
    }
     
  }
}
