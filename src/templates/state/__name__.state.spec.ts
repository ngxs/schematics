import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { <%= classify(name) %>State, <%= classify(name) %>StateModel } from './<%= dasherize(name) %>.state';

describe('<%= classify(name) %> state', () => {
    let store: Store;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([<%= classify(name) %>State])]
        }).compileComponents();
        store = TestBed.get(Store);
    }));

    it('should create an empty state', () => {
        const expected = store.selectSnapshot(<%= classify(name) %>State.getState);
        const actual: <%= classify(name) %>StateModel = {
            items: []
        };
        expect(expected).toEqual(actual);
    });

});
