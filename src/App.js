import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const validationSchema = yup.object().shape({
  password: yup.string().required("Required").min(6),
  email: yup.string().email().required("Required")
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { email: "", password: "" }
  });
  const onSubmit = data => console.log(data);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="column">
        <input
          name="email"
          placeholder="email"
          ref={register}
          error={errors.email}          
        />
        <p>
          {errors.email && `${errors.email.message}`}
        </p>
        <input
          name="password"
          type="password"
          placeholder="password"
          ref={register}
          error={errors.password}          
        />
        <p>
          {errors.password && `${errors.password.message}`}
        </p>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

