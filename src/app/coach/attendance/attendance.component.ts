import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/shared/models/group';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  todaysGroups: Group[] = [
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

   displayedColumns = ['name', 'surname', 'attendance'];


  constructor() { }

  ngOnInit() {
  }

}
