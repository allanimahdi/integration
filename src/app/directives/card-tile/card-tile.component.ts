import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.scss'],
})
export class CardTileComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() available =  true;
  @Input() color = '#0099ff';
  constructor() { }

  ngOnInit() {}

}
