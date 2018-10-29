import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { AuthenticationStateModel, AuthStateModule } from './auth.state';
import { SetAuthData } from './auth.actions';

describe('[TEST]: AuthStore', () => {
    let store: Store;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([AuthStateModule])]
        }).compileComponents().then();
        store = TestBed.get(Store);
    }));

    it('Should be correct dispatch and value is empty', () => {
        const Authentication: AuthenticationStateModel = {
            id: '',
            firstName: '',
            lastName: '',
            fullName: '',
            email: '',
            roles: []
        };
        store.dispatch(new SetAuthData(Authentication));
        store.selectOnce(AuthStateModule.getAuthData).subscribe((authData) => {
            expect(authData).toEqual(Authentication);
        });

    });

    it('Should be correct dispatch and next value is correct completed', () => {
        const authentication: AuthenticationStateModel = {
            id: '12',
            firstName: 'Adam',
            lastName: 'Gordon',
            fullName: 'Adam Gordon',
            email: 'agordon@google.com',
            roles: ['ADMIN']
        };

        store.dispatch(new SetAuthData(authentication));
        store.selectOnce(AuthStateModule.getAuthData).subscribe((authData) => {
            expect(authData).toEqual(authentication);
        });

    });

});
