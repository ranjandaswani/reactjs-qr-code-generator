import React, { useState } from "react";
import {QRCodeSVG, QRCodeCanvas} from "qrcode.react";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator</h1>
      <p>Enter string or URL for that you want to generate the QR code.</p>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter text or URL"
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <div>
        {input && (
          <QRCodeSVG value={input} size={200} level="H" includeMargin={true} />
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
