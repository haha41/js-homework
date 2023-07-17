
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 조건처리 
   - false면 해당 input에 is--invalid 추가
   - true면 해당 input에 is--invalid 제거

2. pw 정규표현식을 사용한 validation
   - false면 해당 input에 is--invalid 추가
   - true면 해당 input에 is--invalid 제거

3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교


5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

*/

// re.test()를 사용하여 정규식과 일치 여부를 확인합니다. 일치할 경우 true를 반환하고, 그렇지 않으면 false를 반환합니다.

// @ 기호 포함, .포함 이후 2글자 이상
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

// 최소 6글자 이상, 0~9숫자 1개 이상 포함, 특수기호 1개 이상 포함
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



// 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
const emailInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');
const loginButton = document.querySelector('.btn-login');

// 상태 변수 (정규표현식 비교 없이 아이디와 비밀번호 일치 후 로그인 하게 되면 통신 낭비라고 함)
let emailPass = false;
let pwPass = false;

// 함수 정의, 호출, 이벤트리스터 순으로 코드 짜기!

function handleCheckEmail(){
  // this는 emailInput
  const value = this.value;

  if(emailReg(value)){
    this.classList.remove('is--invalid');
    emailPass = true;
  }else{
    this.classList.add('is--invalid');
    emailPass = false;
  }
}

function handleCheckPw(){
  const value = this.value;

  if(pwReg(value)){
    this.classList.remove('is--invalid')
    pwPass = true;
  }else{
    this.classList.add('is--invalid')
    pwPass = false;
  }
}

// button은 form 태그안에 submit 형태로 있다.
// 태그가 가지고 있는 고유한 능력이 있는데, 지금은 작동되면 안됨
// e.preventDafault()
function handleLogin(e){
  e.preventDefault(); // 기본 동작 차단

  if(emailPass && pwPass){

    // 서버와 통신할 때 try catch는 필수임! 
    // 예: 서버에서 로컬로 가져올 때 인터넷이 끊긴 경우 catch에 해당됨. 프엔이 개발 할 때 보기에도  유용함 
    try{
      const id = emailInput.value;
      const pw = pwInput.value;
      
      const getUserId = user.id; // 서버에서 받아오는 것을 표현함 (백엔드))
      const getUserPw = user.pw;
  
      if(id === getUserId && pw === getUserPw){
        window.location.href = 'welcome.html';
      }else{
        console.log('정확한 아이디와 비밀번호를 입력해 주세요.');  
      }
    }
    catch(e){
      alert(e.message)
    }
  }else{
    console.log('정확한 아이디와 비밀번호를 입력해 주세요.');
  }
}

emailInput.addEventListener('input',handleCheckEmail)
pwInput.addEventListener('input',handleCheckPw)
loginButton.addEventListener('click',handleLogin)








