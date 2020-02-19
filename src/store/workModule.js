export default {
  namespaced: true,
  state: {
    selectedGenres: new Set()
  },
  mutations: {
    selectGenre(state, genre) {
      state.selectedGenres.add(genre);
      state.selectedGenres = new Set(state.selectedGenres);
    },
    unselectGenre(state, genre) {
      state.selectedGenres.delete(genre);
      state.selectedGenres = new Set(state.selectedGenres);
    }
  }
};
