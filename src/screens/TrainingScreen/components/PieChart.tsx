import {StyleSheet} from 'react-native';
import React from 'react';
import Svg, {Path, Text as TextSVG, G} from 'react-native-svg';
import {SlicesDataInterface} from '../../type';

const getXY = (percent: number, radius: number) => {
  const x = Math.cos((2 * Math.PI * percent) / 100) * radius;
  const y = Math.sin((2 * Math.PI * percent) / 100) * radius;
  return {x, y};
};
interface PiechartProps {
  data: Array<SlicesDataInterface>;
}

const PieChart: React.FC<PiechartProps> = ({data}) => {
  const radius = 80;
  let tempPercent = 0;
  let tempTextPercent = 0;
  let prevMiddlePercent = 0;
  const slices = data.sort((a, b) => b.percent - a.percent);

  const pathDataList = slices.map(v => {
    const start = getXY(tempPercent, radius);
    tempPercent += v.percent;
    const end = getXY(tempPercent, radius);
    const largeArcFlag = v.percent > 50 ? 1 : 0;
    tempTextPercent += prevMiddlePercent + v.percent / 2;
    prevMiddlePercent = v.percent / 2;
    return {
      d: `M ${start.x} ${start.y}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
        L 0 0`,
      id: v.id,
      textPos: {
        x: getXY(tempTextPercent, radius / 2).x,
        y: getXY(tempTextPercent, radius / 2).y,
      },
      percent: v.percent,
    };
  });
  return (
    <Svg
      viewBox={`-100 -100 200 200`}
      style={{
        transform: [{rotateZ: '-90deg'}],
      }}
      width={300}
      height={300}>
      {pathDataList.map((v, i) => (
        <G key={v.id}>
          <Path d={v.d} fill={data[i].color} />
          <TextSVG
            x={v.textPos.x}
            y={v.textPos.y}
            fill="#fff"
            fontSize="12"
            textAnchor="end"
            transform={`rotate(90 ${v.textPos.x},${v.textPos.y})`}>
            {v.percent}%
          </TextSVG>
        
        </G>
      ))}
    </Svg>
  );
};

export default PieChart;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
