import { Vue } from "./install";
class Store {
  constructor(options) {
    const { state, mutations, getters } = options;
    this._vm = new Vue({
      data: {
        $$state: state,
      },
    });
  }
  get state() {
    return this._vm._data.$$state;
  }
}

export default Store;
