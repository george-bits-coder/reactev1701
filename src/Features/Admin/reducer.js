import { ADDJ, SUBM, SERR } from "./actionTypes";

const jobsdata = {
  loading: false,
  success: false,
  error: false,
  company: [],
  title: [],
  salary: [],
  desc: [],
  loc: [],
  type: []
};

export const reducer = (state = jobsdata, { type, payload }) => {
  switch (type) {
    case SUBM:
      return {
        ...state,
        loading: true,
        error: false,
        success: false
      };
    case SERR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true
      };
    case ADDJ:
      return {
        ...state,
        loading: false,
        success: true,
        error: true,
        company: [...state.company, payload.company],
        title: [...state.company, payload.job],
        salary: [...state.company, payload.salary],
        desc: [...state.company, payload.description],
        loc: [...state.company, payload.location],
        type: [...state.company, payload.jobtype]
      };

    default:
      return state;
  }
};
