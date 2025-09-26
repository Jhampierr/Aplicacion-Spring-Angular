import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  //Si se borra el token de manera manual desde DevTools se dispara este evento
  //Te saca de la pagina y te regresa al login
  private storageListener = (event: StorageEvent) => {
    if (event.key === 'token' && !event.newValue) {
      this.router.navigate(['/login']);
    }
  };

  constructor(private router: Router) {}

  ngOnInit() {
    window.addEventListener('storage', this.storageListener);
  }

  ngOnDestroy() {
    window.removeEventListener('storage', this.storageListener);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
