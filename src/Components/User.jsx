import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { applyjobs } from "../Features/User/actions";
export const User = () => {
  const { jlist, clist } = useSelector(
    ({ adminState }) => ({
      jlist: adminState.title,
      clist: adminState.company
    }),
    function (prev, curr) {
      let flag = true;
      for (k in prev) {
        if (prev[k] != curr[k]) flag = false;
      }

      return flag;
    }
  );
  const [form1, setForm1] = useState({});
  const handleinp = ({ target: { name, value } }) => {
    setForm1({ ...form1, [name]: value });
  };
  return (
    <>
      <input
        type="text"
        onChange={handleinp}
        name="username"
        placeholder="Your name"
      />
      {jlist.map((e, i) => (
        <div>
          <button>
            {e} job from {clist[i]}
          </button>
          <button
            onClick={() => {
              alert("successfully applied for job");
              console.log(form1.username, e);
              applyjobs({ n: form1.username, j: e });
            }}
          >
            Apply
          </button>
        </div>
      ))}
    </>
  );
};
