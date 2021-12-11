# sout

개발자 정보 커뮤니티! 개발자들의 살롱을 꿈꿉니다!
<br />

# 제작 기간 & 팀원 소개

- 2021년 11월 6일 ~ 11일, 총 작업기간 5일
- 5인 1조 팀 프로젝트
  - 프론트엔드 : https://github.com/mtae616/sout-FrontEnd
    - 강태수 : https://github.com/mtae616
    - 김용성 : https://github.com/YYZA
  - 백엔드 : https://github.com/SeongeunYang/sout-BackEnd
    - 양성은 : https://github.com/SeongeunYang
    - 고성범 : https://github.com/SeongBeomKo
    - 성해인 : https://github.com/sixthh-sense
<br />

# 사용 기술

- react
- redux
- redux-thunk
- react-router-dom
- material-ui
- axios
- connected-react-router
- immer
- lodash
- opengraph-react
- react-hook-form
- react-query
- styled-component
<br />

# 핵심 기능

- 로그인, 회원가입
  - jwt를 이용하여 로그인과 회원가입을 구현하였습니다.
  - 회원가입을 할 때에는 react-hook-form을 사용하여 양식에 맞는 유효성 검사를 구현하였습니다.
  - 카카오 소셜 로그인을 구현하였습니다.
  
- 게시글, 댓글 CRUD
  - 각 게시글과 댓글에 CRUD를 할 수 있습니다.
  - 유저정보를 Update 할 수 있습니다.
  - 유저정보를 update 할 때에는 react-query를 이용하여 변화를 감지할 때마다 자동으로 데이터를 fetch할 수 있게 하였습니다.


- 검색 기능
  - 원하는 게시글을 검색을 통하여 LOAD 할 수 있습니다.
  - 검색 게시글을 LOAD할 때에는, 페이지 이동을 하지 않고 메인화면에 바로 볼 수 있게 구현하였습니다.
  - 검색을 할 때에는 debounce 를 통하여 리렌더링을 최소화하였습니다.


- 무한스크롤 구현
  - 게시글을 3개 단위로 LOAD 할 수 있는 무한스크롤을 구현하였습니다.
  - 무한스크롤은 검색에도 마찬가지로 적용하였습니다.


- OG tag 게시글에 삽입
  - opengraph-react 라이브러리를 사용하여 각 게시글에는 해당하는 OG tag를 삽입하였습니다.
<br />

# 와이어 프레임

- <a href="https://diddl.tistory.com/102">블로그</a>
<br />

# 웹사이트 링크

- http://hanghae99-sout.s3-website.ap-northeast-2.amazonaws.com
<br />

# 유튜브 링크
- 업로드 예정
<br />
# 우리 팀이 해결한 문제

- axios를 통한 데이터관리 (김용성)
  - axios를 처음 사용해봐 데이터를 어떻게 쓰는지, axios에서 어떻게 fetch하는지, 백엔드 팀원들이 작성한 API명세를 어떻게 사용하는 것이 도전과제였습니다.
- 게시글 수정 시 원본게시글 유지 및 수정 (김용성)
  - 게시글을 수정할때 원본게시글이 유지가 되고, 그것을 변화하여 수정할 수 있도록 하였는데, 처음에는 Input에 value 값으로 넣으면 될 거 같다는 생각을 하였지만, value 값은 수정이 되지 않아서 onChange가 일어나지 않았고, 이 부분을 state를 고쳐주는 방식으로 하여 , useState를 사용하여 기존 value값을 수정해주는 방식으로 하였습니다.
- 로그인한 유저가 게시글을 작성한 유저와 동일할 때 Delete,Edit 버튼이 보이게 만드는 일을 진행하였습니다. 
- 협을위해 아토믹 패턴을 사용하고 ThemeProvider를 사용하여 전역스타일링을 지정하여 주었습니다.(강태수)
- 카카오 소셜로그인 관련 (강태수)
  - 카카오 소셜로그인을 하면서 jwt 토큰을 cookie에 저장하는데, 간혹 cookie에 저장이 되지 않는 현상이 발생하였습니다. (네트워크 관련) 하여 session에 저장한 뒤 session이 감지되면, cookie를 새로 발급하는 방식으로 문제를 해결하였고, 이 때 발생할 수 있는 로그인 관련 사항들을 메인페이지에서 다시 한 번 서버와 통신하여 jwt 토큰이 유효한지 검증할 수 있게 하였습니다.
- 검색 기능 (강태수)
  - 검색하여 load 되는 게시글들을 메인페이지에 표출되는 게시글의 컴포넌트와 공유하여 관리하고 싶은 관계로 redux에서 검색한 keyword가 있는지 판별하여 검색을 통한 게시물 load인지 메인페이지에서 전부 불러오는 게시글인지 분기하여 주어 해당하는 게시글들을 fetch 하였습니다.
  - opengraph-react 를 OG tag를 불러오는 라이브러리로 사용하였는데, 검색을 했을 때 게시글의 url이 바뀌어도 감지하지 못하는 일이 발생하였습니다. 검색해서 데이터를 fetch할 때에는 false라는 값을 갖는 변수를 redux에 지정해주었고 이것을 통해 렌더링이 되지 않게 지정한 이후, 이 변수가 OG tag 가 마운트 될 때에는 true가 되어 렌더링할 수 있게 하였습니다. 다만 이 떄 렌더링보다 true, false를 지정하는 dispatch가 먼저 일어나기 때문에 setTimeout을 통해 관리하였습니다.
  
