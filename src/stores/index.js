import AdvesaApi from './AdvesaApi';

class RootStore {
  constructor() {
    this.advesaApi = new AdvesaApi();
  }
}

const rootStore = new RootStore();

export default rootStore;