import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {
  ngOnInit() {
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.onload = () => {
      console.log('Calendly widget script loaded successfully.');
    };
    calendlyScript.onerror = (error) => {
      console.error('Error loading Calendly widget script:', error);
    };
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);
  }
}
