import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const COLORS = ['#00C49F', '#FF8042', '#FFBB28']

const PieChart = props => {
  const {won, draw, lost} = props
  console.log(won, draw, lost, 'piechart data')
  const info = [
    {count: won, name: 'Won'},
    {count: lost, name: 'Lost'},
    {count: draw, name: 'Draw'},
  ]

  return (
    <div className="pie-chart-bg-container mt-2 d-flex justify-content-center">
      <PieChartComponent width={400} height={350}>
        <Pie
          cx="50%"
          cy="60%"
          data={info}
          startAngle={360}
          endAngle={0}
          innerRadius="30%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Won" fill="green" />
          <Cell name="Lost" fill="red" />
          <Cell name="Draw" fill="blue" />
        </Pie>
        <Tooltip />
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChartComponent>
    </div>
  )
}

export default PieChart
