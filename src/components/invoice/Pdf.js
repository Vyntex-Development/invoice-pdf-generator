import PDFDocument from "./PDFDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
const Pdf = () => {
  return (
    <>
      <PDFDocument />
      <div className="download-link">
        <PDFDownloadLink document={<PDFDocument />} fileName="pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Invoice"
          }
        </PDFDownloadLink>
      </div>
    </>

    // </PDFViewer>
  );
};

export default Pdf;
