import { Text, View, StyleSheet } from "@react-pdf/renderer";

const InvoiceDescription = () => {
  const styles = StyleSheet.create({
    invoiceDescriptionWrapper: {
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px",
      borderBottomColor: "#D3D3D3",
      paddingBottom: "9px",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
    sectionWrapperRight: {
      width: "61%",
      fontWeight: "bold",
      // fontFamily: "Helvetica-Custom-Bold",
    },
    sectionWrapperLeft: {
      width: "39%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontSize: "12px",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottom: "1px solid #202020",
      fontSize: "11px",
      paddingBottom: "8px",
    },
    textSmall: {
      fontSize: "8px",
      maxWidth: "117px",
    },
    textSmallWithMargin: {
      fontSize: "8px",
      maxWidth: "117px",
      marginBottom: "24px",
    },
    textPaddingTop: {
      paddingTop: "8px",
    },
  });

  return (
    <View style={styles.invoiceDescriptionWrapper}>
      <View style={styles.sectionWrapperLeft}>
        <Text style={{ marginBottom: "8px", fontWeight: "bold" }}>
          DESCRIPTION
        </Text>
        <Text style={styles.textSmallWithMargin}>
          Currency: GBP EUR/RSD: 1/117,65
        </Text>
        <Text style={styles.textSmall}>
          Based on Article 12, paragraph 1,4,6, item 7 and subitems 2,3,4, of
          the VAT Law of the Republic of Serbia, VAT has not been stated.
        </Text>
      </View>
      <View style={styles.sectionWrapperRight}>
        <View style={styles.row}>
          <Text>Website Development - 70%</Text>
          <Text>£1,022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textPaddingTop}>TOTAL</Text>
          <Text style={styles.textPaddingTop}>£1,022</Text>
        </View>
      </View>
    </View>
  );
};

export default InvoiceDescription;
