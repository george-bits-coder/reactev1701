import { ADDJ, SUBM, SERR } from "./actionTypes";

export const submitjobs = (data) => ({
  type: ADDJ,
  payload: data
});

export const submiterror = () => ({
  type: SERR
});

export const submitloading = () => ({
  type: SUBM
});
