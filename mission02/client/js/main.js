
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const getNode = function (node) {
  if(typeof node !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입이어야 합니다.')
  }
  return document.querySelector(node)
}

const nav = getNode('.nav');
const ul = getNode('ul');
const body = getNode('body');
const visual = getNode('.visual img');
const nickName = getNode('.nickName')



function handleClick(e) {
  let target = e.target;
  let li = target.closest('li');

  while(!li){
    target = target.parentElement;
    li = target.closest('li');
    if(target.nodeName === 'BODY'){
      target = null;
      return;
    }
  }

  // is-active
  const list = [...ul.children] // HTMLCollection(forEach, filter 등 X)을 배열로 바꾸기
  list.forEach(function (item) {
    item.classList.remove('is-active')
  });
  li.classList.toggle('is-active');  

// 배경색 변경
let dataIndex = `${li.dataset.index - 1}`
let dataColor = data[dataIndex].color // ['#98d00f', '#002906']

body.style.background = `linear-gradient(to bottom, ${dataColor[0]}, ${dataColor[1]})`;

// 이미지 변경
let dataImg =  `./assets/${data[dataIndex].name.toLowerCase()}.jpeg`;
let dataAlt = data[dataIndex].alt

visual.src = dataImg;
visual.alt = dataAlt;

// 상단 이름 변경
let dataName = data[dataIndex].name;

nickName.textContent = dataName;
}

nav.addEventListener('click',handleClick);
