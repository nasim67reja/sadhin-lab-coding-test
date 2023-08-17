import ReactDOM from "react-dom";
import SignupForm from "./components/Form";
// import TabComponent from "./components/TabComponent";

function App() {
  return (
    <div className="container">
      {/* <TabComponent /> */}

      {/* {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )} */}
      {ReactDOM.createPortal(
        <SignupForm />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
}

export default App;
