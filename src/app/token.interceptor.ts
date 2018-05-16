import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	  const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Token 32bd12bdbc056504ce77de091a5335e7957ce689')
    });
    console.log(authReq)
    return next.handle(authReq);
  }
}