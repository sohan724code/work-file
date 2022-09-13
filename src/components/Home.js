import React from "react";
import DateRange from "react-date-range/dist/components/DateRange";

const Home = () => {
  return (
    <div>
      <DateRange months={2} direction={"horizontal"} />
    </div>
  );
};

export default Home;
