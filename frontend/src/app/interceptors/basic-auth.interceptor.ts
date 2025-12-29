import { HttpInterceptorFn } from '@angular/common/http';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {
    const authHeader = localStorage.getItem('authHeader');

    if (authHeader) {
        const authReq = req.clone({
            setHeaders: {
                Authorization: authHeader
            }
        });
        return next(authReq);
    }

    return next(req);
};
