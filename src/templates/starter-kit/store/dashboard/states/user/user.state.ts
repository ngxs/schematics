import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Person } from './model/person.model';
import { SetUser } from './user.actions';

export interface PersonStateModel {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    positionId: string;
    positionName: string;
    departmentCode: string;
    departmentName: string;
}

@State<PersonStateModel>({
    name: 'user',
    defaults: {
        userId: '',
        email: '',
        firstName: '',
        lastName: '',
        fullName: '',
        positionId: '',
        positionName: '',
        departmentCode: '',
        departmentName: ''
    }
})
export class UserState {

    @Selector()
    public static getUser(state: Person): Person {
        return state;
    }

    @Action(SetUser)
    public update(ctx: StateContext<Person>, { payload }: SetUser) {
        ctx.setState(payload);
    }

}
