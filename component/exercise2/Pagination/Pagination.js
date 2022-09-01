import React, { useState } from "react";
import PropTypes from "prop-types";
import { Paragraph, IndexPage } from "../index";

const Pagination = (props) => {
  const [page, setPage] = useState([
    { idx: 1, state: true },
    { idx: 2, state: false },
    { idx: 3, state: false },
    { idx: 4, state: false },
    { idx: 5, state: false },
    { idx: 6, state: false },
  ]);

  const getUpdateActive = (current) => {
    let copy = [...page];
    let index = copy.findIndex((el) => el.state === true);
    copy[index].state = false;
    setPage((current) => [...current, copy]);
    copy[current].state = true;
    setPage(copy);
  };

  const backwards = () => {
    const copy = [...page];
    let activeIndex = copy.findIndex((el) => el.state == true);

    if (activeIndex > 0) {
      copy[activeIndex].state = false;
      copy[activeIndex - 1].state = true;
      setPage(copy);
    }
  };
  const forward = () => {
    const copy = [...page];
    let activeIndex = copy.findIndex((el) => el.state == true);

    if (activeIndex < page.length - 1) {
      copy[activeIndex].state = false;
      copy[activeIndex + 1].state = true;
      setPage(copy);
    }
  };

  return (
    <div style={{ display: "flex", columnGap: "10px", marginTop: "100px" }}>
      <button onClick={backwards}>{`<<`}</button>
      {page.map((el, idx) => {
        let backgroundColor;
        let color;

        if (page[idx].state == true) {
          backgroundColor = "blue";
          color = "white";
        } else if (page[idx].state == false) {
          backgroundColor = "pink";
          color = "black";
        }

        return (
          <IndexPage
            key={idx}
            page={el.idx}
            dataId={idx}
            styles={{ backgroundColor, color }}
            fun={{ getUpdateActive }}
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
//   const [page, setPage] = useState([1, 2, 3, 4, 5, 6]);

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
