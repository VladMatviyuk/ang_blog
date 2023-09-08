import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public data = [
    {
      title: 'Game 1',
      desc: 'Some game',
      img: 'https://i.pinimg.com/originals/24/f1/f5/24f1f54f147a70157d56180b5192f6df.jpg'
    },
    {
      title: 'Game 2',
      desc: 'One more game',
      img: 'https://n1s2.hsmedia.ru/fd/b0/7a/fdb07ab166dc8b76b55b4a997d292114/600x600_1_f9d66f9b63018e68d94d360d10a870a6@750x750_0xac120003_4320317821654605218.jpeg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
