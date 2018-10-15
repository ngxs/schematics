import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { DictionaryState } from './dictionary.state';
import { SetDictionaryData } from './dictionary.actions';
import { DictionaryResponseModel } from './model/dictionary-response.model';

const data = [
    {
        id: '323',
        departmentCode: '2392',
        departmentName: 'Main office',
        mainCuratorUserId: 'admin',
        mainCuratorName: 'Adam Gordon',
        backupCuratorUserId: 'manager',
        backupCuratorName: 'Alexander Chester'
    },
    {
        id: '322',
        departmentCode: '2999',
        departmentName: 'New York office',
        mainCuratorUserId: 'manager',
        mainCuratorName: 'Alexander Chester',
        backupCuratorUserId: 'manager',
        backupCuratorName: 'Amanda Brian'
    }
];

describe('[TEST]: DictionaryState', () => {
    let store: Store;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([DictionaryState])]
        }).compileComponents().then();
        store = TestBed.get(Store);
    }));

    it('Should be correct dispatch and dictionary is empty', () => {
        store.dispatch(new SetDictionaryData(new DictionaryResponseModel()));
        const expected = store.selectSnapshot(DictionaryState.getDictionaryState);
        const actual: DictionaryResponseModel = new DictionaryResponseModel();
        expect(expected).toEqual(actual);
    });

    it('Should be state is filled DictionaryResponseModel()', () => {
        const Dictionary: DictionaryResponseModel = new DictionaryResponseModel();
        Dictionary.content = data;
        Dictionary.page = 0;
        Dictionary.size = 20;
        Dictionary.totalElements = 2;
        Dictionary.totalPages = 1;

        const actual = Dictionary;
        store.dispatch(new SetDictionaryData(actual));
        const expected = store.selectSnapshot(DictionaryState.getDictionaryState);
        expect(actual).toEqual(expected);
    });

});
