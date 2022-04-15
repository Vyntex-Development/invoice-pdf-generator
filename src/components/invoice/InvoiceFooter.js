import { Text, View, StyleSheet } from "@react-pdf/renderer";

const InvoiceFooter = () => {
  const styles = StyleSheet.create({
    invoiceFooterWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderTop: "1px solid #202020",
      paddingTop: "8px",
      marginTop: "auto",
      color: "#202020",
      fontSize: "8px",
    },
  });

  return (
    <View style={styles.invoiceFooterWrapper}>
      <Text>VYNTEX DEVELOPMENTS LLC</Text>
      <Text>vyntex.com</Text>
    </View>
  );
};

export default InvoiceFooter;
