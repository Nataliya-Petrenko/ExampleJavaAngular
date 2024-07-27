import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-comp',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './my.component.html',
  styleUrl: './my.component.css'
})
export class MyComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      response => {
      console.log('Data fetched successfully:', response);
      this.data = response;
    },
    error => {
      console.error('Error fetching data:', error);
    }
  );
  }

}
