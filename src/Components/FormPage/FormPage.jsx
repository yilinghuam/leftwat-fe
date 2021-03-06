import React, { useState, useEffect } from "react";
import "./FormPage.scss";
import { FormTextField, Button } from "..";
import axios from "axios";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const FormPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  useEffect(() => {
    // call to backend here
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://leftwat-be.herokuapp.com/api/v1/landing/register", {
        email,
        password,
        confirm_password,
      })
      .then((response) => {
        console.log(response);
        console.log(props);
        if (response.status === 200) {
          props.history.push("/login");
          toast(response.data.message)
        }
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response);
        console.log(err.response.data.details[0].message);
        toast(err.response.data.details[0].message)

      });
  };

  return (
    <form className="col" onSubmit={(e) => handleFormSubmit(e)}>
      <FormTextField
        name="email"
        type="text"
        placeholder="xyz@gmail.com"
        onChange={setEmail}
      />
      <FormTextField
        name="password"
        type="password"
        placeholder="Password"
        onChange={setPassword}
      />
      <FormTextField
        name="confirm_password"
        type="password"
        placeholder="Confirm Password"
        onChange={setConfirm_password}
      />
      <Button type="submit" text="register" />
    </form>
  );
};
