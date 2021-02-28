import './index.css'

let content = ''
let color = ''
let icon = ''
let iconBackColor = ''
const index = {
    success: (data) => {
        content = data ? data.content ?  data.content : '成功' : '成功'
        icon = '√'
        iconBackColor = data ? data.iconBackColor ? data.iconBackColor : 'rgb(70, 182, 70)' : 'rgb(70, 182, 70)'
        color = data ? data.color ? data.color : 'rgb(70, 182, 70)' : 'rgb(70, 182, 70)'
        Cont()
    },
    fail: (data) => {
        content = data ? data.content ?  data.content : '失败' : '失败'
        icon = 'x'
        iconBackColor = data ? data.iconBackColor ? data.iconBackColor : 'rgb(252, 104, 104)' : 'rgb(252, 104, 104)'
        color = data ? data.color ? data.color : 'rgb(252, 104, 104)' : 'rgb(252, 104, 104)'
        Cont()
    },
    info: (data) => {
        content = data ? data.content ?  data.content : '提示' : '提示'
        icon = '?'
        iconBackColor = data ? data.iconBackColor ? data.iconBackColor : 'rgb(245, 245, 146)' : 'rgb(245, 245, 146)'
        color = data ? data.color ? data.color : 'rgb(245, 245, 146)' : 'rgb(245, 245, 146)'
        Cont()
    },
    warning: (data) => {
        content = data ? data.content ?  data.content : '警告' : '警告'
        icon = '!'
        iconBackColor = data ? data.iconBackColor ? data.iconBackColor : 'rgb(248, 224, 179)' : 'rgb(248, 224, 179)'
        color = data ? data.color ? data.color : 'rgb(248, 224, 179)' : 'rgb(248, 224, 179)'
        Cont()
    }
}
let divInner = ''
function Cont() {
    let html = document.createElement('div')
    html.id = "wt-message-wrap"
    divInner += `<span class='wt-message-content' style="color: ${color};"><span style="background-color: ${iconBackColor}" class='wt-message-icon'>${icon}</span>${content}</span>`
    html.innerHTML = divInner
    if (document.getElementById('wt-message-wrap')) {
        document.getElementById('root').removeChild(document.getElementById('wt-message-wrap'))
    }
    document.getElementById('root').appendChild(html)
    setTimeout(() => {
        document.getElementById('wt-message-wrap').style.opacity = 0
        document.getElementById('wt-message-wrap').style.transform = 'translate3D(-50%, -50px, 0) scale(-.5, -.5)'
        divInner = ''
    }, 2000);
}
export default index
