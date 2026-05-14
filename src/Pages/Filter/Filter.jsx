import React, { useState } from "react";
import "./Filter.css";
import ConsumirApi from "../../Components/ConsumirApi/ConsumirApi";
import Inputcomplete from "../../Components/Inputcomplete/Inputcomplete";
const Filter = () => {
  const [search, setSearch] = useState("");
  return (
    <main>
      <div className="InputComplete">
        <Inputcomplete search={search} setSearch={setSearch} />
      </div>
      <ConsumirApi search={search} />
    </main>
  );
};

export default Filter;
