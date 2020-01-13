import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EasySnackBarService {

  // Duration
  private readonly durationNormal = 2000;
  private readonly durationError = 3000;

  constructor(
    private readonly snackBar: MatSnackBar
  ) { }

  doing(message: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message);
  }

  done(message: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, 'Ok', {
      duration: this.durationNormal,
    });
  }

  doneAction(message: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, 'Ok');
  }

  error(error: HttpErrorResponse, message?: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message || `Erreur ${error.status} : ${error.statusText}.`, 'Ok', {
      duration: this.durationError,
    });
  }

  soon(message: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, 'Ok', {
      duration: this.durationError,
    });
  }
}
