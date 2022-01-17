import { APPLY } from "./actionTypes";

const jobd = { names: [], jobs: [] };

export const reducer = (state = jobd, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case APPLY:
      return {
        ...state,
        names: [...state.names, payload.n],
        jobs: [...state.jobs, payload.j]
      };

    default:
      return state;
  }
};
