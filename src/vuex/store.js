import { Vue } from "./install";
import { forEach } from "./util";
class Store {
  constructor(options) {
    const { state, mutations, getters, actions } = options;
    const computed = {};

    this.getters = {};
    this.mutations = {};
    this.actions = {};
    this.getters = {};
    forEach(getters, (key, fn) => {
      computed[key] = () => {
        return fn(this.state);
      };
      Object.defineProperty(this.getters, key, {
        get: () => {
          return this._vm[key];
        },
      });
    });
    forEach(mutations, (key, fn) => {
      this.mutations[key] = (payload) => {
        fn(this.state, payload);
      };
    });
    forEach(actions, (key, fn) => {
      this.actions[key] = (payload) => {
        fn(this, payload);
      };
    });

    this._vm = new Vue({
      data: {
        $$state: state,
      },
      computed,
    });
  }
  get state() {
    return this._vm._data.$$state;
  }
  commit = (type, payload) => {
    this.mutations[type](payload);
  };
  dispatch = (type, payload) => {
    this.actions[type](payload);
  };
}

export default Store;
