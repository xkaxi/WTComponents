import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import{ WTConfirm, WTInput, WTMessage } from '../../WTComponents'

import './index.css'

function Home(props) {
    setTimeout(() => {
        WTMessage.success({content: '123', boxShadow: '1px 2px 3px #000', color: '#cdcdcd'})
        WTMessage.success()
        WTMessage.success()
        WTMessage.fail()
        WTMessage.info()
        WTMessage.warning()
    }, 0)
    useEffect(() => {
        let loginWhatcher = window.sessionStorage.getItem('login')
        if (loginWhatcher !== '已登录') {
            props.history.push('/')
            WTMessage.fail({content: '请登录'})
        }
    })
    let logoutClick = () => {
        props.history.push('/')
        window.sessionStorage.removeItem('login')
        WTMessage.success({content: '退出成功'})
    }
    let cancelLogout = () => {
        WTMessage.info({content: '取消退出'})
    }
    return (
        <div>
            <Row justify={'end'} className={'outWrap'}>
                <Col span={6} className={'topLeftCol'}>
                    <WTConfirm
                        msg={'确定'}
                        btnYes={''}
                        btnNo={''}
                    />
                </Col>
                <Col span={18} className={'topRightCol'}>
                    <WTConfirm
                        msg={''}
                        btnYes={''}
                        btnNo={''}
                        btnStyles={{borderColor: 'skyblue'}}
                        btnNoStyles={{color: 'red'}}
                        btnYesStyles={{color: 'green'}}
                        onConfirm={logoutClick}
                        onCancel={cancelLogout}
                        align='left'
                    />
                </Col>
            </Row>
            <Row style={{ height: 'calc( 100% - 100px )' }}>
                <Col span={6} className={'leftCol'}>
                    <WTInput 
                        label='姓名：'
                        labelShow='top'
                        isReset
                        type={'password'}
                        placeholder='请输入姓名'
                    />
                    <WTInput 
                        label='姓名：'
                        labelShow='top'
                        isReset
                        onChange={(e) => {WTMessage.success()}}
                        type={'password'}
                        placeholder='请输入姓名'
                    />
                </Col>
                <Col span={18} className={'rightCol'}>
                    <WTInput 
                        label='姓名：'
                        labelShow='top'
                        isReset
                        type={'password'}
                        placeholder='请输入姓名'
                    />
                    <WTConfirm
                        msg={''}
                        btnYes={''}
                        btnNo={''}
                    />
                    <div>1111111111</div>
                </Col>
            </Row>
        </div>
    )
}

export default Home