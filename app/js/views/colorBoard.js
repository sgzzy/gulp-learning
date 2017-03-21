/**
 * Created by Administrator on 2016/12/8.
 */
import DrawImage from '../utils/colorBoard.js';
const lightBar = document.getElementById('lightBar');
const lCtx = lightBar.getContext('2d');
const rgbColor = document.getElementsByTagName('input');
const hexColor = rgbColor[3];
const colorBoard = document.getElementById('colorBoard').getElementsByTagName('img')[0];
const colorChoose = document.getElementsByClassName('color-choose')[0];
const colorBox = document.getElementsByClassName('colorBox')[0];
let rgb, hex;
// 明亮条对象
const light = {
  ctx: lCtx,
  width: lightBar.width,
  height: lightBar.height
};
const lightDraw = new DrawImage(light); // 初始化明亮条画板

colorBoard.addEventListener('mousedown', mousedown); // 选取颜色
lightBar.addEventListener('click', lightClick); // 选择明亮程度

/**
 *
 *
 * @param {any} event
 */
function mousedown(event){
  event = event || window.event;
  canClick(event);
  document.addEventListener('mousemove', mousemove); // 光标移动时颜色同步改变
  document.addEventListener('mouseup',function (e){
    e = e || window.event;
    document.addEventListener('mousemove', mousemove);
  });
}

function mousemove(event){
  event = event || window.event;
  const target = event.srcElement ? event.srcElement : event.target;
  if(target != colorBoard) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  canClick(event);
}
function canClick(event){
  let x = event.offsetX;
  let y = event.offsetY;
  x -= colorBoard.width / 2;
  y = colorBoard.width / 2 - y;
  const radius = Math.sqrt(x * x + y * y);
  if (radius > colorBoard.width/2) {
    x = x*(colorBoard.width/2/radius);
    x = x > 0 ? Math.floor(x): Math.ceil(x);
    y = y*(colorBoard.width/2/radius);
    y = y > 0? Math.floor(y): Math.ceil(y);
    $(colorBox).css('left', (x + colorBoard.width / 2) + 'px');
    $(colorBox).css('top', (colorBoard.width / 2 - y) + 'px');
    choose(x,y);
  } else {
    $(colorBox).css('left', event.offsetX + 'px');
    $(colorBox).css('top', event.offsetY + 'px');
    choose(x,y);
  }
}

function lightClick(event){
  event = event || window.event;
  const r = Number(rgbColor[0].value);
  const g = Number(rgbColor[1].value);
  const b = Number(rgbColor[2].value);
  const hsv = lightDraw.hsvToRgb(r, g, b);
  const y = event.offsetY;
  hsv.v = parseFloat(360 - y) / 360;
  const pixel = lightDraw.hsvToRgb(hsv.h, hsv.s, hsv.v);
  rgb = 'RGB(' + Math.floor(pixel.r) + ',' + Math.floor(pixel.g) + ',' + Math.floor(pixel.b) + ')';
  hex = lightDraw.colorHex(rgb);
  rgbColor[0].value = Math.floor(pixel.r).toString();
  rgbColor[1].value = Math.floor(pixel.g).toString();
  rgbColor[2].value = Math.floor(pixel.b).toString();
  hexColor.value = hex.replace('#', '');
  colorChoose.style.background = hex;
}

function choose(x,y){
  const hs = toHSV(x, y);
  const pixel = lightDraw.hsvToRgb(hs.h, hs.s, 1);
  rgb = 'RGB(' + Math.floor(pixel.r) + ',' + Math.floor(pixel.g) + ',' + Math.floor(pixel.b) + ')';
  hex = lightDraw.colorHex(rgb);
  rgbColor[0].value = Math.floor(pixel.r).toString();
  rgbColor[1].value = Math.floor(pixel.g).toString();
  rgbColor[2].value = Math.floor(pixel.b).toString();
  hexColor.value = hex.replace('#', '');
  colorChoose.style.background = hex;
  lightDraw.drawLight(hs.h, hs.s);
}

function toHSV(x, y){
  const h = Math.floor(Math.asin(y / Math.sqrt(x * x + y * y)) * 180 / Math.PI);
  const s = Math.sqrt(x * x + y * y) * 2 / colorBoard.width;
  return {
    h: h,
    s: s
  };
}
