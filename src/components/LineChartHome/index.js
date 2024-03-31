import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const LineChartHome = () => {
  const data = [
    {
      name: '0',
      guest: 120,
      user: 210,
      amt: 2400,
    },
    {
      name: 'Week 1',
      guest: 380,
      user: 350,
      amt: 2210,
    },
    {
      name: 'Week2',
      guest: 130,
      user: 220,
      amt: 2290,
    },
    {
      name: 'Week 3',
      guest: 350,
      user: 410,
      amt: 2000,
    },
    {
      name: 'Week 4',
      guest: 180,
      user: 250,
      amt: 2181,
    },
    {
      name: '',
      guest: 375,
      user: 390,
      amt: 2500,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={359}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="user"
          stroke="#8884d8"
          activeDot={{r: 8}}
        />
        <Line type="monotone" dataKey="guest" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartHome
