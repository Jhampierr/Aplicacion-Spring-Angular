import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService:AuthService, private router:Router){}

  onSubmit():void{
    this.authService.register(this.username, this.password).subscribe(
      ()=> {
        Swal.fire({
          title: 'Nuevo usuario registrado!',
          text: 'Usuario  ' + this.username +"\tregistrado con exito",
          icon: 'success'
        });
        this.router.navigate(['/login']);
      },
      (error) => {
        this.error = 'Error en el registro. Por favor, inténtelo de nuevo.'
      }
    )
  }

}
