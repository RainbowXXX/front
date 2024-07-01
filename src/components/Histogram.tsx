import {Tooltip, Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts';


function Histogram({ width, height, data, keyName, dataName}: { width: number; height: number; data: any[]; keyName: string, dataName: string}) {
    return (
        <BarChart
            width={width}
            height={height}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={keyName} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataName} fill="#8884d8" />
        </BarChart>
    );
}

export default Histogram;