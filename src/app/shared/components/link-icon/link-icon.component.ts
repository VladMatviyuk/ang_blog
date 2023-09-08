import { Component, Input, OnInit } from '@angular/core';

export interface ILinkIcon {
  route: string;
  name: string;
  size?: string;
  blank?: boolean;
}
@Component({
  selector: 'app-link-icon',
  templateUrl: './link-icon.component.html',
  styleUrls: ['./link-icon.component.scss']
})
export class LinkIconComponent implements OnInit {

  @Input() options: ILinkIcon | undefined;
  public iconPath: string = '';
  public size: string = 'm';

  constructor() {

  }

  ngOnInit(): void {
    this.size = `size-m`;
    this.iconPath = `../../../../assets/socials/${this.options?.name}.svg`
  }

}
