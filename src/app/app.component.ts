import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('sidenav') sidenav: MdSidenav;

  naviLinkList = [
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
    { title: 'メニューアイテム', link: "/page", },
  ];

  sideNaviToggle() {
    this.sidenav.toggle();
  }
}
