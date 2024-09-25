import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {

  @Input() public imagem:string = "";
  @Input() public titulo:string = "";  
  @Input() public descricao:string = "";  
  @Input() public link:string = "";    
  @Input() public id:string | null = "0";    
  
  

  constructor () {}

  ngOnInit(): void {
  }

}
