import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PaymentInstruction = () => {
  const styles = StyleSheet.create({
    paymentInstructionsWrapper: {
      display: "flex",
      flexDirection: "row",
      borderBottomColor: "#D3D3D3",
      paddingTop: "8px",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
    sectionWrapperRight: {
      width: "61%",
      display: "flex",
      flexDirection: "row",
    },
    sectionWrapperLeft: {
      width: "39%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontSize: "12px",
    },
    textSmallWithMargin: {
      fontSize: "8px",
      maxWidth: "117px",
      marginBottom: "16px",
    },
    textSmall: {
      fontSize: "8px",
      maxWidth: "117px",
    },
    col: {
      display: "flex",
      flexDirection: "column",
      fontSize: "11px",
      width: "33%",
    },
    colAuto: {
      display: "flex",
      flexDirection: "column",
      fontSize: "11px",
      width: "50%",
    },
    textPadding: {
      paddingLeft: "10%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    textBold: {
      marginBottom: "4px",
      fontWeight: "bold",
    },
    textMargin: {
      marginBottom: "4px",
    },
  });

  return (
    <View style={styles.paymentInstructionsWrapper}>
      <View style={styles.sectionWrapperLeft}>
        <View
          style={{
            marginBottom: "8px",
            fontWeight: "bold",
            fontFamily: "Helvetica-Custom-Bold",
          }}
        >
          <Text> PAYMENT</Text>
          <Text>
            <br />
            INSTRUCTIONS
          </Text>
        </View>

        <Text style={styles.textSmallWithMargin}>
          Use for local bank transfers within the UK in GBP via the BACS or
          Faster Payments Service network.
        </Text>
        <Text style={styles.textSmall}>
          Only payments for business transactions from business accounts are
          supported.
        </Text>
      </View>
      <View style={styles.sectionWrapperRight}>
        <View style={styles.col}>
          <View
            style={{
              marginBottom: "4px",
              fontWeight: "bold",
              fontFamily: "Helvetica-Custom-Bold",
            }}
          >
            <Text style={styles.textBold}>Bank name:</Text>
          </View>
          <Text style={styles.textMargin}>Banca Intesa A.D.</Text>
          <Text>Beograd</Text>
        </View>
        <View style={styles.colAuto}>
          <View style={styles.textPadding}>
            <View
              style={{
                marginBottom: "4px",
                fontWeight: "bold",
                fontFamily: "Helvetica-Custom-Bold",
              }}
            >
              <Text style={styles.textBold}>Account number:</Text>
            </View>
            <Text>160-6000000036927-42</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentInstruction;
