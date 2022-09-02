import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Paragraph, IndexPage } from "../index";

const Pagination = (props) => {
  // props.activePage props.setActivePage props.lastPage
  const [pages, setPages] = useState(Array(props.lastPage).fill({}));

  useEffect(() => {
    let copy = [...pages];
    copy = copy.map((el, index) => {
      el = { idx: index + 1 };
      return el;
    });
    setPages(copy);
  }, []);

  const getUpdateActive = (current) => {
    let copy = [...pages];
    props.setActivePage(copy[current].idx);
  };

  const backwards = () => {
    const copy = [...pages];
    let activeIndex = copy.findIndex((el) => el.idx == props.activePage);
    if (activeIndex > 0) {
      props.setActivePage(copy[activeIndex - 1].idx);
    }
  };
  const forward = () => {
    const copy = [...pages];
    let activeIndex = copy.findIndex((el) => el.idx == props.activePage);
    if (activeIndex < pages.length - 1) {
      props.setActivePage(copy[activeIndex + 1].idx);
    }
  };

  return (
    <div style={{ display: "flex", columnGap: "10px", marginTop: "100px" }}>
      <button onClick={backwards}>{`<<`}</button>
      {pages.map((el, idx) => {
        let status = props.activePage === idx + 1 ? true : false;
        return (
          <IndexPage
            key={idx}
            page={el.idx}
            dataId={idx}
            fun={{ getUpdateActive }}
            status={status}
          >
            el
          </IndexPage>
        );
      })}
      <button onClick={forward}>{`>>`}</button>
    </div>
  );
};

//
Pagination.propTypes = {};

export default Pagination;
