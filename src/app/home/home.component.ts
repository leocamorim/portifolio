import { Component, HostListener, OnInit } from '@angular/core';
let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let aux = document.getElementsByClassName("spanPop");
    for (let i = 0; i < aux.length; i++) {
      const span = aux[i];
      span.addEventListener("mouseover", this.mOver, false);
    }
  }

  mOver(event: any) {
    const element = event.srcElement;
    element.classList.add("animating");
    setTimeout(() => {
      element.classList.remove("animating");
    }, 1000);
  }
}
