import PDFDocument from "./PDFDocument";
const Pdf = ({ pdfData }) => {
  return (
    <>
      <PDFDocument pdfData={pdfData} />
    </>
  );
};

export default Pdf;
