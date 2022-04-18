import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
const fontBold = "https://fonts.cdnfonts.com/s/29136/HelveticaNeueBold.woff";

Font.register({
  family: "Helvetica-Custom-Bold",
  fonts: [{ src: fontBold, fontWeight: "bold" }],
  type: "woff",
});

const InvoiceHeader = ({ dateIssued, dateDueIssued }) => {
  const styles = StyleSheet.create({
    headerWrapper: {
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px solid #202020",
      paddingBottom: "9px",
    },
    headerWrapperLeft: {
      fontFamily: "Helvetica-Custom-Bold",
      width: "39%",
    },
    headerWrapperRight: {
      width: "61%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerTextBold: {
      fontSize: "16px",
      textTransform: "uppercase",
      color: "#202020",
      fontWeight: "bold",
    },
    headerColWrapper: {
      display: "flex",
      flexDirection: "column",
      fontSize: "8px",
      width: "33.3%",
    },
    headerColWrapperTextTop: {
      fontSize: "8px",
      fontFamily: "Helvetica-Custom-Bold",
      fontWeight: "bold",
    },
    textPadding: {
      paddingLeft: "10%",
      display: "flex",
      flexDirection: "column",
    },
    fontWeightNormal: {
      fontWeight: "400",
      fontFamily: "Helvetica-Custom",
    },
  });

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerWrapperLeft}>
        <Text style={styles.headerTextBold}>INVOICE</Text>
      </View>
      <View style={styles.headerWrapperRight}>
        <View style={styles.headerColWrapper}>
          <View style={styles.headerColWrapperTextTop}>
            <Text>INVOICE NUMBER:</Text>
          </View>
          <View style={styles.fontWeightNormal}>
            <Text>[XXXXXXXX]</Text>
          </View>
        </View>
        <View style={styles.headerColWrapper}>
          <View style={styles.textPadding}>
            <View style={styles.headerColWrapperTextTop}>
              <Text>DATE ISSUED:</Text>
            </View>
            <View style={styles.fontWeightNormal}>
              <Text>{dateIssued ? dateIssued : "DD/MM/YYYY"}</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerColWrapper}>
          <View style={styles.textPadding}>
            <View style={styles.headerColWrapperTextTop}>
              <Text>DUE DATE:</Text>
            </View>

            <View style={styles.fontWeightNormal}>
              <Text>{dateDueIssued ? dateDueIssued : "DD/MM/YYYY"} </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvoiceHeader;
