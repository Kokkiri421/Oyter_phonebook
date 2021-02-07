import { createStore } from 'vuex'
import { CONTACTS_ON_PAGE } from '@/api/routes'

export default createStore({
  state: {
      contacts: [],
      pages: 0,
      elementCount: 0,
      error: null,
  },
  mutations: {
      setContacts(state,contacts){
          state.contacts = contacts;      
      },
      setPages(state, pages){
          state.pages = pages;
      },
      setElementCount(state, elementCount){
        state.elementCount = elementCount;
    },
      setError(state, error){
          state.error = error;
      }
      
  },
  actions: {
      fetchContacts({ commit }, {page, size}) {
        
        fetch(CONTACTS_ON_PAGE(page,size))
            .then(res => res.json())
            .then((result) => {
                if (result['message']) {
                    commit('setError',result['message']);
                } else {
                    const {data,totalCount} = result;
                    commit('setContacts', data);
                    commit('setPages', Math.ceil(totalCount/size));
                    commit('setElementCount', totalCount);
                    commit('setError', null);
                }
                
            });
      }
  },
  getters:{
      getContacts: state => {
        return state.contacts;
    },
      
  }
})
