import { width } from "@material-ui/system";

const styles = () => ({
  root: {
    width: "100%"
  },
  formWidth: {
    border: "1px",
    borderRadius: 3,
    padding: "16px",
    "& input": {
      background: "#fff"
    },
    width: "80%"
  },
  submitBtn: {
    direction: "rtl",
    marginTop: '24px',
  },
  btnContainer:{
    direction: "rtl",
    margin: '16px 8px',
  },
  resulyGrid: {
    width: "700px",
    height: "300px",
    overflow: 'auto'
  },
  cancelBtn:{
    marginRight: '16px',
  }

});

export default styles;
