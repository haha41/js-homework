
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

// re.test()를 사용하여 정규식과 일치 여부를 확인합니다. 일치할 경우 true를 반환하고, 그렇지 않으면 false를 반환합니다.

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



// 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교

const email = document.querySelector('.user-email-input');
const pw = document.querySelector('.user-password-input');
const button = document.querySelector('.btn-login');

let emailPass = false;
let pwPass = false;


pw.addEventListener('input', function () {
  if (pwReg(this.value)) {
    this.classList.remove('is--invalid')
    pwPass = true;
  } else {
    this.classList.add('is--invalid')
    pwPass = false;
  };
})

button.addEventListener('click', function (event) {
  if (email.value === user.id && pw.value === user.pw) {
    window.location.href = 'welcome.html'
  };
  event.preventDefault();
})