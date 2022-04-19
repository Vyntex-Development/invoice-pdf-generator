import { Page, StyleSheet, Font, Document } from "@react-pdf/renderer";
import InvoiceDescription from "./InvoiceDescription";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceInstructions from "./InvoiceInstructions";

const font1 = "https://fonts.cdnfonts.com/s/29136/Helvetica55Roman_22439.woff";

Font.register({
  family: "Helvetica-Custom",
  fonts: [{ src: font1 }],
  type: "woff",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica-Custom",
    padding: "14px 32px",
    paddingLeft: 32,
    paddingBottom: 14,
    paddingTop: 14,
    paddingRight: 32,
    display: "flex",
    flexDirection: "column",
    border: "none",
    overflow: "auto",
    height: "95vh",
    width: "100%",
  },
});

const PDFDocument = ({ pdfData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceHeader
          dateIssued={pdfData.dateIssued}
          dateDueIssued={pdfData.dateDueIssued}
        />
        <InvoiceDetails
          billTo={pdfData.billTo}
          address={pdfData.address}
          country={pdfData.country}
        />
        <InvoiceDescription />
        <InvoiceInstructions />
        <InvoiceFooter />
      </Page>
    </Document>
  );
};

export default PDFDocument;
