import classes from "./Form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState, useEffect } from "react";
import Logo from "../images/Logo";
import { saveAs } from "file-saver";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { countryListAllIsoData } from "../countries/countries";
import PDFDocument from "./invoice/PDFDocument";
// import Pdf from "./invoice/Pdf";

const formattedDate = (date, setError) => {
  if (!date) {
    setError("Date must be defined");
    return;
  }

  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  const year = String(date.getFullYear());

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return `${day}/${month}/${year}`;
};

const Form = ({ forwardFormData, props }) => {
  const dateIssuedRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [billTo, setBillTo] = useState(null);
  const [billToError, setBillToError] = useState("");
  const [address, setAddress] = useState(null);
  const [addressError, setAddressError] = useState(null);
  const [dateIssuedError, setDateIssuedError] = useState("");
  const [dateDueIssuedError, setDateDueIssuedError] = useState("");
  const [isInitial, setIsInitial] = useState(true);
  const [country, setCountry] = useState(countryListAllIsoData[0].name);
  const [formData, setFormData] = useState({});
  const [selectedDateIssued, setSelectedDateIssued] = useState(null);
  const [selectedDateDueIssued, setSelectedDateDueIssued] = useState(null);

  const [isClient, setIsClient] = useState(false);

  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

  async function getProps() {
    await delay(1_000);
    return formData;
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  const modifyDataAndForwardToComponent = (value, key) => {
    const modifiedData = { ...formData, [key]: value };
    forwardFormData(modifiedData);
  };

  const inputOnChnageHadler = (val, setError, setVal, keyToUpdate) => {
    modifyDataAndForwardToComponent(val, keyToUpdate);
    setFormData({ ...formData, [keyToUpdate]: val });
    if (val === "") {
      setError("This field is required");
      return;
    }
    setVal(val);
    setError("");
  };

  const billToHandler = (ev) => {
    inputOnChnageHadler(
      ev.target.value.trim(),
      setBillToError,
      setBillTo,
      "billTo"
    );
  };

  const setCountryHandler = (countryName) => {
    modifyDataAndForwardToComponent(countryName, "country");
    setFormData({ ...formData, country: countryName });
    setCountry(countryName);
    setIsOpen(false);
    setIsInitial(false);
  };

  const setSelectedDateDueIssuedHandler = (date) => {
    modifyDataAndForwardToComponent(formattedDate(date), "dateDueIssued");
    setSelectedDateDueIssued(date);
    setFormData({
      ...formData,
      dateDueIssued: formattedDate(date),
    });

    setDateDueIssuedError("");
  };

  const setSelectedDateIssuedHandler = (date) => {
    modifyDataAndForwardToComponent(formattedDate(date), "dateIssued");

    setSelectedDateIssued(date);
    setFormData({
      ...formData,
      dateIssued: formattedDate(date),
    });

    setDateIssuedError("");
  };

  const addressInputHandler = (ev) => {
    inputOnChnageHadler(
      ev.target.value.trim(),
      setAddressError,
      setAddress,
      "address"
    );
    setFormData({
      ...formData,
      address: ev.target.value.trim(),
    });
  };

  const submitFormHandler = (ev) => {
    ev.preventDefault();
    if (!billTo) setBillToError("This field is required");
    if (!address) setAddressError("This field is required");
    if (!selectedDateIssued) setDateIssuedError("Date must be defined");
    if (!selectedDateDueIssued) setDateDueIssuedError("Date must be defined");

    const modifiedFormData = {
      ...formData,
    };
    setFormData(modifiedFormData);
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
              onChange={billToHandler}
              type="text"
              name="bill-to"
              id="bill-to"
              placeholder="Company name"
            />
            <span className={classes.Error}>{billToError}</span>
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
              onChange={(date) => {
                setSelectedDateIssuedHandler(date);
              }}
            />
            <span className={classes.Error}>{dateIssuedError}</span>
          </div>
          <div className={classes.HalfWidth}>
            <label htmlFor="due-issued">Due issued:</label>
            <DatePicker
              placeholderText="DD/MM/YYYY"
              dateFormat="dd/MM/yyyy"
              minDate={selectedDateIssued}
              selected={selectedDateDueIssued}
              onChange={(date) => {
                setSelectedDateDueIssuedHandler(date);
              }}
            />
            <span className={classes.Error}>{dateDueIssuedError}</span>
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
              onChange={addressInputHandler}
            />
            <span className={classes.Error}>{addressError}</span>
          </div>
        </div>
        <button
          className={classes.Button}
          onClick={async () => {
            const props = await getProps();
            const doc = <PDFDocument pdfData={props} />;
            const asPdf = pdf([]); // {} is important, throws without an argument
            asPdf.updateContainer(doc);
            const blob = await asPdf.toBlob();
            saveAs(blob, "document.pdf");
          }}
        >
          NEXT STEP
        </button>
      </form>
    </div>
  );
};

export default Form;
