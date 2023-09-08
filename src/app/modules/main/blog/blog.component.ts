import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public data = [
    {
      title: 'Новый заголовк статьи',
      desc: 'Чуть больше информации, но не слишком много, т.к. будет не особо интересно.',
      img: 'https://t4.ftcdn.net/jpg/02/53/29/61/360_F_253296181_7nsCSohrQ7ZMqFOnfla3HztdMuGiXKXV.jpg'
    },
    {
      title: 'Новый заголовк статьи 2',
      desc: 'Чуть больше информации, но не слишком много, т.к. будет не особо интересно. Чуть больше информации, но не слишком много, т.к. будет не особо интересно.',
      img: 'https://t4.ftcdn.net/jpg/02/53/29/61/360_F_253296181_7nsCSohrQ7ZMqFOnfla3HztdMuGiXKXV.jpg'
    },
    {
      title: 'Новый заголовк статьи 3',
      desc: 'Чуть больше информации, но не слишком много, т.к. будет не особо интересно. Чуть больше информации, но не слишком много, т.к. будет не особо интересно.. Чуть больше информации, но не слишком много, т.к. будет не особо интересно.',
      img: 'https://t4.ftcdn.net/jpg/02/53/29/61/360_F_253296181_7nsCSohrQ7ZMqFOnfla3HztdMuGiXKXV.jpg'
    },
    {
      title: 'Новый заголовк статьи 4',
      desc: 'Чуть больше информации, но не слишком много, т.к. будет не особо интересно',
      img: ''
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
