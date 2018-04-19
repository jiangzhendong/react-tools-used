import key from 'keymaster';
export default {

  namespace: 'example',

  state: {
    userId:''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({type:'save'}) });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
