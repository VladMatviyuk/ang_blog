import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public data = [
    {
      technologies: ['js', 'ts', 'angular', 'nodejs']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
