import { Action, State, StateContext } from '@ngxs/store';
import { StateName } from '../enums/state-name.enum';
import { User } from '../interfaces/user';

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
