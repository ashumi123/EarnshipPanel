import React from "react";
import Setup from "./routes/setup";
import "./App.scss";
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { create } from "jss";
import extend from "jss-plugin-extend";
import theme from "./styles/theme";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const jss = create({
  plugins: [...jssPreset().plugins, extend()],
});
function App() {
  React.useEffect(() => {
    // document.onreadystatechange = (e) =>document.readyState == 'complete'?<Backdrop />:console.log('ha');
  }, []);

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Setup />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={1}
            transition={Slide}
          />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
