import Histogram from "../components/Histogram.tsx";
import PieView from "../components/PieView.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

function DetailView() {
    const initData = [
        { name: 'A', value: 4000 },
        { name: 'B', value: 3000 },
        { name: 'C', value: 2000 },
        { name: 'D', value: 2780 },
        { name: 'E', value: 1890 },
        { name: 'F', value: 2390 },
        { name: 'G', value: 3490 },
    ];

    const initTimeData = [
        { name: 'A', value: 4000 },
        { name: 'B', value: 3000 },
        { name: 'C', value: 2000 },
        { name: 'D', value: 2780 },
        { name: 'E', value: 1890 },
        { name: 'F', value: 2390 },
        { name: 'G', value: 3490 },
    ];

    const [data, setData] = useState(initData);
    const [timeData, setTimeData] = useState(initTimeData);

    const itemStyle = {
        margin: '10px'  // 给每个组件增加一些间距
    };

    useEffect(()=> {
        const postData = async () => {
            console.log("456")
            try {
                const response = await axios.post('http://127.0.0.1:49999/pie');
                const data = response.data;

                console.log(data)

                const dataList = Object.keys(data).map(key => ({
                    name: key,
                    value: data[key]
                }));
                console.log(dataList)

                setData(dataList);
            } catch (error) {
                console.log(error)
                return
            }
        }

        const timer = setTimeout(() => {
            postData()
        }, 200);

        return () => {
            console.log('123')
            clearTimeout(timer);
        }
    }, [])

    useEffect(()=> {
        const postData = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:49999/time');
                const data = response.data;
                console.log(data)
                const dataList = Object.keys(data.data.counts).map(key => ({
                    hour: parseInt(key),
                    count: data.data.counts[key]
                }));
                setTimeData(dataList);
            } catch (error) {
                console.log(error)
                return
            }
        }

        const timer = setTimeout(() => {
            postData()
        }, 200);

        return () => {
            console.log('123')
            clearTimeout(timer);
        }
    }, [])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',  // 默认值，可以省略
            flexWrap: 'wrap'       // 当一行排不下时，换行排列
        }}>
            {/*发帖时间*/}
            <div style={itemStyle}>
                <Histogram width={600} height={400} data={timeData} keyName='hour' dataName='count'/>
            </div>
            {/*热帖词频*/}
            <div style={itemStyle}>
                <Histogram width={600} height={400} data={data} keyName='name' dataName='value'/>
            </div>
            {/*热帖词频*/}
            <div style={itemStyle}>
                <PieView width={600} height={400} data={data} dataName='value'/>
            </div>
        </div>
    );
}

export default DetailView;
