import { Component, OnInit } from '@angular/core';
import { DailySchedule } from 'src/app/shared/models/coach-schedule';
import { PlayerPersonalData } from 'src/app/shared/models/player-personal-data.model';
import { Group } from 'src/app/shared/models/group';

@Component({
  selector: 'app-coach-groups',
  templateUrl: './coach-groups.component.html',
  styleUrls: ['./coach-groups.component.css']
})
export class CoachGroupsComponent implements OnInit {

  displayedColumns = [ 'name', 'surname', 'age', 'profile'];

  schedule: DailySchedule[] = [
    {
      day:"Monday",
       groups: [
         {
           day: "Monday",
           hour: "18:00",
           players: [
            {id: "1", name: "Player", surname: "One", age: 7 },
            {id: "2", name: "Player", surname: "Two", age: 8 },
            {id: "3", name: "Player", surname: "Three", age: 6 }
           ]
          },
          {
            day: "Monday",
            hour: "19:00",
            players: [
             {id: "1", name: "Player", surname: "One", age: 7 },
             {id: "2", name: "Player", surname: "Two", age: 8 }
            ]
           }
        ]
      },
      {
        day:"Wednesday",
         groups: [
           {
             day: "Wednesday",
             hour: "18:00",
             players: [
              {id: "1", name: "Player", surname: "One", age: 7 },
              {id: "2", name: "Player", surname: "Two", age: 8 },
              {id: "3", name: "Player", surname: "Three", age: 6 }
             ]
            },
            {
              day: "Wednesday",
              hour: "19:00",
              players: [
               {id: "1", name: "Player", surname: "One", age: 7 },
               {id: "2", name: "Player", surname: "Two", age: 8 }
              ]
             }
          ]
        }
]

  constructor() { }

  ngOnInit() {
  }

}
