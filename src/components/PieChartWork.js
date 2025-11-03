'use client';
import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

// Convert hex color to rgba with opacity
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const testData = [
  { Class: 'Late', Submitted: 'Yes', Count: 123 },
  { Class: 'Ontime', Submitted: 'Yes', Count: 167 },
  { Class: 'Early', Submitted: 'Yes', Count: 528 },
  { Class: 'Pending', Submitted: 'No', Count: 696 },
];

const classes = ['Late', 'Ontime', 'Early', 'Pending'];

const totalCount = testData.reduce((acc, item) => acc + item.Count, 0);

// Define colors for each class
const classColors = {
  'Late': '#eb2626ff',
  'Ontime': '#1bac53ff',
  'Early': '#082c01ff',
  'Pending': '#544c53ff',
};

// Different opacity based on class
const opacityMap = {
  'Late': 0.9,
  'Ontime': 0.7,
  'Early': 0.5,
  'Pending': 0.3,
};

const classData = classes.map((pClass) => {
  const classTotal = testData
    .filter((item) => item.Class === pClass)
    .reduce((acc, item) => acc + item.Count, 0);
  return {
    id: pClass,
    label: `${pClass} Class:`,
    value: classTotal,
    percentage: (classTotal / totalCount) * 100,
    color: classColors[pClass],
  };
});

const classSubmissionData = classes.flatMap((pClass) => {
  const classTotal = classData.find((d) => d.id === pClass).value ?? 0;
  const baseColor = classColors[pClass];
  return testData
    .filter((item) => item.Class === pClass)
    .sort((a, b) => (a.Submitted > b.Submitted ? 1 : -1))
    .map((item) => ({
      id: `${pClass}-${item.Submitted}`,
      label: item.Submitted,
      value: item.Count,
      percentage: (item.Count / classTotal) * 100,
      color: item.Submitted === 'Yes' ? baseColor : `${baseColor}80`, // 80 is 50% opacity for 'No'
    }));
});

const SubmissionData = [
  {
    id: 'Yes',
    label: 'Survived:',
    value: testData
      .filter((item) => item.Submitted === 'Yes')
      .reduce((sum, item) => sum + item.Count, 0),
    percentage:
      (testData
        .filter((item) => item.Submitted === 'Yes')
        .reduce((sum, item) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors['Early'],
  },
  {
    id: 'No',
    label: 'Not Submitted:',
    value: testData
      .filter((item) => item.Submitted === 'No')
      .reduce((sum, item) => sum + item.Count, 0),
    percentage:
      (testData
        .filter((item) => item.Submitted === 'No')
        .reduce((sum, item) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors['Pending'],
  },
];

const submittedClassData = [...testData]
  .sort((a) => (a.Submitted === 'Yes' ? -1 : 1))
  .map((item) => {
    const baseColor = SubmissionData.find((d) => d.id === item.Submitted).color;
    return {
      id: `${item.Class}-${item.Submitted}`,
      label: `${item.Class} class:`,
      value: item.Count,
      percentage:
        (item.Count /
          (item.Submitted === 'Yes'
            ? SubmissionData[0].value
            : SubmissionData[1].value)) *
        100,
      color: hexToRgba(baseColor, opacityMap[item.Class] || 1),
    };
  });

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function Testdata() {
  const [view, setView] = React.useState('class');
  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const innerRadius = 50;
  const middleRadius = 120;

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Submission Analysis
      </Typography>
      <ToggleButtonGroup
        color="primary"
        size="small"
        value={view}
        exclusive
        onChange={handleViewChange}
      >
        <ToggleButton value="class">View by Class</ToggleButton>
        <ToggleButton value="submission">View by Submission</ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: 400 }}>
        {view === 'class' ? (
          <PieChart
            series={[
              {
                innerRadius,
                outerRadius: middleRadius,
                data: classData,
                arcLabel: (item) => `${item.id} (${item.percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
              {
                innerRadius: middleRadius,
                outerRadius: middleRadius + 20,
                data: classSubmissionData,
                arcLabel: (item) => `${item.label} (${item.percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                arcLabelRadius: 160,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontSize: '12px',
              },
            }}
            hideLegend
          >
            <PieCenterLabel>Class</PieCenterLabel>
          </PieChart>
        ) : (
          <PieChart
            series={[
              {
                innerRadius,
                outerRadius: middleRadius,
                data: SubmissionData,
                arcLabel: (item) => `${item.id} (${item.percentage.toFixed(0)}%)`,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
              {
                innerRadius: middleRadius,
                outerRadius: middleRadius + 20,
                data: submittedClassData,
                arcLabel: (item) => {
                  const id = item.id || '';
                  const percentage = item.percentage || 0;
                  return `${id.split('-')[0]} (${percentage.toFixed(0)}%)`;
                },
                arcLabelRadius: 160,
                valueFormatter: ({ value }) =>
                  `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                highlightScope: { fade: 'global', highlight: 'item' },
                highlighted: { additionalRadius: 2 },
                cornerRadius: 3,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontSize: '12px',
              },
            }}
            hideLegend
          >
            <PieCenterLabel>DATA</PieCenterLabel>
          </PieChart>
        )}
      </Box>
    </Box>
  );
}