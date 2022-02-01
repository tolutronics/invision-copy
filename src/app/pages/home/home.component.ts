import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list = [
    {
      title: 'Meredith Palm',
      price: '$123.45',
      id: '#2056',
      date: '2/28/2022',
      description: 'Whole Home Speaker Install',
      status: 'Due on Feb 2, 2022',
      tagColor: 'grey',
      action: 'Draft',
    },
    {
      title: 'Maxamiliano Montgomery',
      price: '$123.45',
      id: '#2056',
      date: '2/28/2022',
      description: 'Whole Home Speaker Install',
      status: 'Due on Jan 29, 2022',
      tagColor: '#d1b109',
      action: 'Submitted',
    },
    {
      title: 'Maxamiliano Montgomery',
      price: '$123.45',
      id: '#2056',
      date: '2/28/2022',
      description: 'Whole Home Speaker Install',
      status: 'Past Due by 15 Days',
      tagColor: '#d1b109',
      action: 'Submitted',
    },
    {
      title: 'Maxamiliano Montgomery',
      price: '$123.45',
      id: '#2056',
      date: '2/28/2022',
      description: 'Whole Home Speaker Install',
      status: 'Stripe Funding on Tuesday',
      tagColor: 'green',
      action: 'Paid . Strip - ACH',
    },
    {
      title: 'Tobias Flenderson',
      price: '$123.45',
      id: '#2056',
      date: '2/28/2022',
      description: 'Whole Home Speaker Install',
      status: 'Due Jan 3, 2022',
      tagColor: '#d1b109',
      action: 'Viewed',
    },
    {
      title: 'Maxamiliano Montgomery',
      price: '$123.45',
      id: '#2056',
      date: '2/28/2022',
      description: 'Whole Home Speaker Install',
      status: 'Funded By Stripe on Jan 20, 2022',
      tagColor: 'green',
      action: 'Paid . Strip - CC',
    },

    {
      title: 'Gabriel Susan Lewis',
      price: '$123.45',
      id: '#2056',
      date: '2/28/2022',
      description: 'Whole Home Speaker Install',
      status: 'Due Dec 30, 2022',
      tagColor: 'red',
      action: 'Declined',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
