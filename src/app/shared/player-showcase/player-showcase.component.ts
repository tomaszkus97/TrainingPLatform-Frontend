import { Component, OnInit } from '@angular/core';
import { PlayerShowcaseModel } from '../models/player-showcase.model';
import { LevelName } from '../enums/level.enum';

@Component({
  selector: 'app-player-showcase',
  templateUrl: './player-showcase.component.html',
  styleUrls: ['./player-showcase.component.css']
})
export class PlayerShowcaseComponent implements OnInit {

  player: PlayerShowcaseModel = {
    personalData:{
      id:"123",
      name:"Player",
      surname:"First",
      age: 11
    },
    photo: null,
    currentLevel:{
      levelName: LevelName.Red,
      pointsToAdvance: 500
    } ,
    currentPoints: 327,
    finishedChallenges:[
      "1","11","21"
    ],
    assignedGroups: [
      {
        day:"Monday",
        hour:"18:00",
        level: LevelName.Red
      },
      {
        day:"Wednesday",
        hour:"17:00",
        level: LevelName.Orange
      }
    ]



  }

  constructor() { }

  ngOnInit() {
  }

}
