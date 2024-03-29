import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  items:MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Doctors',
          routerLink:'/doctors'
      }
  ];
  }
}
