import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Verificar si el token es válido usando el AuthService
  return authService.verifyToken().pipe(
    map(isAuthenticated => 
      isAuthenticated ? true : router.createUrlTree(['auth', 'login']) // Si no está autenticado, redirigir a login
    )
  );
};


// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { map } from 'rxjs/operators';

// export const authGuard: CanActivateFn = (route, state) => { 
//   // const isAuthenticated = !!localStorage.getItem('token');
//   // const router = inject(Router);
//   // return isAuthenticated ? true : router.createUrlTree(['auth', 'login']);
//   const router = inject(Router);
//   const authService = inject(AuthService);

//   return authService
//   .verifyToken()
//   .pipe(
//     map((isAuthenticated)=> 
//       isAuthenticated ? true : router.createUrlTree(['auth', 'login']))
//   );
// };
  