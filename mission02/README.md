## 1. 클릭 이벤트 활성화
ul.children은 li이다.
spread syntax를 이용해서 htmlCollection을 배열로 만들었다.
forEach로 배열의 각 아이템을 순회하며 is-active를 제거하도록 했다.
그리고 클릭한 li(target)에만 is-active 클래스가 적용되게 했다.

## 2. nav 클릭시 배경 색상 변경
data는 배열 속 객체로 되어있다.
인덱스는 0번부터 시작하기 때문에 data-index에서 1을 빼서 각 객체의 프로퍼티에 접근했다.
color의 경우 배열로 되어 있기 때문에 인덱스 번호로 각 색상을 추출하였다.

## 3. 이미지 변경
데이터의 name은 대문자이고, 폴더명은 소문자여서 toLowerCase()를 사용하여 이미지 경로를 나타냈다.

## 4. 텍스트 변경
let dataName = data[dataIndex].name;
nickName.textContent = dataName;
