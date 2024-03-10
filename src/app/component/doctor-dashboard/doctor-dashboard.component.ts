import { Component } from '@angular/core';
import { TopComponentComponent } from './top-component/top-component.component';
import { ChartsComponent } from './charts/charts.component';
import { TodayAppointmentsComponent } from './today-appointments/today-appointments.component';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [TopComponentComponent, ChartsComponent, TodayAppointmentsComponent],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.scss',
})
export class DoctorDashboardComponent {}
