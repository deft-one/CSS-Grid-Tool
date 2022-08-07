let upbtn = document.getElementById('up');
let rtbtn = document.getElementById('rt');
let dnbtn = document.getElementById('dn');
let lfbtn = document.getElementById('lf');
let cthbtn = document.getElementById('cth');
let ctvbtn = document.getElementById('ctv');
let container = document.getElementById('container');
let item = document.getElementById('item');
let parent = document.getElementById('parent');
let child = document.getElementById('child');
let prntJstfyItm = document.getElementById('prntJstfyItm');
let prntAlgnItm = document.getElementById('prntAlgnItm');
let chldJstfySlf = document.getElementById('chldJstfySlf');
let chldAlgnSlf = document.getElementById('chldAlgnSlf');

upbtn.addEventListener('click', direction);
dnbtn.addEventListener('click', direction);
lfbtn.addEventListener('click', direction);
rtbtn.addEventListener('click', direction);
cthbtn.addEventListener('click', direction);
ctvbtn.addEventListener('click', direction);

function direction(e) {
    if(e.target == upbtn) {
        item.style.alignSelf = 'start';
        prntAlgnItm.innerHTML = 'start';
        chldAlgnSlf.innerHTML = 'start';
    } else if (e.target == dnbtn) {
        item.style.alignSelf = 'end';
        prntAlgnItm.innerHTML = 'end';
        chldAlgnSlf.innerHTML = 'end';
    } else if (e.target == lfbtn) {
        item.style.justifySelf = 'start';
        prntJstfyItm.innerHTML = 'start';
        chldJstfySlf.innerHTML = 'start';
    } else if (e.target == rtbtn) {
        item.style.justifySelf = 'end';
        prntJstfyItm.innerHTML = 'end';
        chldJstfySlf.innerHTML = 'end';
    } else if (e.target == cthbtn) {
        item.style.justifySelf = 'center';
        prntJstfyItm.innerHTML = 'center';
        chldJstfySlf.innerHTML = 'center';
    } else if (e.target == ctvbtn) {
        item.style.alignSelf = 'center';
        prntAlgnItm.innerHTML = 'center';
        chldAlgnSlf.innerHTML = 'center';
    }
}