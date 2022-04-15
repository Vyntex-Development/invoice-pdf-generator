import Form from "../Form";
import Pdf from "../invoice/Pdf";
// import Invoice from "../Invoice";
import React, { useState, useEffect } from "react";

// const [isSubmited, setIsSubmited] = useState(false);
// const [data, setData] = useState(null);

const HomePage = (props) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // const onSubmitFormHandler = (data) => {
  //   setData(data);
  //   setIsSubmited(true);
  // };

  // const onSubmitHandler = () => {
  //   setIsSubmited(false);
  // };

  return (
    <div className="flex">
      {/* <Form onSubmitForm={onSubmitFormHandler} /> */}
      <Form />
      {isClient && <Pdf />}

      {/* <Invoice isSubmited={isSubmited} data={data} onSubmit={onSubmitHandler} /> */}
    </div>
  );
};

export default HomePage;
