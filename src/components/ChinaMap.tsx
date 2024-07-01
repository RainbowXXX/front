import React, {Component, useState, useEffect} from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import china from '../china.json';

echarts.registerTheme('my_theme', {
    backgroundColor: 'white',
});
echarts.registerMap('china', china);

interface ChinaMapProps {
    style?: any,
    data: any,
}

const MapChina = ({style, data}: ChinaMapProps) => {
    const [config, setConfig] = useState();

    return <ReactECharts
        theme={'my_theme'}
        option={{
            tooltip: {
                trigger: 'axis',
                formatter: '{b}: {c}',
            },
            visualMap: {
                min: 0,
                max: 1000,
                left: 26,
                bottom: 40,
                showLabel: true,
                text: ['高', '低'],
                pieces: [
                    {
                        gt: 100,
                        label: '> 100 人',
                        color: '#7f1100',
                    },
                    {
                        gte: 10,
                        lte: 100,
                        label: '10 - 100 人',
                        color: '#ff5428',
                    },
                    {
                        gte: 1,
                        lt: 10,
                        label: '1 - 9 人',
                        color: '#ff8c71',
                    },
                    {
                        gt: 0,
                        lt: 1,
                        label: '疑似',
                        color: '#ffd768',
                    },
                    {
                        value: 0,
                        color: '#ffffff',
                    },
                ],
                show: true,
            },
            geo: {
                map: 'china',
                roam: true,
                scaleLimit: {
                    min: 1,
                    max: 2,
                },
                zoom: 1,
                top: 0,
                itemStyle: {
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                },
                emphasis: {
                    areaColor: '#f2d5ad',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: '各地热点',
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    data: data,
                },
            ],
        }}
        style={style}
    />;
};

export default MapChina;
