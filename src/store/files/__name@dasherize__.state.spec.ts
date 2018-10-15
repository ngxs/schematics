import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { {{pascalCase name}}State } from './<%= dasherize(name) %>.state';
import { {{pascalCase name}}Action } from './<%= dasherize(name) %>.actions';

describe('<%= classify(name) %> actions', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([<%= classify(name) %>State])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    store.dispatch(new <%= classify(name) %>Action('item-1'));
    store.select(state => state.<%= classify(name) %>.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
    });
  });

});