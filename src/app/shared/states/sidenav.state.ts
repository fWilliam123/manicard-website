import { Action, State, StateContext } from '@ngxs/store';
import { StateName } from '../enums/state-name.enum';

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
