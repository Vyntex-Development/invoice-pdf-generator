import Form from "../Form";
import Invoice from "../Invoice";

import { useState } from "react";

const HomePage = (props) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [data, setData] = useState(null);

  const onSubmitFormHandler = (data) => {
    setData(data);
    setIsSubmited(true);
  };

  const onSubmitHandler = () => {
    setIsSubmited(false);
  };

  return (
    <div className="flex">
      <Form onSubmitForm={onSubmitFormHandler} />
      <Invoice isSubmited={isSubmited} data={data} onSubmit={onSubmitHandler} />
    </div>
  );
};

export default HomePage;
