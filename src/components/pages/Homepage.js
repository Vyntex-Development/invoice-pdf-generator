import Form from "../Form";
import Pdf from "../invoice/Pdf";
import React, { useState, useEffect } from "react";

const HomePage = (props) => {
  const [isClient, setIsClient] = useState(false);
  const [pdfData, setPdfData] = useState({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const forwardFormDataHandler = (data) => {
    setPdfData(data);
  };

  return (
    <div className="flex">
      <Form forwardFormData={forwardFormDataHandler} />
      {isClient && <Pdf pdfData={pdfData} />}
    </div>
  );
};

export default HomePage;
