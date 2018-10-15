import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { UserState } from './user.state';
import { SetUser } from './user.actions';
import { Person } from './model/person.model';

describe('[TEST]: ApplicationListState', () => {
    let store: Store;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([UserState])]
        }).compileComponents().then();
        store = TestBed.get(Store);
    }));

    it('Should be state is Person()', () => {
        store.dispatch(new SetUser(new Person()));
        const expected = store.selectSnapshot(
            ({ user }) => user
        );
        const actual = new Person();

        expect(expected).toEqual(actual);
    });

    it('Should be state is filled Person()', () => {
        const User = new Person();
        User.userId = '12';
        User.departmentCode = '2392';
        User.departmentName = 'Main office';
        User.email = 'agordon@google.com';
        User.firstName = 'Adam';
        User.lastName = 'Gordon';
        User.fullName = 'Adam Gordon';
        User.positionId = '102003';
        User.positionName = 'admin';

        const actual = User;

        store.dispatch(new SetUser(User));
        const expected = store.selectSnapshot<Person>(
            ({ user }) => user
        );

        expect(actual).toEqual(expected);

    });
});
