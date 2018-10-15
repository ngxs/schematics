import { Person } from './model/person.model';

export class SetUser {
    public static readonly type = '[SetUser] action';
    constructor(public payload: Person) {
    }
}
