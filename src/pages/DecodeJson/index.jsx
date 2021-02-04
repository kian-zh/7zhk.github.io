import React, { useState, useEffect } from 'react'
import style from './index.module.less'

function DecodeJson () {
    const [jsonText, setJsonText] = useState('');
    const [jsonObj, setJsonObj] = useState({});
    const [expandJson, setExpandJson] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        console.log('realod')
    });

    const JsonDataUpdate = (e)=>{
        const localJsonText = e.currentTarget.value
        const localJsonObj = JSON.parse(localJsonText)
        try{
            const localExpandNode = {}
            addExpandNode(localJsonObj,localExpandNode)
            setError('')
            setExpandJson(localExpandNode)
        }catch(error){
            setError(error.toString())
        }
        setJsonObj(localJsonObj)
        setJsonText(localJsonText)
    }

    const addExpandNode = (json,expandNode) => {
        if(json instanceof Object){
            const keys = Object.keys(json)
            expandNode[0] = false
            keys.forEach((key)=>{
                expandNode['$_'+key]={}
                addExpandNode(json[key],expandNode['$_'+key])
            })
        }
    }

    const changeExpandNode = (path) => {
        const localExpandJSON = expandJson
        const node = localExpandJSON
        path.forEach((pa)=>{
            node = node[pa]
        })
        node[0] = ! node[0]
        setExpandJson(localExpandJSON)
    }

    const renderLines = () => {

    }

    const renderJson = ()=>{
        if(error){
            return <h4>{error}</h4>
        }else{
            const lines = []
            
            
            return <p>{JSON.stringify(expandJson)}</p>
        }
    }

    return (
    <div>
        <section className={style.leftpart}>
            <textarea className={style.inputBox} onChange={(e)=>{JsonDataUpdate(e)}}>
            </textarea>
        </section>
        <section className={style.rightpart}>
            <div className={style.outputBox}>
                {renderJson()}
            </div>
        </section>
    </div>
    )
}

export default DecodeJson