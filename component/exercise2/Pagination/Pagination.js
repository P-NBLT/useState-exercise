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

  // const [pages, setPages] = useState([
  //   { idx: 1, state: true },
  //   { idx: 2, state: false },
  //   { idx: 3, state: false },
  //   { idx: 4, state: false },
  //   { idx: 5, state: false },
  //   { idx: 6, state: false },
  // ]);

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

// const Pagination = (props) => {
//   const [page, setPages] = useState([1, 2, 3, 4, 5, 6]);

//   return (
//     <div style={{ display: "flex", columnGap: "10px", marginTop: "100px" }}>
//       {page.map((el, idx) => {
//         let dataActive = false;
//         let backgroundColor = "white";
//         let color = "black";
//         if (idx == 0) {
//           dataActive = true;
//           backgroundColor = "blue";
//           color = "white";
//         }

//         return (
//           <IndexPage
//             key={idx}
//             page={el}
//             dataId={idx}
//             dataActive={dataActive}
//             styles={{ backgroundColor, color }}
//           >
//             el
//           </IndexPage>
//         );
//       })}
//     </div>
//   );
// };

Pagination.propTypes = {};

export default Pagination;
