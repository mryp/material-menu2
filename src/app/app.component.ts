import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  widthTablet = 768;

  @ViewChild('sidenav') sidenav: MdSidenav;
  sidenaviMode = 'over';
  sidenaviOpened = false;
  sidenaviIconVisible = true;

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

  ngOnInit() {
    this.setSidenavi(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSidenavi(event.target.innerWidth);
  }

  setSidenavi(windowSize:number) {
    if (windowSize < this.widthTablet) {
      this.sidenaviMode = 'over';
      this.sidenaviOpened = false;
      this.sidenaviIconVisible = true;
    } else {
      this.sidenaviMode = 'side';
      this.sidenaviOpened = true;
      this.sidenaviIconVisible = false;
    }
  }

  sideNaviToggle() {
    this.sidenav.toggle();
  }
}
