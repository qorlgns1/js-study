import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');
//api 호출 파일 프로토콜의 경우 실행이 안됨.. 그래서 웹프로토콜로 테스트를 진행해야 함.

