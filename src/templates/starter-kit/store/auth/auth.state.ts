import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Authentication } from './model/auth.model';
import { GetAuthData } from './auth.actions';

export interface AuthenticationStateModel {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    roles: string[];
}

@State<AuthenticationStateModel>({
    name: 'authStateModule',
    defaults: {
        id: '',
        firstName: '',
        lastName: '',
        fullName: '',
        email: '',
        roles: []
    }
})
export class AuthStateModule {

    @Selector()
    public static getAuthData(state: Authentication): Authentication {
        return AuthStateModule.getInstanceState(state);
    }

    private static setInstanceState(state: Authentication): Authentication {
        return { ...state };
    }

    private static getInstanceState(state: Authentication): Authentication {
        return { ...state };
    }

    @Action(GetAuthData)
    public get({ setState }: StateContext<Authentication>, { payload }: GetAuthData) {
        setState(AuthStateModule.setInstanceState(payload));
    }

}
