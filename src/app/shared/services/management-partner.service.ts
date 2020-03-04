import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Request } from '../../pages/dashboard/home-dashboard/interfaces';
import { User } from '../../pages/dashboard/user-management/interfaces';
import { ObjectType } from '../enums';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ManagementPartnerService {

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) { }

  /**
   * Retrieve the list of actions in progress
   */
  getActionsInProgress(): Observable<Request[]> {
    return this.http.get<Request[]>(`${environment.get_all_entities_instances_url}/${this.localStorageService.getGuid()}/${ObjectType.REQUEST}`);
  }

  /**
   * Retrieve the details of actions in progress
   */
  getDetailActionsInProgress(id: string): Observable<Request> {
    return this.http.get<Request>(`${environment.get_all_entities_instances_url}/${this.localStorageService.getGuid()}/${ObjectType.REQUEST}/${id}`);
  }

  /**
   * Retrieve list of users
   * @param id code
   */
  getUsers(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.get_all_entities_instances_url}/${this.localStorageService.getGuid()}/${ObjectType.USER}/${id}`);
  }
}
