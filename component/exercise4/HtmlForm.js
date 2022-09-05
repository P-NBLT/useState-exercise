import React, { useReducer } from "react";
import PropTypes from "prop-types";
import styles from "./HtmlForm.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "GET_fname":
      return {
        ...state,
        fname: { ...state.fname, value: action.payload },
      };
    case "GET_lname":
      return {
        ...state,
        lname: { ...state.lname, value: action.payload },
      };
    case "GET_street":
      return {
        ...state,
        street: { ...state.street, value: action.payload },
      };
    case "GET_streetNumber":
      return {
        ...state,
        streetNumber: { ...state.streetNumber, value: action.payload },
      };
    case "GET_email":
      return {
        ...state,
        email: { ...state.email, value: action.payload },
      };
    case "GET_postcode":
      return {
        ...state,
        postCode: { ...state.postCode, value: action.payload },
      };
    case "GET_city":
      return {
        ...state,
        city: { ...state.city, value: action.payload },
      };
    case "GET_bank":
      return {
        ...state,
        bank: { ...state.bank, value: action.payload },
      };
    case "SET_WARNING_fname_className":
      return {
        ...state,
        fname: { ...state.fname, class: action.payload },
      };
    case "SET_WARNING_lname_className":
      return {
        ...state,
        lname: { ...state.lname, class: action.payload },
      };
    case "SET_WARNING_street_className":
      return {
        ...state,
        street: { ...state.street, class: action.payload },
      };
    case "SET_WARNING_streetNumber_className":
      return {
        ...state,
        streetNumber: { ...state.streetNumber, class: action.payload },
      };
    case "SET_WARNING_email_className":
      return {
        ...state,
        email: { ...state.email, class: action.payload },
      };
    case "SET_WARNING_postcode_className":
      return {
        ...state,
        postCode: { ...state.postCode, class: action.payload },
      };
    case "SET_WARNING_city_className":
      return {
        ...state,
        city: { ...state.city, class: action.payload },
      };
    case "SET_WARNING_bank_className":
      return {
        ...state,
        bank: { ...state.bank, class: action.payload },
      };
    case "SET_ERROR_fname_className":
      return {
        ...state,
        fname: { ...state.fname, class: action.payload },
      };
    case "SET_ERROR_lname_className":
      return {
        ...state,
        lname: { ...state.lname, class: action.payload },
      };
    case "SET_ERROR_street_className":
      return {
        ...state,
        street: { ...state.street, class: action.payload },
      };
    case "SET_ERROR_streetNumber_className":
      return {
        ...state,
        streetNumber: { ...state.streetNumber, class: action.payload },
      };
    case "SET_ERROR_email_className":
      return {
        ...state,
        email: { ...state.email, class: action.payload },
      };
    case "SET_ERROR_postcode_className":
      return {
        ...state,
        postCode: { ...state.postCode, class: action.payload },
      };
    case "SET_ERROR_city_className":
      return {
        ...state,
        city: { ...state.city, class: action.payload },
      };
    case "SET_ERROR_bank_className":
      return {
        ...state,
        bank: { ...state.bank, class: action.payload },
      };
    case "SET_ERROR_MESSAGE_fname":
      return {
        ...state,
        fname: { ...state.fname, errorMessage: action.payload },
      };
    case "SET_ERROR_MESSAGE_lname":
      return {
        ...state,
        lname: { ...state.lname, errorMessage: action.payload },
      };
    case "SET_ERROR_MESSAGE_street":
      return {
        ...state,
        street: { ...state.street, errorMessage: action.payload },
      };
    case "SET_ERROR_MESSAGE_streetNumber":
      return {
        ...state,
        streetNumber: { ...state.streetNumber, errorMessage: action.payload },
      };
    case "SET_ERROR_MESSAGE_email":
      return {
        ...state,
        email: { ...state.email, errorMessage: action.payload },
      };
    case "SET_ERROR_MESSAGE_postCode":
      return {
        ...state,
        postCode: { ...state.postCode, errorMessage: action.payload },
      };
    case "SET_ERROR_MESSAGE_city":
      return {
        ...state,
        city: { ...state.city, errorMessage: action.payload },
      };
    case "SET_ERROR_MESSAGE_bank":
      return {
        ...state,
        bank: { ...state.bank, errorMessage: action.payload },
      };
    default:
      state;
  }
}

const initialState = {
  fname: { value: "", class: " ", errorMessage: false },
  lname: { value: "", class: " ", errorMessage: false },
  street: { value: "", class: " ", errorMessage: false },
  streetNumber: { value: "", class: " ", errorMessage: false },
  email: { value: "", class: " ", errorMessage: false },
  postCode: { value: "", class: " ", errorMessage: false },
  city: { value: "", class: " ", errorMessage: false },
  bank: { value: "", class: " ", errorMessage: false },
};

const HtmlForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function getValue(e) {
    let string = e.target.value;
    return string;
  }

  function warning(e) {
    let string = e.target.value.trim();
    let id = e.target.id;
    let regEx;

    if (string == "") {
      dispatch({ type: `SET_WARNING_${id}_className`, payload: " " });
      return dispatch({ type: `GET_${id}`, payload: string });
    }
    if (id == "fname" || id == "lname") {
      regEx = /^[a-z|A-Z][a-z]{1,10}-?\s?[a-zA-Z]{0,10}\s*/;
    } else if (id == "email") {
      regEx = /^[\w-\.]+@[\w-]+\.+[\w-]{2,4}$/;
    } else if (id == "streetNumber") {
      regEx = /^\d+$/;
    } else if (id == "postcode") {
      regEx = /^\d{4}\s?[A-Z]{2}/i;
    } else if (id == "street" || id == "city" || id == "bank") {
      regEx = /[a-z\s-]+/gi;
    }

    if (string == string.match(regEx)) {
      console.log("FHGIWEUHFUWE");
      dispatch({
        type: `GET_${id}`,
        payload: string,
      });
      dispatch({
        type: `SET_WARNING_${id}_className`,
        payload: "",
      });
    } else {
      dispatch({
        type: `SET_WARNING_${id}_className`,
        payload: styles.warning,
      });
    }
  }

  function controlSubmit(e) {
    e.preventDefault();
    let copy = { ...state };
    Object.entries(copy).map(([k, v]) => {
      console.log(k, v);
      if (
        v.class.includes("HtmlForm_warning__9vxRu") ||
        v.class.includes(" ")
      ) {
        dispatch({ type: `SET_ERROR_MESSAGE_${k}`, payload: true });
      } else {
        dispatch({ type: `SET_ERROR_MESSAGE_${k}`, payload: false });
      }
    });
  }

  console.log(state);
  return (
    <form style={{ display: "flex", flexDirection: "column", rowGap: "5px" }}>
      <label htmlFor="fname"></label>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="First Name"
        onChange={getValue}
        onBlur={warning}
        className={state.fname.class}
      ></input>
      {state.fname.errorMessage ? (
        <p className={styles.errorMessage}>
          Invalid Input: Only alphabetic character and/or space and -
        </p>
      ) : null}
      <label htmlFor="lname"></label>
      <input
        type="text"
        id="lname"
        name="lname"
        placeholder="Last Name"
        onBlur={warning}
        className={state.lname.class}
      ></input>
      {state.lname.errorMessage ? (
        <p className={styles.errorMessage}>Invalid Input</p>
      ) : null}
      <div>
        <label htmlFor="street"></label>
        <input
          type="text"
          id="street"
          name="street"
          placeholder="Street Name"
          onBlur={warning}
          className={state.street.class}
        ></input>
        {state.street.errorMessage ? (
          <p className={styles.errorMessage}>Invalid Input</p>
        ) : null}
        <label htmlFor="streetNumber"></label>
        <input
          type="text"
          id="streetNumber"
          name="streetNumber"
          placeholder="House Number"
          onBlur={warning}
          className={state.streetNumber.class}
        ></input>
        {state.streetNumber.errorMessage ? (
          <p className={styles.errorMessage}>Invalid Input</p>
        ) : null}
      </div>
      <label htmlFor="email"></label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="email"
        onBlur={warning}
        className={state.email.class}
      ></input>
      {state.email.errorMessage ? (
        <p className={styles.errorMessage}>Invalid Input</p>
      ) : null}
      <label htmlFor="postcode"></label>
      <input
        type="text"
        id="postcode"
        name="postcode"
        placeholder="Postcode"
        onBlur={warning}
        className={state.postCode.class}
      ></input>
      {state.postCode.errorMessage ? (
        <p className={styles.errorMessage}>Invalid Input</p>
      ) : null}
      <label htmlFor="city"></label>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="City"
        onBlur={warning}
        className={state.city.class}
      ></input>
      {state.city.errorMessage ? (
        <p className={styles.errorMessage}>Invalid Input</p>
      ) : null}
      <label htmlFor="bank"></label>
      <input
        type="text"
        id="bank"
        name="bank"
        placeholder="Bank"
        onBlur={warning}
        className={state.bank.class}
      ></input>
      {state.bank.errorMessage ? (
        <p className={styles.errorMessage}>Invalid Input</p>
      ) : null}
      <button onClick={controlSubmit}>Submit</button>
    </form>
  );
};

HtmlForm.propTypes = {};

export default HtmlForm;
