import {Image} from "antd";
import WordCloud from '../assets/WordCloud.png'
import {useEffect, useState} from "react";
import axios from "axios";

function MainView() {
    const [img, setImg] = useState(WordCloud);

    useEffect(()=> {
        const postData = async () => {
            console.log("456")
            try {
                const response = await axios.post('http://127.0.0.1:49999/wordcloud');
                setImg('data:image/png;base64,' + response.data);
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
        <div style={{width: '100%', height: '100%'}}> {/* 父容器的宽度和高度 */}
            <Image
                src={img}
                width={'100%'}
            />
        </div>
    );
}

export default MainView;
