
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

// Duration
const durationNormal = 2000;
const durationError = 3000;

export function doingSnackBar(snackBar: MatSnackBar, message: string): MatSnackBarRef<SimpleSnackBar> {
  return snackBar.open(message);
}

export function doneSnackBar(snackBar: MatSnackBar, message: string): MatSnackBarRef<SimpleSnackBar> {
  return snackBar.open(message, 'Ok', {
    duration: durationNormal,
  });
}

export function doneSnackBarAction(snackBar: MatSnackBar, message: string): MatSnackBarRef<SimpleSnackBar> {
  return snackBar.open(message, 'Ok')
}

export function errorSnackBar(snackBar: MatSnackBar, error: HttpErrorResponse, message?: string): MatSnackBarRef<SimpleSnackBar> {
  return snackBar.open(message || `Erreur ${error.status} : ${error.statusText}.`, 'Ok', {
    duration: durationError,
  });
}

export function soonSnackBar(snackBar: MatSnackBar, message: string): MatSnackBarRef<SimpleSnackBar> {
  return snackBar.open(message, 'Ok', {
    duration: durationError,
  });
}
