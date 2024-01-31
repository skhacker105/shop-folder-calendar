import { AttendanceState, IAttendance, IContact } from "shop-folder-core";


export class Attendance implements IAttendance{

  contactId: string;
  objContact?: IContact | undefined;
  state: AttendanceState;
  attendanceDate: Date;
  id?: number | undefined;
  createdBy: number;
  createdOn: Date;
  isSelected: boolean;
  markSelected?(): void {
    throw new Error("Method not implemented.");
  }
  markUnselected?(): void {
    throw new Error("Method not implemented.");
  }
  toggleSelection?(): void {
    throw new Error("Method not implemented.");
  }

  constructor(createdBy: string, state: string,obj?: any) {
    this.contactId = obj && obj.contactId ? obj.contactId : 0;
    this.state = obj && obj.state ? obj.state : state;
    this.attendanceDate = obj && obj.attendanceDate ? obj.attendanceDate : new Date();
    this.createdBy = obj && obj.createdBy ? obj.createdBy : createdBy;
    this.createdOn = obj && obj.createdOn ? obj.createdOn : new Date();
    this.isSelected = false;
  }

}
