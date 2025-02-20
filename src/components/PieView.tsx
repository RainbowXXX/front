import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    Legend,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieView = ({width, height, data, dataName}: { width: number; height: number; data: any[]; dataName: string}) => (
    <PieChart width={width} height={height}>
        <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)} %`}
            outerRadius={120}
            fill="#8884d8"
            dataKey={dataName}
        >
            {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip />
        <Legend />
    </PieChart>
);

export default PieView;
