import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //const authService = new AuthService();
  const authService = inject(AuthService); 
  const token = authService.getToken();

  // 🛑 excluye la URL de login
  if (req.url.includes('/auth/login')) {
    return next(req);
  }

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  return next(req);
};
