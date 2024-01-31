import { Component, OnInit } from '@angular/core';
import { Attendance } from '../../models';
import { AttendanceState } from 'shop-folder-core';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    let createdBy = 'Saurabh Kumar';
    let state = AttendanceState.login;
    this.createAttendance(createdBy, state)
  }

  createAttendance(createdBy: string, state: string, isMe = false) {
    return new Attendance('', '', {
      contactId: '12',
      state: state,
      attendanceDate: new Date(),
      createdBy: createdBy,
      createdOn: new Date(),
      isSelected: true
    })
  }
}
