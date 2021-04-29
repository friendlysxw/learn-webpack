import _ from 'lodash';
import './style.css';
import NotIeImgSrc from './not_ie.png'
function component(){
    const element=document.createElement('div');
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello','webpack'],'');
    element.classList.add('hello')

    // 将图像添加到我们已经存在的div中
    const myImage = new Image();
    myImage.src=NotIeImgSrc;
    element.appendChild(myImage);
    
    return element;
}
document.body.appendChild(component());