import classes from "./Form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import Logo from "../images/Logo";
import { countryListAllIsoData } from "../countries/countries";

const formattedDate = (date) => {
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  const year = String(date.getFullYear());

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return `${day}/${month}/${year}`;
};

const Form = ({ onSubmitForm }) => {
  const billToRef = useRef();
  const dateIssuedRef = useRef();
  const addressInputref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [country, setCountry] = useState(countryListAllIsoData[0].name);
  const [formData, setFormData] = useState({});
  const [selectedDateIssued, setSelectedDateIssued] = useState(null);
  const [selectedDateDueIssued, setSelectedDateDueIssued] = useState(null);

  const setCountryHandler = (countryName) => {
    setCountry(countryName);
    setIsOpen(false);
    setIsInitial(false);
  };

  const submitFormHandler = (ev) => {
    ev.preventDefault();
    if (billToRef.current.value.trim() === "") {
      return;
    }
    const modifiedFormData = {
      bill_to: billToRef.current.value,
      date_issued: formattedDate(selectedDateIssued),
      date_due_issued: formattedDate(selectedDateDueIssued),
      country: country,
      address: addressInputref.current.value,
    };
    setFormData(modifiedFormData);
    onSubmitForm(modifiedFormData);
  };

  return (
    <div className={classes.Form}>
      <div className={classes.Logo}>
        <Logo />
      </div>

      <form action="" onSubmit={submitFormHandler}>
        <h1>New invoice</h1>
        <div className={classes.InputWrapper}>
          <div className={classes.FullWidth}>
            <label htmlFor="bill-to">Bill to:</label>
            <input
              ref={billToRef}
              type="text"
              name="bill-to"
              id="bill-to"
              placeholder="Company name"
            />
          </div>
        </div>
        <div className={classes.TwoCol}>
          <div className={classes.HalfWidth}>
            <label htmlFor="data-issued">Date issued:</label>
            <DatePicker
              placeholderText="DD/MM/YYYY"
              ref={dateIssuedRef}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              selected={selectedDateIssued}
              onChange={(date) => setSelectedDateIssued(date)}
            />
          </div>
          <div className={classes.HalfWidth}>
            <label htmlFor="due-issued">Due issued:</label>
            <DatePicker
              placeholderText="DD/MM/YYYY"
              dateFormat="dd/MM/yyyy"
              minDate={selectedDateIssued}
              selected={selectedDateDueIssued}
              onChange={(date) => setSelectedDateDueIssued(date)}
            />
          </div>
        </div>
        <div className={classes.InputWrapper}>
          <div className={classes.CountryDropdownWrapper}>
            <label htmlFor="country">country:</label>
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={`${
                isInitial
                  ? classes.DropdownSelectInitial
                  : classes.DropdownSelected
              }`}
            >
              {country}
            </div>
            {isOpen && (
              <div className={classes.Dropdown}>
                {
                  <ul>
                    {countryListAllIsoData.map((c, index) => {
                      let { name } = c;
                      return (
                        <li
                          onClick={() => setCountryHandler(name)}
                          key={`${index}-${name}`}
                        >
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                }
              </div>
            )}
          </div>
        </div>
        <div className={classes.InputWrapper}>
          <div className={classes.FullWidth}>
            <label htmlFor="address">address:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Street, city and zipcode"
              ref={addressInputref}
            />
          </div>
        </div>
        <button className={classes.Button}>GENERATE PDF</button>
      </form>
    </div>
  );
};

export default Form;
