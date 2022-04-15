import { Text, View, StyleSheet } from "@react-pdf/renderer";

const InvoiceHeader = ({ fontFamily }) => {
  const styles = StyleSheet.create({
    headerWrapper: {
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px solid #202020",
      paddingBottom: "9px",
      backgroundColor: "#F8F8F8",
      paddingTop: "14px",
    },
    headerWrapperLeft: {
      width: "39%",
    },
    headerWrapperRight: {
      width: "61%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerTextBold: {
      // fontFamily: "Helvetica-Custom-Bold",
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
      fontWeight: "bold",
    },
    headerColWrapperTextTop: {
      fontSize: "8px",
      // fontFamily: "Helvetica-Custom-Bold",
    },
    textPadding: {
      paddingLeft: "10%",
      display: "flex",
      flexDirection: "column",
    },
    fontWeightNormal: {
      fontWeight: "400",
    },
  });

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerWrapperLeft}>
        <Text style={styles.headerTextBold}>INVOICE</Text>
      </View>
      <View style={styles.headerWrapperRight}>
        <View style={styles.headerColWrapper}>
          <Text style={styles.headerColWrapperTextTop}>INVOICE NUMBER:</Text>
          <Text style={styles.fontWeightNormal}>[XXXXXXXX]</Text>
        </View>
        <View style={styles.headerColWrapper}>
          <View style={styles.textPadding}>
            <Text style={styles.headerColWrapperTextTop}>DATE ISSUED:</Text>
            <Text style={styles.fontWeightNormal}> DD/MM/YYYY</Text>
          </View>
        </View>
        <View style={styles.headerColWrapper}>
          <View style={styles.textPadding}>
            <Text style={styles.headerColWrapperTextTop}>DUE DATE:</Text>
            <Text style={styles.fontWeightNormal}>DD/MM/YYYY</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvoiceHeader;
