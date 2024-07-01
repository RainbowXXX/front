import ChinaMap from "../components/ChinaMap.tsx";
import Timeline from "../components/TimeLine.tsx";
import { useEffect } from 'react';
import {useState} from "react";
import axios from "axios";

const initData = [
    { name: '北京', value: 200 },
    { name: '天津', value: 150 },
    { name: '上海市', value: 80 },
    { name: '重庆', value: 10 },
    { name: '河北', value: 5 },
    { name: '河南', value: 2 },
    { name: '云南', value: 0 },
];

const city_province_mapping = {
    '北京': '北京市',
    '天津': '天津市',
    '上海': '上海市',
    '重庆': '重庆市',
    '河北': '河北省',
    '山西': '山西省', '辽宁': '辽宁省', '吉林': '吉林省',
    '黑龙江': '黑龙江省', '江苏': '江苏省', '浙江': '浙江省', '安徽': '安徽省',
    '福建': '福建省', '江西': '江西省', '山东': '山东省', '河南': '河南省',
    '湖北': '湖北省', '湖南': '湖南省', '广东': '广东省', '海南': '海南省',
    '四川': '四川省', '贵州': '贵州省', '云南': '云南省', '陕西': '陕西省',
    '甘肃': '甘肃省', '青海': '青海省', '台湾': '台湾省', '内蒙古': '内蒙古自治区',
    '广西': '广西壮族自治区', '西藏': '西藏自治区', '宁夏': '宁夏回族自治区',
    '新疆': '新疆维吾尔自治区', '香港': '香港特别行政区', '澳门': '澳门特别行政区'
}

function App() {
    const [value, setValue] = useState(0);
    const [data, setData] = useState(initData);

    const minStr = '2024-06-23 19:23:15'
    const maxStr = '2024-06-30 21:30:51'
    const min_time = 1719141795*1000
    const max_time = 1719754251*1000

    useEffect(()=> {
        const postData = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:49999/timestemp', {
                    lhs: Math.floor(value / 1000) - 1800,
                    rhs: Math.floor(value / 1000) + 1800,
                });
                const data = response.data.ip_counts;
                const dataList = Object.keys(data).map(key => ({
                    name: city_province_mapping[key],
                    value: data[key]
                }));
                setData(dataList);
            } catch (error) {
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
    }, [value, setData])

    return (
        <>
            <div className="App"
                 style={{
                     display: "flex",
                     flexDirection: "column",
                     width: "100%",
                     height: "100vh",
                 }}
            >
                {/*<h1 style={{textAlign: "center"}}>微博热点实况分析</h1>*/}
                <div className="TimeLine" style={{ margin: 0 }}>
                    <Timeline
                        min={min_time}
                        max={max_time}
                        minStr={minStr}
                        maxStr={maxStr}
                        value={value}
                        setValue={setValue}
                    />
                </div>
                <ChinaMap
                    style={{
                        flexGrow: 1, // 让 ChinaMap 占满剩余空间
                        width: "100%"
                    }}
                    data={data}
                />
            </div>
        </>
    );
}

export default App;
