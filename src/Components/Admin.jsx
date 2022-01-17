import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADDJ, SUBM, SERR } from "../Features/Admin/actionTypes";
import {
  submitjobs,
  submiterror,
  submitloading
} from "../Features/Admin/actions";
export const Admin = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleinp = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <div style={{ padding: "15px" }}>
      <div>Welcome. you can post jobs here</div>
      <div>All fields are compulsory</div>
      <input
        type="text"
        onChange={handleinp}
        name="company"
        placeholder="Enter Company Name"
      />
      <br />
      <input
        type="text"
        onChange={handleinp}
        name="job"
        placeholder="Enter Job Title"
      />
      <br />

      <input
        type="text"
        onChange={handleinp}
        name="salary"
        placeholder="Enter Salary range"
      />
      <br />
      <input
        type="text"
        onChange={handleinp}
        name="description"
        placeholder="Enter Job Description"
      />
      <br />

      <input
        type="text"
        onChange={handleinp}
        name="location"
        placeholder="Enter Location"
      />
      <br />
      <input
        type="text"
        onChange={handleinp}
        name="jobtype"
        placeholder="Enter Job Type (remote/office)"
      />
      <br />

      <button
        onClick={() => {
          alert("successfuly submitted job posting");
          dispatch(submitjobs(form));
        }}
      >
        {" "}
        Submit
      </button>
    </div>
  );
};
