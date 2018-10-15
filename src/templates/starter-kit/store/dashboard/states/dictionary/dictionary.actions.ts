import { DictionaryResponseModel } from './model/dictionary-response.model';

export class SetDictionaryData {
    public static readonly type = '[Dictionary] Set dictionary data action';

    constructor(public payload: DictionaryResponseModel) {
    }
}

export class DictionaryReset {
    public static readonly type = '[Dictionary] Reset dictionary action';

    constructor() {
    }
}
