import _ from 'lodash';
import './style.css';
import Mugatu from './mugatu.png';


function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Mugatu;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());