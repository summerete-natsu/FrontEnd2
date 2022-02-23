import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Frame from "./views/index1";
// import MyEditor from "./parts/JsTest";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);
// function FancyBorder(props: any) {
//   console.log(props);
//   return (
//     <div className={"FancyBorder FancyBorder-" + props.textcolor}>
//       {props.children}
//     </div>
//   );
// }

function WelcomeDialog() {
  // const obj = { a: 1, b: 2 };
  // const obj2 = {
  //   ...obj,
  //   a: 2,
  // };
  // const aArray = [1, 2, 3, 4];
  // const List = aArray.map((i) => {
  //   return (
  //     <React.Fragment key={i}>
  //       <div>i</div>
  //       <div>i</div>
  //     </React.Fragment>
  //   );
  // });

  return (
    <React.Fragment>
      <>
        {/* <FancyBorder textcolor="blue" height={1234} flag obj={obj} {...obj2}>
          <h1 className="Dialog-title">Welcome</h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder> */}
        <Frame />
        {/* <MyEditor /> */}
      </>
    </React.Fragment>
  );
}

ReactDOM.render(<WelcomeDialog />, document.getElementById("root"));
