import React, { useState, useEffect } from 'react'
//  暂不使用防抖
//  import _ from "lodash";
import style from './index.module.less'

function DecodeJson () {
    const [jsonData, setJsonData] = useState('');
    const [expandJson, setExpandJson] = useState({});
    useEffect(() => {
        console.log(jsonData)
        //  _.debounce(()=>{console.log('1')},500,{ 'maxWait': 1000 })
    });

    const JsonDataUpdate = (e)=>{
        setJsonData(e.currentTarget.value)
    };

    const renderJson = ()=>{
        try{
            const obj = JSON.parse(jsonData);
        }
        catch(error){
            return (<h4>{error.toString()}</h4>)
        }
        return <h4>{jsonData}</h4>
    }

    return (
    <div>
        <section className={style.leftpart}>
            <textarea className={style.inputBox} onKeyUp={(e)=>{JsonDataUpdate(e)}}>
            </textarea>
        </section>
        <section className={style.rightpart}>
            <div>
                {renderJson()}
            </div>
        </section>
    </div>
    )
}

export default DecodeJson