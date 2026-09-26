'use client'

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface RatingData {
    ratings:{
        name: string;
        count: number;
    }[]
}

const AppReviewChart = ({ratings}: RatingData) => {
    const chartData = [...ratings].reverse();
    return (
        <div className="h-64 my-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
        >
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#627382", fontSize: 14 }}
            width={60}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            formatter={(value) => [`${value} reviews`, "Count"]}
          />
          <Bar
            dataKey="count"
            fill="#FF8800"
            radius={[0, 4, 4, 0]}
            barSize={18}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
};

export default AppReviewChart;