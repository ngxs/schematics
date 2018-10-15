import { State, Selector } from '@ngxs/store';

export class <%= classify(name) %>StateModel {
public items: string[] = [];
}

@State<<%= classify(name) %>StateModel>({
    name: '<%= camelize(name) %>',
    defaults: new <%= classify(name) %>StateModel()
})
export class <%= classify(name) %>State {

    @Selector()
    public static getState(state: <%= classify(name) %>StateModel) {
        return state;
    }

}
