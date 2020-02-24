import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../../environments/environment';
import { Request } from '../../pages/dashboard/home-dashboard/interfaces';
import { ObjectType } from '../enums';

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
    return this.http.get<Request[]>(`${environment.get_all_entities_instances_url}/${this.localStorageService.getGuid()}/${ObjectType.Request}`);
  }

  /**
   * Retrieve the details of actions in progress
   */
  getDetailActionsInProgress(id: string): Observable<Request> {
    return this.http.get<Request>(`${environment.get_all_entities_instances_url}/${this.localStorageService.getGuid()}/${ObjectType.Request}/${id}`);
  }
}
