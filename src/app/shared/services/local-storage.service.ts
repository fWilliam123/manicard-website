import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../enums/local-storage-key.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // Token
  setToken(token: string): void {
    return localStorage.setItem(LocalStorageKey.TOKEN, token);
  }
  getToken(): string {
    return localStorage.getItem(LocalStorageKey.TOKEN);
  }
  removeToken(): void {
    return localStorage.removeItem(LocalStorageKey.TOKEN);
  }

  // Language
  setLanguage(language: string): void {
    return localStorage.setItem(LocalStorageKey.LANGUAGE, language);
  }
  getLanguage(): string {
    return localStorage.getItem(LocalStorageKey.LANGUAGE);
  }
  removeLanguage(): void {
    return localStorage.removeItem(LocalStorageKey.LANGUAGE);
  }

}
