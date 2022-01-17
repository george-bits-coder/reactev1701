import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";

export const Company = () => {
  const { candi, jobs } = useSelector(
    ({ userState }) => ({
      candi: userState.names,
      jobs: userState.jobs
    }),
    function (prev, curr) {
      let flag = true;
      for (k in prev) {
        if (prev[k] != curr[k]) flag = false;
      }

      return flag;
    }
  );

  return (
    <div>
      {console.log(candi)}
      {candi.map((e, i) => (
        <div>
          <button>
            {e} applied for job {jobs[i]}
          </button>
        </div>
      ))}
    </div>
  );
};
