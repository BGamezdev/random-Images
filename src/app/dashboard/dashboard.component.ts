import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imageJava = 'assets/java-logo.png' ;
  imageAndroid = 'assets/android-logo.svg'; 
  imageCchar = 'assets/cchar-logo.png'; 
  imagePhyton = 'assets/python-logo.png'; 

  arrayImages = [
    { 
      name : 'Java',
      path: 'assets/java-logo.png'
    },
    { 
      name : 'Android',
      path: 'assets/android-logo.svg'
    },
    { 
      name : 'C#',
      path: 'assets/cchar-logo.png'
    },
    { 
      name : 'Python',
      path: 'assets/python-logo.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  randomImage(){
    this.arrayImages.sort(function() { return Math.random() - 0.5 });
    let date = new Date();
    Swal.fire(date.toString());
  }
}
