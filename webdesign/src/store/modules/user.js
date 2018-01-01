import * as types from '../mutationTypes'

/**
 * state handle values
 */
const state = {
    user: {}
};

/**
 * mutation update/set the state
 */
const mutations = {
    [types.SET_USER](state, user) {
        state.user = user;
    },
    [types.UPDATE_USER](state, user) {
        state.user = user
    },
};

/**
 * actions trigger mutations to update state expecially for async
 * api call to be placed here
 */
const actions = {
    initializeUser: ({ commit }) => {
        const user = {
            name: 'kevin',
            email: 'kevin.batongbakal@tooltwist.com',
            age: 22
        }

        commit(types.SET_USER, user);
    },
    updateUser: ({ commit }) => {
        const updateUser = state.user;
        updateUser.name = 'kevin batongbakal';
        updateUser.age = 23;

        commit(types.UPDATE_USER, updateUser);
    }
};

/**
 * use to expose state
 */
const getters = {
    user: state => {
        return state.user;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};