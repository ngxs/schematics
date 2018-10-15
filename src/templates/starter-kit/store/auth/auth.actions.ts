import { Authentication } from './model/auth.model';

export class GetAuthData {
    public static readonly type = '[Auth] Auth data';

    constructor(public payload: Authentication) {
    }
}
