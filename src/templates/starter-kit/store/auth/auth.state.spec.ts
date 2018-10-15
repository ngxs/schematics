import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { AuthStateModule } from './auth.state';
import { GetAuthData } from './auth.actions';
import { Authentication } from './model/auth.model';

describe('[TEST]: AuthStore', () => {
    let store: Store;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([AuthStateModule])]
        }).compileComponents().then();
        store = TestBed.get(Store);
    }));

    it('Should be correct dispatch and value is empty', () => {
        store.dispatch(new GetAuthData(new Authentication()));

        store.selectOnce(AuthStateModule.getAuthData).subscribe((authData) => {
            const expected = authData;
            const actual = new Authentication();
            expect(expected).toEqual(actual);
        });

    });

    it('Should be correct dispatch and next value is correct completed', () => {
        const User = new Authentication();
        User.id = '12';
        User.firstName = 'Adam';
        User.lastName = 'Gordon';
        User.email = 'agordon@google.com';
        User.fullName = 'Adam Gordon';
        User.roles = ['ADMIN'];

        store.dispatch(new GetAuthData(User));

        store.selectOnce(AuthStateModule.getAuthData).subscribe((authData) => {
            const expected = authData;
            const actual = User;
            expect(expected).toEqual(actual);
        });

    });

});
