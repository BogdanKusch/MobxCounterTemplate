import {Counter} from './counter';

export const createRootStore = () => {
  const counter = new Counter();
  return {counter};
};
