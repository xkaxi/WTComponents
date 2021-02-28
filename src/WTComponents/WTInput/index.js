import React, {useState} from 'react'
import './index.css'

export default function Index(props) {
    const { 
        type, 
        inputStyles, 
        labelStyles, 
        autoFocus, 
        placeholder, 
        label, 
        styles, 
        labelShow, 
        value, 
        onClick, 
        onChange, 
        onFocus, 
        onBlur, 
        isReset, 
        readonly, 
        disabled,
        size,
        name,
        maxlength,
        hidden
    } = props
    let [inpDatas, setState] = useState({
        showReset: false,
        inpValue: '',
        inpFocus: false
    })
    let labelClick = (e) => {
        e.target.parentElement.getElementsByClassName('wt-input')[0].focus()
    }
    let onInpFocus = () => {
        if(onFocus) {
            onFocus()
        }
        setState({
            ...inpDatas,
            showReset: true
        })
    }
    let onInpBlur = () => {
        if(onBlur) {
            onBlur()
        }
        setState({
            ...inpDatas,
            showReset: false
        })
    }
    let resetClick = (e) => {
        e.target.parentElement.getElementsByClassName('wt-input')[0].value = ''
        e.target.parentElement.getElementsByClassName('wt-input')[0].focus()
    }
    return (
        <div className='wt-input-wrap' style={{ ...styles, display: labelShow === 'top' ? 'inline-block' : 'flex' }}>
            <div className='wt-input-label' style={labelStyles} onClick={labelClick}>{label}</div>
            <input className='wt-input' 
                style={inputStyles} 
                type={type !== 'checked' && type !== 'radio' && type !== 'reset' ? type : null} 
                autoFocus={autoFocus} 
                placeholder={placeholder} 
                defaultValue={value} 
                onClick={onClick} 
                onChange={onChange} 
                onFocus={onInpFocus} 
                onBlur={onInpBlur}
                disabled={disabled}
                readOnly={readonly}
                size={size}
                name={name}
                maxLength={maxlength}
                hidden={hidden}
            >
            </input>
            <span className='wt-input-reset' style={{opacity: inpDatas.showReset ? 1 : 0, display: isReset ? 'inline-block' : 'none'}} onClick={resetClick}>x</span>
        </div>
    )
}
