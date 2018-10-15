import { AuthenticationStateModel } from './auth.state';

export class GetAuthData {
    public static readonly type = '[Auth] Auth data';

    constructor(public payload: AuthenticationStateModel) {
    }
}
