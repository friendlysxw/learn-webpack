import _ from 'lodash';
import './style.css';
import NotIeImgSrc from './not_ie.png'
import DataXml from './data.xml';
import DataCsv from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json5 from './data.json5';

console.log('toml.title:',toml.title);
console.log('toml.owner.name:',toml.owner.name);

console.log('yaml.title:',yaml.title);
console.log('yaml.owner.name:',yaml.owner.name);

console.log('json5.title:',json5.title);
console.log('json5.owner.name:',json5.owner.name);

function component(){
    const element=document.createElement('div');
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello','webpack',' 小兔兔那么可爱 '],'');
    element.classList.add('hello')

    // 将图像添加到我们已经存在的div中
    const myImage = new Image();
    myImage.src=NotIeImgSrc;
    element.appendChild(myImage);

    console.log('DataXml',DataXml);
    console.log('DataCsv',DataCsv);
    
    return element;
}
document.body.appendChild(component());