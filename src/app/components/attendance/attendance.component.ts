import { Component, OnInit } from '@angular/core';
import { Attendance } from '../../models';
import { AttendanceState } from 'shop-folder-core';
import { CommonModule } from '@angular/common';
import { DynamicLayoutComponent } from 'shop-folder-component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { takeUntil } from 'rxjs';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    DynamicLayoutComponent,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule
  ],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {
  selected: Date | null | undefined;

  constructor(private attendanceService:AttendanceService){}
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
