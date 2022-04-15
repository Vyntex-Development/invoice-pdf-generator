import { Page, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { useState } from "react";
import InvoiceDescription from "./InvoiceDescription";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceInstructions from "./InvoiceInstructions";

const font1 = "https://fonts.cdnfonts.com/s/29136/Helvetica65Medium_22443.woff";
const fontBold =
  "https://fonts.cdnfonts.com/s/29136/Helvetica85Heavy_22449.woff";

Font.register({
  family: "Helvetica-Custom",
  fonts: [{ src: font1 }],
  type: "woff",
});

Font.register({
  family: "Helvetica-Custom-Bold",
  fonts: [{ src: fontBold }],
  type: "woff",
});

// let fontsLoaded = false;
// let forceUpdate = null;

// Promise.all([
//   Font.load({ fontFamily: "Helvetica-Custom" }),
//   Font.load({ fontFamily: "Helvetica-Custom-Bold" }),
// ]).then(() => {
//   fontsLoaded = true;
//   if (forceUpdate) forceUpdate();
// });

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica-Custom",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: "column",
    border: "none",
    overflow: "auto",
    height: "95vh",
    width: "100%",
  },
});

const PDFDocument = () => {
  // function useForceUpdate() {
  //   const [value, setValue] = useState(0);
  //   return () => setValue((value) => value + 1);
  // }

  // forceUpdate = useForceUpdate();
  // if (!fontsLoaded) {
  //   return <div />;
  // }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceHeader />
        <InvoiceDetails />
        <InvoiceDescription />
        <InvoiceInstructions />
        <InvoiceFooter />
      </Page>
    </Document>
  );
};

export default PDFDocument;
