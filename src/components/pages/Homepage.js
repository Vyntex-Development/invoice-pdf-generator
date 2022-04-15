import Form from "../Form";
// import Invoice from "../Invoice";
import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

const font1 =
  "https://fonts.cdnfonts.com/s/14188/HelveticaNeue-LightExtObl.woff";
const font2 = "https://fonts.cdnfonts.com/s/14188/HelveticaNeue-BlackExt.woff";

Font.register({
  family: "Helvetica-Custom",
  fonts: [{ src: font1 }],
  type: "woff",
});

Font.register({
  family: "Helvetica-Custom-Bold",
  fonts: [{ src: font2 }],
  type: "woff",
});

let fontsLoaded = false;
let forceUpdate = null;

Promise.all([
  Font.load({ fontFamily: "Helvetica-Custom" }),
  Font.load({ fontFamily: "Helvetica-Custom-Bold" }),
]).then(() => {
  fontsLoaded = true;
  if (forceUpdate) forceUpdate();
});

// const [isSubmited, setIsSubmited] = useState(false);
// const [data, setData] = useState(null);

const HomePage = (props) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue((value) => value + 1);
  }

  forceUpdate = useForceUpdate();
  if (!fontsLoaded) {
    return <div />;
  }

  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica-Custom",
      fontSize: 11,
      paddingTop: 30,
      paddingLeft: 60,
      paddingRight: 60,
      lineHeight: 1.5,
      flexDirection: "column",
      border: "none",
      overflow: "auto",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    logo: {
      fontFamily: "Helvetica-Custom-Bold",
      fontSize: 16,
      // fontStyle: "italic",
    },
    // text: {
    //   color: "red",
    //   fontWeight: "bold",
    // },
  });

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
      {isClient && (
        <PDFViewer
          width={600}
          height={800}
          style={{
            border: "none",
            boxShadow: "none",
            height: "100vh",
            width: "50vw",
            display: "flex",
          }}
          showToolbar={false}
        >
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.logo}>VYNTEX</Text>
                <Text style={styles.text}>Section #2</Text>
                <Text style={styles.text}>Section #3</Text>
                <Text style={styles.text}>Section #4</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.text}>Section #2</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}

      {/* <Invoice isSubmited={isSubmited} data={data} onSubmit={onSubmitHandler} /> */}
    </div>
  );
};

export default HomePage;
