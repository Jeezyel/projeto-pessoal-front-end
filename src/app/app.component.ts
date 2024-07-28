import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private router: Router,
  ){

  }
  
  irParaLogin(){
    this.router.navigateByUrl('/login')
  }
  irParaUpload(){
    this.router.navigateByUrl('/upload')
  }
  irParaHome(){
    this.router.navigateByUrl('/home')
  }

}
