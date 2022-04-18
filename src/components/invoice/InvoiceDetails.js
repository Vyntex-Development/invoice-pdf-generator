import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import LogoDark from "../../images/LogoDark";

const fontBold = "https://fonts.cdnfonts.com/s/29136/HelveticaNeueBold.woff";

const font = "https://fonts.cdnfonts.com/s/29136/Helvetica55Roman_22439.woff";

Font.register({
  family: "Helvetica-Custom",
  fonts: [{ src: font }],
  type: "woff",
});

Font.register({
  family: "Helvetica-Custom-Bold",
  fonts: [{ src: fontBold, fontWeight: "bold" }],
  type: "woff",
});

const ComapnyDetailsSection = ({ billTo, address, country }) => {
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
      position: "relative",
    },
    sectionWrapperLeft: {
      width: "61.6%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
    },
    textBold: {
      fontFamily: "Helvetica-Custom-Bold",
      fontWeight: "bold",
      fontSize: "12px",
      marginBottom: "4px",
    },
    textBoldRight: {
      fontFamily: "Helvetica-Custom-Bold",
      fontWeight: "bold",
      fontSize: "12px",
      marginBottom: "4px",
      textTransform: "uppercase",
    },
    textNormal: {
      fontWeight: "normal",
      marginBottom: "4px",
    },
    textNormalWrapper: {
      fontFamily: "Helvetica-Custom",
      display: "flex",
      flexDirection: "column",
      fontSize: "11px",
    },
    headerColWrapper: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    textAbsolute: {
      position: "absolute",
      top: "-20px",
      fontSize: "8px",
    },
    companyName: {
      marginBottom: "4px",
    },
  });

  return (
    <View style={styles.companyDetailsWrapper}>
      <View style={styles.sectionWrapperLeft}>
        <View style={styles.headerColWrapper}>
          <svg
            width="62"
            height="16"
            viewBox="0 0 62 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: "-32px" }}
          >
            <path d="M61.2434 0H0V16H61.2434V0Z" fill="#202020" />
            <path
              d="M54.9446 8.00331L58.6086 2.6416H56.0246L53.658 6.09605L51.3021 2.6416H48.7216L52.3749 7.99618L48.7109 13.3721H51.2985L53.6687 9.89631L56.0353 13.3721H58.6157L54.9446 8.00331Z"
              fill="#F1F1F1"
            />
            <path
              d="M40.1001 13.3614L48.2299 13.3721V11.3793H42.0782V8.9908H46.0451V7.00868H42.0782V4.62372H48.2299V2.6416H40.1001V13.3614Z"
              fill="#F1F1F1"
            />
            <path
              d="M28.2102 2.6416L28.0498 3.24408H29.9174C30.5696 3.24408 30.8191 3.55423 30.6908 4.06046L29.0691 10.1779L25.2947 3.24408H25.9362L26.0966 2.6416H18.9469L18.7865 3.24408H20.3441L17.0722 7.99974L15.8711 4.57025L15.4612 3.24408H16.8476L17.008 2.6416H10.507L10.368 3.24408H11.8151L6.89295 10.4738L5.94845 4.01055C5.89499 3.66831 6.13379 3.28329 6.50802 3.25121C7.14244 3.24764 7.56301 3.24408 7.56301 3.24408L7.46678 2.6416H2.63379V3.24408C2.86546 3.24765 3.10782 3.24764 3.35731 3.25121C3.76719 3.26903 3.93827 3.62553 3.97035 3.81091L5.3069 12.7768H2.63379V13.3721H9.14906L9.30588 12.7768H7.29926C6.83949 12.7768 6.45812 12.2349 6.76464 11.7501L12.5386 3.24408H12.5992C12.7417 3.24408 13.2657 3.24408 13.5508 3.93925C13.5508 3.93925 14.0426 5.13708 15.2937 9.08706L14.3242 12.759H12.4138L12.2534 13.3721H18.0844L18.2305 12.759H17.1185C16.7977 12.759 16.37 12.4346 16.5019 11.9283L17.3537 8.645L20.8644 3.51502C21.0248 3.30825 21.2137 3.24765 21.3919 3.24765C21.7662 3.24765 21.9871 3.24765 22.2152 3.24765C22.5895 3.24765 22.757 3.3439 22.9281 3.63623L23.4377 4.54886L21.9943 10.0246L21.2779 12.7483L21.2743 12.7625H19.3568L19.2178 13.3757H23.2595L23.4199 12.7625H22.8711C22.5075 12.7625 22.1226 12.4132 22.2509 11.939L23.8583 5.7859L28.2494 13.3757H28.9729L31.2789 4.62728H33.7132V13.3757H35.6913V4.62728H39.1093V2.64517H28.2102V2.6416Z"
              fill="#F1F1F1"
            />
          </svg>
          <LogoDark />
          <View style={styles.textBold}>
            <Text>VYNTEX DEVELOPMENTS DOO</Text>
          </View>
          <View style={styles.textNormalWrapper}>
            <Text style={styles.textNormal}>Novopazarska 46, 3 2.1020:03</Text>
            <Text style={styles.textNormal}>Belgrade, Serbia</Text>
            <Text style={styles.textNormal}>11000 Vracar.</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionWrapperRight}>
        <Text style={styles.textAbsolute}>Bill to:</Text>
        <View style={styles.textBoldRight}>
          <Text>{billTo ? billTo : "[COMPANY NAME]"}</Text>
        </View>
        <View style={styles.textNormalWrapper}>
          <Text style={styles.textNormal}>
            {address ? address : "[STREET, CITY AND ZIPCODE]"}
          </Text>
          <Text style={styles.textNormal}>
            {country ? country : "[COUNTRY]"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ComapnyDetailsSection;
