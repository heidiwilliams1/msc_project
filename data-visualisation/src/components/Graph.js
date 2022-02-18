import React from "react";
import PropTypes from "prop-types";
import getEventData from "../fmd/getData";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Graph(props) {
  const data = getEventData(props.eventType);

  return (
    <div className="graph">
      <ScatterChart
        class="graph"
        width={470}
        height={270}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        {" "}
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="x" unit="" tick={false} />
        <YAxis type="number" dataKey="y" name="y" unit="" tick={false} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Home free kicks" data={data} fill="orange" />
      </ScatterChart>
    </div>
  );
}

Graph.propTypes = {
  eventType: PropTypes.string,
};

export default Graph;