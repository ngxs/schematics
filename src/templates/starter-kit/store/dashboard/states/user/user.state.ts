import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Person } from './model/person.model';
import { SetUser } from './user.actions';

@State<Person>({
    name: 'user',
    defaults: new Person()
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
