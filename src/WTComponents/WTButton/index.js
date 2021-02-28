import './index.css'
export default function index(props) {
    const { styles, content, onBtnClick } = props
    return (
        <button className={'wt-button'} style={styles} onClick={onBtnClick ? onBtnClick : null}>{content ? content : '确 认'}</button>
    )
}
