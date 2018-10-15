import { State, Action, StateContext } from '@ngxs/store';
import { <%= classify(name) %>Action } from './<%= dasherize(name) %>.actions';

export class <%= classify(name) %>StateModel {
  public items: string[];
}

@State<<%= classify(name) %>StateModel>({
  name: '<%= camelize(name) %>',
  defaults: {
    items: []
  }
})
export class <%= classify(name) %>State {
  @Action(<%= classify(name) %>Action)
  public add(ctx: StateContext<<%= classify(name) %>StateModel>, action: <%= classify(name) %>Action) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload ] });
  }
}
