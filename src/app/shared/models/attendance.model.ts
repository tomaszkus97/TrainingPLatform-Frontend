export interface PlayerAttendance{
    playerId: string;
    attendant: boolean;
}

export class AttendanceModel{
    groupId: string;
    date: string;
    attendance: PlayerAttendance[];
}