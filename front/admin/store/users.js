export const state = () => ({
  users:[],
  user: {}
})

export const mutations = {
  setUsers(state, res) {
    state.users = res
  },
}

export const actions = {
  async getList({ commit, state }) {
    await this.$axios
      .$get('/users',{
        params: {
          limit: 50,
          offset: 0
        }
      })
      .then((res) => {
        commit('setUsers', res)
      })
      .catch((e)=> {
        console.log(e)
      })
  },
}

export const getters = {
  users: (state) => state.users,
}
