import $ from 'jquery';

import './index.css';
import './index.less';
import './index.scss';
import img from './img/1.png';

console.log('img', img);

$(function () {
    $('li:odd').css("background", "red").css("height", "30px")
    $('li:even').css("background", "green").css("height", "20px")
    $('.imgBox').attr("src", img)
})

function info(target) {
    target.info = 'Person info'
}


@info
class Person { }

console.log(Person.info);