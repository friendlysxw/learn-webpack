import _ from 'lodash';
import printMe from "./print";

function component(){
    const element=document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello','webpack',' 小兔兔那么可爱 '],'');

    btn.innerHTML = '单击我并检查控制台!';
    btn.onclick = printMe;

    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());