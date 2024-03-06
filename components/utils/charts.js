import React from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ComposedChart, Legend, ReferenceLine } from 'recharts';
import styled from "styled-components";

export const PieSalesChart = ({ sold, created }) => {
  // Sample data
  const data = [
    { id: "1", name: "Sold", value: sold },
    { id: "2", name: "", value: created }
  ];

  const frac = ((sold / created) * 100).toFixed(2)
  const remainingTickets = `${sold} / ${created}`
  const diameter = 230
  const x = diameter / 2
  const y1 = diameter / 2 + 15
  const y2 = diameter / 2 - 15

  return (
    <PieChart width={diameter} height={diameter}>
      <text
        x={x}
        y={y1}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={18}
        fontWeight='400'
        //fontFamily="Poppins, sans-serif"
        fill="#878A9D"
      >
        {remainingTickets}
      </text>
      <text
        x={x}
        y={y2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={28}
        fontWeight='500'
        //fontFamily="Poppins, sans-serif"
        fill="#F9F7F5"
      >
        {frac} %
      </text>
      <Pie
        data={data}
        dataKey="value"
        innerRadius="85%"
        outerRadius="100%"
        fill="#222436"
        startAngle={90}
        endAngle={-270}
        paddingAngle={0}
        cornerRadius={0}
        blendStroke
      >
        <Cell
          key="test"
          fill="#0C7A67"
          cornerRadius={10}
        />
      </Pie>
    </PieChart>
  );
}


export const GeneralBarChart = ({ stats, yAxisKey, xAxisKey }) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={stats}
        radius={20}
        margin={{
          top: 0,
          right: 0,
          left: -35,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorTotalt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#17cba4" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#17cba4" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <YAxis tick={{ fontSize: '14px', color: '#626C77' }} />
        <XAxis dataKey={xAxisKey} />
        <Tooltip cursor={false} labelFormatter={() => ''} contentStyle={{ backgroundColor: '#333333', border: '1px solid transparent', borderRadius: '10px' }}
          wrapperStyle={{ border: 'none' }} content={<CustomTooltipErrors />} />
        <Bar dataKey={yAxisKey} fill="url(#colorTotalt)"
          background={{ fill: '#222436', radius: [10, 10, 0, 0] }}
          barSize={12} strokeWidth={3} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}


const StyledTooltip = styled.div`
  border: none;
  background-color: #000000;
  padding: 13px;
  border: none;
  font-weight: 500;
`;

const TooltipParagraph = styled.p`
  color: ${props => props.color ? props.color : 'white'};
  border: none;
  font-weight: inherit;
  font-size: 1rem;
`;

const TooltipSpan = styled.span`
  color: ${props => props.color ? props.color : 'inherit'};
  letter-spacing: 1px;
  border: none;
  font-size: 1.1rem;
`;

const colors = [
  '#17cba4', '#FF3131', '#8884d8', '#FFA07A', '#7FFFD4', '#8A2BE2', '#7FFF00',
  '#D2691E', '#DC143C', '#FF4500', '#2E8B57', '#ADFF2F', '#FFD700', '#DAA520',
  '#CD5C5C', '#8B0000', '#4682B4', '#00CED1', '#20B2AA', '#00FA9A'
];

export const CombinedGraph = ({ data, yAxisKey, xAxisKey, yAxisAccumulated }) => {
  const tooltipStyle = {
    backgroundColor: '#000000', 
    borderColor: '#000000' 
  };
  const xDomain = data.length > 1 ? [0, 'dataMax'] : [0, 1];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          top: 0, right: 0, left: -35, bottom: 0,
        }} >
        <XAxis dataKey={xAxisKey} domain={xDomain} />
        <YAxis />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend />
        <Area type="monotone" dataKey={yAxisAccumulated} fill="#20B2AA" stroke="#00CED1" />
        <ReferenceLine y={0} stroke="#666666" />
        <Bar dataKey={yAxisKey} fill="url(#colorTotalt)"
          barSize={12}
          strokeWidth={3}
          radius={[4, 10, 0, 0]} // For rounded corners on the bars
        />      </ComposedChart>
    </ResponsiveContainer>
  )
}

const CustomTooltipErrors = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <StyledTooltip>
        <TooltipParagraph> Number:  <TooltipSpan>{payload[0]?.payload?.number ?? 0}</TooltipSpan></TooltipParagraph>
        <TooltipParagraph> Frequency:  <TooltipSpan>{payload[0]?.payload?.freq ?? 0}</TooltipSpan></TooltipParagraph>
      </StyledTooltip>
    );
  }
  return null;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <StyledTooltip>
        {payload.map((item, index) => (
          <TooltipParagraph key={index} color={colors[index]}>
            {item.payload.size}: <TooltipSpan>{Number(item.value.toFixed(0)).toLocaleString().replace(',', ' ')}</TooltipSpan>
          </TooltipParagraph>
        ))}
        <TooltipParagraph>Datum: <TooltipSpan>{payload[0]?.payload?.date ?? ''}</TooltipSpan></TooltipParagraph>
      </StyledTooltip>
    );
  }
  return null;
};


export const PriceLineChart = ({ data }) => {
  const allValues = data.flat().map((obj) => (Math.round(obj.avgerageSqmPrice)));
  const maxValue = Math.max(...allValues)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data[0]}
        margin={{
          top: 0, right: 0, left: 10, bottom: 0,
        }}
      >
        <defs>
          {colors.map((color, index) => (
            <linearGradient key={index} id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid vertical={false} stroke="#DDDDDD60" />
        <XAxis dataKey="date" stroke="#F9F7F5" dy={10} allowDataOverflow={true} allowDuplicatedCategory={false} />
        <YAxis
          stroke="#F9F7F5"
          dx={-2}
          tick={{ fontSize: 15, color: 'transparent', letterSpacing: 0.5 }}
          domain={[0, maxValue + 1000]}
          allowDataOverflow={true}
          tickFormatter={(tick) => tick.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        />
        <Tooltip cursor={false} labelFormatter={() => ''} contentStyle={{ backgroundColor: '#333333', border: '1px solid transparent', borderRadius: '10px' }}
          wrapperStyle={{ border: 'none' }} content={<CustomTooltip />} />
        {data.map((dataArray, index) => (
          <Area
            key={index}
            type="monotone"
            data={dataArray}
            dataKey="avgerageSqmPrice"
            stroke={colors[index]}
            fill={`url(#color${index})`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PriceLineChart;