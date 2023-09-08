import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public lastBlog= [
    {
      title: 'Новый заголовк статьи',
      desc: 'Чуть больше информации, но не слишком много, т.к. будет не особо интересно.',
      img: 'https://t4.ftcdn.net/jpg/02/53/29/61/360_F_253296181_7nsCSohrQ7ZMqFOnfla3HztdMuGiXKXV.jpg'
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
