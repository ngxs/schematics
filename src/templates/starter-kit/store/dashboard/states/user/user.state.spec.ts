import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { PersonStateModel, UserState } from './user.state';
import { SetUser } from './user.actions';

describe('[TEST]: User state', () => {
    let store: Store;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([UserState])]
        }).compileComponents().then();
        store = TestBed.get(Store);
    }));

    it('Should be state is PersonStateModel', () => {
        const User: PersonStateModel = {
            userId: '',
            departmentCode: '',
            departmentName: '',
            email: '',
            firstName: '',
            lastName: '',
            fullName: '',
            positionId: '',
            positionName: ''
        };
        store.dispatch(new SetUser(User));
        const expected = store.selectSnapshot(
            ({ user }) => user
        );

        expect(expected).toEqual(User);
    });

    it('Should be state is filled PersonStateModel', () => {
        const User: PersonStateModel = {
            userId: '12',
            departmentCode: '2392',
            departmentName: 'Main office',
            email: 'agordon@google.com',
            firstName: 'Adam',
            lastName: 'Gordon',
            fullName: 'Adam Gordon',
            positionId: '102003',
            positionName: 'admin'
        };

        const actual = User;

        store.dispatch(new SetUser(User));
        const expected = store.selectSnapshot<PersonStateModel>(
            ({ user }) => user
        );

        expect(actual).toEqual(expected);

    });
});
