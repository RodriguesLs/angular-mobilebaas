import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MeetingListComponent} from '../meeting-list/meeting-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule, MeetingListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
