import { Text, View, StyleSheet, Svg } from "@react-pdf/renderer";
import LogoDark from "../../images/LogoDark";

const ComapnyDetailsSection = () => {
  const styles = StyleSheet.create({
    companyDetailsWrapper: {
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px",
      borderBottomColor: "#D3D3D3",
      paddingBottom: "9px",
      paddingTop: "72px",
      paddingBottom: "40px",
    },
    sectionWrapperRight: {
      display: "flex",
      flexDirection: "column",
    },
    sectionWrapperLeft: {
      width: "61.6%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
    },
    textBold: {
      fontSize: "12px",
      marginBottom: "4px",
      fontWeight: "bold",
      // fontFamily: "Helvetica-Custom-Bold",
    },
    textNormal: {
      fontSize: "11px",
      marginBottom: "4px",
    },
    headerColWrapper: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    textAbsolute: {
      position: "absolute",
      top: "-16px",
      fontSize: "8px",
    },
  });

  return (
    <View style={styles.companyDetailsWrapper}>
      <View style={styles.sectionWrapperLeft}>
        <View style={styles.headerColWrapper}>
          <LogoDark />
          <Text style={styles.textBold}>VYNTEX DEVELOPMENTS DOO</Text>
          <Text style={styles.textNormal}>Novopazarska 46, 3 2.1020:03</Text>
          <Text style={styles.textNormal}>Belgrade, Serbia</Text>
          <Text style={styles.textNormal}>11000 Vracar.</Text>
        </View>
      </View>
      <View style={styles.sectionWrapperRight}>
        <Text style={styles.textAbsolute}>Bill to:</Text>
        <Text style={styles.textBold}>[COMPANY NAME]</Text>
        <Text style={styles.textNormal}>[STREET, CITY AND ZIPCODE]</Text>
        <Text style={styles.textNormal}>[COUNTRY]</Text>
      </View>
    </View>
  );
};

export default ComapnyDetailsSection;
