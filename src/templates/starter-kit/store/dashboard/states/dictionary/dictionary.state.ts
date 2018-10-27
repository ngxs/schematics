import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DictionaryResponseModel } from './model/dictionary-response.model';
import { DictionaryReset, SetDictionaryData } from './dictionary.actions';

export interface DictionaryStateModel {
     content: any[];
     page: number;
     size: number;
     totalPages: number;
     totalElements: number;
}

@State<DictionaryStateModel>({
    name: 'dictionary',
    defaults: {
        content: [],
        page: 0,
        size: 0,
        totalPages: 0,
        totalElements: 0
    }
})
export class DictionaryState {

    @Selector()
    public static getDictionaryState(state: DictionaryResponseModel): DictionaryResponseModel {
        return DictionaryState.getInstanceState(state);
    }

    @Selector()
    public static getDictionaryContent(state: DictionaryResponseModel) {
        return state.content;
    }

    private static setInstanceState(state: DictionaryResponseModel): DictionaryResponseModel {
        return { ...state };
    }

    private static getInstanceState(state: DictionaryResponseModel): DictionaryResponseModel {
        return { ...state };
    }

    @Action(SetDictionaryData)
    public setTasks({ setState }: StateContext<DictionaryResponseModel>, { payload }: SetDictionaryData) {
        setState(DictionaryState.setInstanceState(payload));
    }

    @Action(DictionaryReset)
    public resetTasks({ setState }: StateContext<DictionaryResponseModel>) {
        setState(new DictionaryResponseModel());
    }

}
