import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { DummyError } from 'onka-angular-admin-core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log('global error handler', error.message);
    if (error instanceof DummyError) {
      return;
    }
    if (!environment.production) throw error;
  }
}
