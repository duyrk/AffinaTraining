import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Defs,
  G,
  Polyline,
  Rect,
  Svg,
  Text,
  LinearGradient,
  Stop,
  Line,
} from 'react-native-svg';
import {colors} from '../../../themes';

type Props = {
  data: Array<any>;
  width: number;
  height: number;
  precision?: any;
  horizontalGuides: number;
};
const ColumnChart = React.memo((props: Props) => {
  const {data, width, height, precision, horizontalGuides} = props;
  const FONT_SIZE = 12;
  const maximumXFromData = Math.max(...data.map(e => e.x));
  const maximumYFromData = Math.max(...data.map(e => e.y));
  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;
  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const Axis = ({points}: any) => (
    <Polyline
      fill={'none'}
      stroke={colors.dark.borderColor}
      strokeWidth={0.5}
      points={points}
      strokeDasharray={5}
    />
  );
  const XAxis = () => (
    <Axis
      points={`${padding},${height - padding} ${width - padding},${
        height - padding
      }`}
    />
  );
  const HorizontalGuides = () => {
    const startX = padding;
    const endX = width - padding;
    return new Array(horizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / (horizontalGuides ?? 1);
      const yCoordinate = chartHeight - chartHeight * ratio + padding;
      return (
        <React.Fragment key={index}>
          <Polyline
            fill={'none'}
            stroke={colors.dark.borderColor}
            strokeWidth={0.5}
            points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
            strokeDasharray={5}
          />
        </React.Fragment>
      );
    });
  };

  const Column = () => {
    return data.map((element, index) => {
      /**
       * map over each element in the data array and calculate where x and y values are for the SVG point
       */
      const x = (element.x / maximumXFromData) * chartWidth + padding;
      const y =
        chartHeight - (element.y / maximumYFromData) * chartHeight + padding;
      return (
        <G key={index}>
          <Defs>
            <LinearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor={'rgb(255,255,0)'} stopOpacity={1} />
              <Stop offset="100%" stopColor={'rgb(255,0,0)'} stopOpacity={1} />
            </LinearGradient>
          </Defs>
          <Rect
            width="30"
            height={chartHeight - (y - padding)}
            x={x - FONT_SIZE}
            y={y}
            fill="url(#grad1)"
          />
        </G>
      );
    });
  };
  const LabelsXAxis = () => {
    const y = height - padding + FONT_SIZE * 2;
    return data.map((element, index) => {
      const x =
        (element.x / maximumXFromData) * chartWidth + padding - FONT_SIZE / 2;
      return (
        <Text
          key={index}
          x={x}
          y={y}
          fill={'rgb(255,255,0)'}
          fontSize={FONT_SIZE}
          fontFamily="Helvetica">
          {element.label}
        </Text>
      );
    });
  };
  const LabelsYAxis = () => {
    const PARTS = horizontalGuides ?? 0;
    return new Array(PARTS + 1).fill(0).map((_, index) => {
      const x = FONT_SIZE;
      const ratio = index / horizontalGuides;
      const y = chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
      return (
        <Text
          key={index}
          x={x}
          y={y}
          fill={'rgb(255,255,0)'}
          fontSize={FONT_SIZE}
          fontFamily="Helvetica">
          {(maximumYFromData * (index / PARTS)).toFixed(precision)}
        </Text>
      );
    });
  };
  return (
    <Svg
      fill={'none'}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}>
      <XAxis />
      <LabelsXAxis />
      <LabelsYAxis />
      <HorizontalGuides />
      <Column />
    </Svg>
  );
});

export default ColumnChart;

const styles = StyleSheet.create({});
