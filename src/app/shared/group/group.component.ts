import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../models/group';
import { PlayerPersonalData } from '../models/player-personal-data.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() group: Group;

  @Input() displayedColumns: string[];

  constructor() { }

  ngOnInit() {
  }

}
