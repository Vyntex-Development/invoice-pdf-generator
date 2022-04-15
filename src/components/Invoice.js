import classes from "./Invoice.module.css";
import { useEffect, useRef } from "react";
import LogoDark from "../images/LogoDark";

const Invoice = ({ data, isSubmited, onSubmit }) => {
  const invoiceRef = useRef();
  const {
    bill_to: companyName,
    date_issued: dateIssued,
    date_due_issued: dueDateIssued,
    country,
    address,
  } = data ? data : {};

  useEffect(() => {
    if (isSubmited) {
      generateInvoice();
      onSubmit(false);
    }
  }, [isSubmited]);

  return (
    <div className={classes.Invoice} ref={invoiceRef}>
      <div className={classes.Header}>
        <div className={classes.HeaderTitle}>invoice</div>
        <div className={classes.Detail}>
          <div>INVOICE NUMBER:</div>
          <div>[XXXXXXXX]</div>
        </div>
        <div className={classes.Detail}>
          <div>DATE ISSUED:</div>
          <div>{dateIssued ? dateIssued : "DD/MM/YYYY"}</div>
        </div>
        <div className={classes.Detail}>
          <div>DUE DATE:</div>
          <div>{dueDateIssued ? dueDateIssued : "DD/MM/YYYY"}</div>
        </div>
      </div>
      <div className={classes.ComapnyDetails}>
        <div className={classes.ComapnyDetailsLeft}>
          <div className={classes.Logo}>
            <LogoDark />
          </div>
          <h4 className={classes.Title}>Vyntex developments doo</h4>
          <p>Novopazarska 46, 3 2.1020:03</p>
          <p>Belgrade, Serbia</p>
          <p>11000 Vracar.</p>
        </div>
        <div className={classes.ComapnyDetailsRight}>
          <span>Bill To:</span>
          <h4 className={classes.Title}>
            {companyName ? companyName : "COMPANY NAME"}
          </h4>
          <p>{address ? address : "[STREET, CITY AND ZIPCODE]"}</p>
          <p>{country ? country : ""}</p>
        </div>
      </div>
      <div className={classes.Description}>
        <div className={classes.DescriptionLeft}>
          <div>
            <h4 className={classes.Title}>DESCRIPTION</h4>
          </div>
          <div>
            <p>Currency: GBP EUR/RSD: 1/117,65 </p>
            <p>
              Based on Article 12, paragraph 1,4,6, item 7 and subitems 2,3,4,
              of the VAT Law of the Republic of Serbia, VAT has not been stated.
            </p>
          </div>
        </div>
        <div className={classes.DescriptionRight}>
          <div>
            <p>Website Development - 70%</p>
            <p>£1,022</p>
          </div>
          <div>
            <p>TOTAL</p>
            <p>£1,022</p>
          </div>
        </div>
      </div>
      <div className={classes.PaymentInstructions}>
        <div className={classes.PaymentInstructionsLeft}>
          <div>
            <h4 className={classes.Title}>Payment Instructions</h4>
          </div>
          <div>
            <p>Currency: GBP EUR/RSD: 1/117,65 </p>
            <p>
              Based on Article 12, paragraph 1,4,6, item 7 and subitems 2,3,4,
              of the VAT Law of the Republic of Serbia, VAT has not been stated.
            </p>
          </div>
        </div>
        <div className={classes.PaymentInstructionsMiddle}>
          <p>Bank name:</p>
          <p>Banca Intesa A.D.</p>
          <p> Beograd</p>
        </div>
        <div className={classes.PaymentInstructionsRight}>
          <p>Account number: </p>
          <p> 160-6000000036927-42</p>
        </div>
      </div>
      <div className={classes.Footer}>
        <p>VYNTEX DEVELOPMENTS LLC</p>
        <p>VYNTEX.COM</p>
      </div>
    </div>
  );
};

export default Invoice;
