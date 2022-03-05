import React from "react";

const App = () => {
  const message = "This is our first variable rendered in JSX";

  const handleClick = () => {
    alert("You clicked first line message");
  };
  return (
    <>
      <div>
        <h1> Hello React World </h1>

        <h2 onClick={handleClick}>
          This is our first React App GMTSoftware - So Marvellous
        </h2>
        <h2 onClick={() => alert("you clicked the message")}>{message}</h2>
      </div>
    </>
  );
};
export default App;
