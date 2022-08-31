import React, { Children } from "react";
import PropTypes from "prop-types";
import Paragraph from "../Paragraph/Paragraph";

const IndexPage = ({ children, ...props }) => {
  function UpdateActive(e) {
    let clickedElement = e.target.closest("div").dataset.id;

    props.fun.getUpdateActive(clickedElement);
  }

  return (
    <>
      <div
        style={{
          border: "2px solid grey",
          padding: "5px 10px",
          backgroundColor: props.styles.backgroundColor,
          color: props.styles.color,
        }}
        data-id={props.dataId}
        data-active={props.dataActive}
        onClick={UpdateActive}
      >
        <Paragraph>{props.page}</Paragraph>
      </div>
    </>
  );
};

// const IndexPage = ({ children, ...props }) => {
//   function UpdateActive(e) {
//     let pageList = e.target.closest("div").parentElement.children;
//     let clickedElement = e.target.closest("div");
//     let activateIndexPage = (e.target.closest("div").dataset.active = true);

//     for (let i = 0; i < pageList.length; i++) {
//       let page = pageList[i];
//       if (page.dataset.active === "true") {
//         page.dataset.active = false;
//         page.style.backgroundColor = "white ";
//         page.style.color = "black";
//       }
//     }
//     clickedElement.style.backgroundColor = "blue";
//     clickedElement.style.color = "white";

//   }
//   return (
//     <>
//       <div
//         style={{
//           border: "2px solid grey",
//           padding: "5px 10px",
//           backgroundColor: props.styles.backgroundColor,
//           color: props.styles.color,
//         }}
//         data-id={props.dataId}
//         data-active={props.dataActive}
//         onClick={UpdateActive}
//       >
//         <Paragraph>{props.page}</Paragraph>
//       </div>
//     </>
//   );
// };

IndexPage.propTypes = {};

export default IndexPage;
