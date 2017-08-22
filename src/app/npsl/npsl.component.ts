 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npsl',
  templateUrl: './npsl.component.html',
  styles: []
})
export class NPSLComponent implements OnInit {
  fullImagePath: string;
  cardInfo = [
    {title: 'American Soccer Pyramid', image: '/assets/images/pyramidFire.jpg', alt:'pyramidFire'},
    {title: 'History Of Saint Louis Soccer', image: '/assets/images/englandusa1950.jpg', alt:'englandusa1950'},
    {title: 'Timeline', image: '#', alt: 'timeline'},
    {title: 'Applicaton', image: '#', alt: 'stadium'},
    {title: 'Players/University Partners', image:'#', alt: 'players'},
    {title: 'Staff: Soccer Operations', image:'#', alt: 'soccer operations'},
    {title: 'Staff: Front Office', image:'#', alt: 'front office'},
    {title: 'Sponsorships', image:'#', alt: 'sponsors'},
    {title: 'Community Partners', image:'#', alt: 'community'}
  ];

  constructor() {
    this.fullImagePath = '/assets/images/pyramidFire.jpg'
  }

  ngOnInit() {
  }

}
