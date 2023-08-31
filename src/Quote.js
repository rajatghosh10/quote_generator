import React, { useEffect, useState } from "react";
import axios from "axios";

function Quote() {
  const [event, setEvent] = useState("");
  const [errmsg, setErrmsg] = useState("");

  const buttonStyles = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
    borderRadius: "14px",
  };

  const get_quote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setEvent(res.data.content);
        setErrmsg("");
      })
      .catch((error) => {
        setErrmsg("Error fetching quote. Please try again later.");
      });
  };

  useEffect(() => {
    console.log("render");
    get_quote();
  }, []);

  const errorMessageStyles = {
    color: "red",
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button style={buttonStyles} onClick={get_quote}>
        Generate Quote
      </button>
      <p style={{ color: "#007bff" }}>{event}</p>
      {errmsg && <p style={errorMessageStyles}>{errmsg}</p>}
    </div>
  );
}

export default Quote;
