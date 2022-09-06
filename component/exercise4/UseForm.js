import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const UseForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("herllo");
      })}
    >
      <input
        {...register("fname", {
          required: "This is required",

          pattern: {
            value: /^[a-z|A-Z][a-z]{1,10}-?\s?[a-zA-Z]{0,10}\s*/,
            message: "only alphabet character and/or space and -",
          },
        })}
        placeholder="First Name"
      />
      <p>{errors.fname?.message}</p>
      <input
        {...register("lname", {
          required: "This is required",
          pattern: {
            value: /^[a-z|A-Z][a-z]{1,10}-?\s?[a-zA-Z]{0,10}\s*/,
            message: "only alphabet character and/or space and -",
          },
        })}
        placeholder="Last Name"
      ></input>
      <p>{errors.lname?.message}</p>
      <input
        {...register("streetName", {
          required: "This is required",
          patern: {
            value: /[a-z\s-]+/gi,
            message: "only alphabet character and/or space",
          },
        })}
        placeholder="Street Name"
      ></input>
      <p>{errors.streetName?.message}</p>
      <input
        {...register("streetNumber", {
          required: "This is required",
          pattern: { value: /^\d+$/, message: "Only digits" },
          valueAsNumber: true,
        })}
        placeholder="Street Number"
      ></input>
      <p>{errors.streetNumber?.message}</p>
      <input
        {...register("email", {
          required: "This Field is required",
          pattern: {
            value: /^[\w-\.]+@[\w-]+\.+[\w-]{2,4}$/,
            message: "Invalid email address",
          },
        })}
        placeholder="Email"
      ></input>
      <p>{errors.email?.message}</p>
      <input
        {...register("postcode", {
          required: "This field is required",
          pattern: { value: /^\d{4}\s?[A-Z]{2}/i },
          message: "Postcode must follow the following pattern 0000 AA",
        })}
        placeholder="Postcode"
      ></input>
      <p>{errors.postcode?.message}</p>
      <input
        {...register("city", {
          required: "This Field is Required",
          pattern: {
            value: /[a-z\s-]+/gi,
            message: "Only Alphabeth characters and spaces",
          },
        })}
        placeholder="city"
      ></input>
      <p>{errors.city?.message}</p>
      <input
        {...register("bank", {
          required: "This Field is Required",
          pattern: {
            value: /[a-z\s-]+/gi,
            message: "Only Alphabeth and spaces are allowed",
          },
        })}
        placeholder="bank"
      ></input>
      <p style={{ color: "red" }}>{errors.bank?.message}</p>
      <input type="submit" />
    </form>
  );
};

UseForm.propTypes = {};

export default UseForm;
