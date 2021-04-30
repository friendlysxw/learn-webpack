import _ from 'lodash';

function component(){
    const element=document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack',' 小兔兔那么可爱 '],'');
    
    return element;
}

document.body.appendChild(component());