import { Component, Input, OnInit } from '@angular/core';
import {
  faChevronDown,
  faCircle,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
  circle = faCircle;
  ellipsis = faEllipsisV;
  chevronDown = faChevronDown;
  @Input() cardData: any;
  ngOnInit(): void {
    console.log(this.cardData);
  }
}
