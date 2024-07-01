import React from 'react';
import type { SliderSingleProps } from 'antd';
import { Slider } from 'antd';

interface IconSliderProps {
    max: number;
    min: number;
    minStr: string;
    maxStr: string;
    value: number;
    setValue: (value: number) => void;
}

const formatTimestamp = (timestamp: number| undefined): string => {
    if (timestamp === undefined) { return '' }
    const date = new Date(timestamp);
    return date.toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
};

const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${formatTimestamp(value)}`;

const TimeLine: React.FC<IconSliderProps> = ({min, max, minStr, maxStr, value, setValue}) => {

    return (
        <div className="icon-wrapper" style={{display: 'flex', alignItems: 'center', marginLeft: 50, marginRight: 50}}>
            <p style={{marginRight: 10}}>{minStr}</p>
            <Slider
                min={min}
                max={max}
                onChange={setValue}
                value={value}
                tooltip={{formatter}}
                style={{
                    flex: 1
            }}/>
            <p style={{marginLeft: 10}}>{maxStr}</p>
        </div>
    );
};

export default TimeLine;
