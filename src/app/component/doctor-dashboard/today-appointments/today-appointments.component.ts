import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppointmentsService } from '../../../services/appointments.service';
import { Iappointement } from '../../../Models/appointement';
import { appointments } from '../top-component/appointmentData';

@Component({
  selector: 'app-today-appointments',
  standalone: true,
  imports: [],
  templateUrl: './today-appointments.component.html',
  styleUrl: './today-appointments.component.scss'
})
export class TodayAppointmentsComponent implements OnInit{
  //lastVisits: { patientId: string, lastVisit: any }[] = [];
  todayAppointments: any[] = [];
  constructor(private appointmentService:AppointmentsService){

  }
  ngOnInit(): void {
    const doctorId = 1; // Replace with the specific doctor's ID
    this.appointmentService.getAppointmentsForDoctorToday(doctorId).subscribe(appointments => {
      appointments.forEach(appointment => {
        const patientId = appointment.patientId;
        this.appointmentService.getLastVisit(patientId).subscribe(lastVisit => {
          this.appointmentService.getPatient(patientId).subscribe(patient => {
            this.todayAppointments.push({
              patientName: patient.name,
              gender: patient.gender,
              report: patient.report,
              lastVisitDate: lastVisit ? lastVisit.date : null
            });
          });
        });
      });
    });
  }

//   listOfAppointments:Iappointement[]=[];
//   appointmentsToday:Iappointement[]=[];
//   doctorAppointments:Iappointement[]=[];
//   showData(){
//     console.log(this.appointmentsToday);
//   }
//   // fetchAppointments(){
//   //   this.appointmentService.getAllAppointements().subscribe(appointments=>{
//   //     const today= new Date();
//   //     this.appointmentsToday=appointments.filter(appointment=>{
//   //       const appointementDate=new Date(appointment.date);
//   //       return appointementDate.toDateString()===today.toDateString();
//   //     })

      
      
//   //     this.listOfAppointments=appointments});
//   // }
//   // fetchDoctorAppointments(doctorId:number){
//   //   this.appointmentService.getDoctorAppointments(doctorId).subscribe(appointments=>{
//   //     this.doctorAppointments=appointments;
//   //   })
//   // }
//   getTodayAppointments(doctorId:number){
//     const today= new Date();
//     this.appointmentService.getDoctorAppointments(doctorId).subscribe(appointments=>{

//     this.appointmentsToday=appointments.filter(appointment=>{
//       const appointementDate=new Date(appointment.date);
//       return appointementDate.toDateString()===today.toDateString();
//     })
//    })
//   }
//   getLastVisitBeforeToday(appointments: any[]): any {
//     const today = new Date();
//     const appointmentsBeforeToday = appointments.filter(appointment => {
//       const appointmentDate = new Date(appointment.date);
//       return appointmentDate < today;
//     });
//     return appointmentsBeforeToday.length > 0 ? appointmentsBeforeToday[appointmentsBeforeToday.length - 1] : null;
//   }

//   getLastVisits(){
//     this.appointmentService.getAllPatientIds().subscribe(patientIds => {
//       patientIds.forEach(patientId => {
//         this.appointmentService.getAppointments(patientId, 'doctorId').subscribe(appointments => {
//           const lastVisit = this.getLastVisitBeforeToday(appointments);
//           this.lastVisits.push({ patientId, lastVisit });
//         });
//       });
//     });
//   }
//   ngOnInit(): void {

//     //this.fetchAppointments()
//    // this.fetchDoctorAppointments(1); 
//    this.getTodayAppointments(1);

// this.getLastVisits()


    
//   }
  


}
