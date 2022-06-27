import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  initAnimationDelays = [
    // HEADER
    {
      name: "Header Logo",
      selector: ".logo",
      delay: 0.5
    },
    {
      name: "Header - Button Resume",
      selector: "header .div_buttons > a",
      delay: 0.2
    },
    {
      name: "Header - Contact",
      selector: "header .contact",
      delay: 0.2
    },
    {
      name: "Header - Experience",
      selector: "header .experience",
      delay: 0.2
    },
    {
      name: "Header - About",
      selector: "header .about",
      delay: 0.2
    },
    // CONTENT
    {
      name: "Section 1 - Salutation",
      selector: "#page1 .salutation",
      delay: 0.5
    },
    {
      name: "Section 1 - H1",
      selector: "#page1 h1",
      delay: 0.2
    },
    {
      name: "Section 1 - Text",
      selector: "#page1 p",
      delay: 0.2
    },
    {
      name: "Section 1 - Button",
      selector: "#page1 button",
      delay: 0.2
    },
    // SIDEBAR LEFT
    {
      name: "Left Sidebar - Vertical Bar",
      selector: "#sidebar-left .vertical-bar",
      delay: 0.2
    },
    {
      name: "Left Sidebar - Curriculum",
      selector: "#sidebar-left .curriculum",
      delay: 0.8
    },
    {
      name: "Left Sidebar - Github",
      selector: "#sidebar-left .github",
      delay: 0.2
    },
    {
      name: "Left Sidebar - LinkedIn",
      selector: "#sidebar-left .linkedin",
      delay: 0.2
    },
    // SIDEBAR RIGHT
    {
      name: "Right Sidebar - Vertical Bar",
      selector: "#sidebar-right .vertical-bar",
      delay: 0.2
    },
    {
      name: "Right Sidebar - Email",
      selector: "#sidebar-right a",
      delay: 0.8
    },
  ]

  constructor() { }

  ngOnInit() {
    let aux = document.getElementsByClassName("spanPop");
    for (let i = 0; i < aux.length; i++) {
      const span = aux[i];
      span.addEventListener("mouseover", this.mOver, false);
    }

    let currentDelay = 0;

    this.initAnimationDelays.forEach(animation => {
      currentDelay += animation.delay;
      let elemento = document.querySelector(animation.selector);
      elemento?.setAttribute("style", "animation-delay: " + currentDelay + "s")
    });
  }

  mOver(event: any) {
    const element = event.srcElement;
    element.classList.add("animating");
    setTimeout(() => {
      element.classList.remove("animating");
    }, 1000);
  }
}
