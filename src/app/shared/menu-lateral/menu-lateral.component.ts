import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavItem } from 'src/app/core/models/menu/navitem.model';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  menuItens: NavItem[] = [
    {
      displayName: 'opcao do menu 1',
      iconName: 'psychology',
      route: 'diario-eletronico',
      children: [
        {
          displayName: 'filho 1',
          iconName: '',
          route: 'rotafilho1'
        },
        {
          displayName: 'filho 2',
          iconName: '',
          route: 'rotafilho2'
        },
      ]
    },
    {
      displayName: 'opcao do menu 2',
      iconName: 'event',
      route: 'diario-eletronico',
      children: [
        {
          displayName: 'filho 1/2',
          iconName: '',
          route: 'filho1-2'
        },
      ]
    },

  ];

  menuIcons: NavItem[] = [
    {
      displayName: '',
      matToolTip: 'opcao do menu 1',
      iconName: 'psychology',
      children: [
      ]
    },
    {
      displayName: '',
      matToolTip: 'opcao do menu 2',
      iconName: 'event',
      children: [
      ]
    },
  ];

  getScreenWidth!: number;
  mode: MatDrawerMode = 'side';
  expandedMenu!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('appDrawer') appDrawer!: ElementRef;
  @ViewChild('appDrawerIcons') appDrawerIcons!: ElementRef;

  funcionalidadeMenu() {
    this.expandedMenu = !this.expandedMenu;
    return this.expandedMenu;
  }
}
