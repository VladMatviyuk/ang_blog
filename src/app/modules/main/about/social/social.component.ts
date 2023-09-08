import { Component, OnInit } from '@angular/core';
import { ILinkIcon } from "../../../../shared/components/link-icon/link-icon.component";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  public links: ILinkIcon[] = [
    {route: 'https://github.com/', name: 'github', blank: true},
    {route: 'https://codepen.io/', name: 'codepen', blank: true},
    {route: 'https://web.telegram.org/a/', name: 'telegram'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
