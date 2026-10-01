import React from "react";
import { createRoot } from "react-dom/client";
import OtpTimer from "../src";
import "./index.css";

function Example() {
  const submit = () => {
    console.log("button clicked");
  };

  return (
    <div>
      <OtpTimer
        seconds={5}
        minutes={0}
        resend={submit}
        text="Time:"
        ButtonText="Resend"
        timerSpanClass="btn"
        timerSpanStyle={{ fontSize: "16px" }}
        buttonStyle={{ backgroundColor: "lightBlue" }}
      />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);
