import React, { useState } from 'react'

import './index.css'
import { WTButton } from '../index'
export default function Index(props) {
    const { title, msg, btnYes, btnNo, align, onConfirm, onCancel, btnStyles, btnNoStyles, btnYesStyles } = props
    let [confirmDatas, setCont] = useState({
        contShow: false
    })
    function outClick () {
        setCont({
            ...confirmDatas,
            contShow: !confirmDatas.contShow
        })
    }
    function cancelClick() {
        if(!onCancel) {
            return
        }
        setCont({
            ...confirmDatas,
            contShow: !confirmDatas.contShow
        })
        onCancel()
    }
    return (
        <div className={'wt-confirm-wrap'}>
            <span className={'wt-confirm-title'} onClick={outClick}>{title ? title : '退出'}</span>
            <div className={['wt-confirm-cont', confirmDatas.contShow ? 'active' : ''].join(' ')} style={{transform: align ? align === 'left' ? 'translateX(-90%)' : 'translateX(0)' : 'translateX(0)'}}>
                <span className={'wt-confirm-pointer'} style={align ? align === 'left' ? {left: 'inherit', right: '2px'} : {left: '2px', right: 'inherit'} : {left: '2px', right: 'inherit'}}></span>
                <span className={'wt-confirm-msg'}>
                    {msg ? msg : '确认退出？'}
                </span>
                <div className={'wt-btns-wrap'}>
                    <WTButton 
                        onBtnClick={onConfirm}
                        styles={{...btnStyles, ...btnYesStyles, padding: '0 10px'}}
                        content={btnYes ? btnYes : '是'}
                    />
                    <WTButton 
                        onBtnClick={cancelClick}
                        styles={{...btnStyles, ...btnNoStyles, padding: '0 10px'}}
                        content={btnNo ? btnNo : '否'}
                    />
                </div>
            </div>
        </div>
    )
}