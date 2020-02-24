import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { StateName } from '../enums';

export class CloseSidenav {
  static readonly type = '[Sidenav] CloseSidenav';
}

export class OpenSidenav {
  static readonly type = '[Sidenav] OpenSidenav';
}

export interface SidenavModel {
  opened: boolean;
  width: number;
}

@State<boolean>({
  name: StateName.SIDENAV,
  defaults: true
})
@Injectable({
  providedIn: 'root'
})
export class SidenavState {

  @Action(CloseSidenav)
  closeSidenav(ctx: StateContext<boolean>): void {
    ctx.setState(false);
  }

  @Action(OpenSidenav)
  openSidenav(ctx: StateContext<boolean>): void {
    ctx.setState(true);
  }
}
