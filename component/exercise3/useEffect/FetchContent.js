import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Pagination } from "../../exercise2";
import useFetch from "./useFetch";

const FetchContent = ({ ...props }) => {
  console.log(props.url);
  const { data, isLoading, error } = useFetch(props.url, [props.activePage]);

  console.log(data);
  useEffect(() => {
    function callBackProps() {
      props.fun.setData(data);
      props.fun.setIsLoading(isLoading);
      props.fun.setError(error);
    }
    callBackProps();
  }, [data]);
  return <div></div>;
};

FetchContent.propTypes = {};

export default FetchContent;
