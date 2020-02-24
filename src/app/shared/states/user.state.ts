import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { StateName } from '../enums';
import { User } from '../interfaces';

export class Login {
  static readonly type = '[User] Login';
  constructor(
    public readonly user: User
  ) { }
}
export class Logout {
  static readonly type = '[User] Logout';
}

@State<boolean>({
  name: StateName.USER,
  defaults: true
})
@Injectable({
  providedIn: 'root'
})
export class UserState {
  @Action(Login)
  login(ctx: StateContext<User>, action: Login): void {
    ctx.setState(action.user);
  }

  @Action(Logout)
  logout(ctx: StateContext<User>, _: Logout): void {
    ctx.setState(null);
  }
}
