import CalendarComp from "./components/CalendarComp.jsx";
import DateRangeComp from "./components/DateRangeComp.jsx";
import DateRangePickerComp from "./components/DateRangePickerComp.jsx";

import "./App.css";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <h4>React Date Select</h4>
      {/* <CalendarComp /> */}

      <br />
      <br />
      <hr />

      <h4>React Date Range Select</h4>
      {/* <DateRangeComp /> */}

      <br />
      <br />
      <hr />

      <h4>React Date Range Picker</h4>
      {/* <DateRangePickerComp /> */}
      <h4>new datepicker</h4>
      <Home />
    </div>
  );
}

export default App;
