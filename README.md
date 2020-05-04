# Mask-Map
포트폴리오용으로 제작된 Mask 구입처 정보제공 프로젝트입니다.
  
정부에서 제공하는 마스크 구입 정보 API와 Kakao Map API를 활용하여 제작하였습니다.
  
  
!! 정부에서 API 정보를 더이상 제공하지 않게 되면, 사이트가 동작하지 않을 수 있습니다.  

![maskmap-1](https://user-images.githubusercontent.com/7731519/80944571-d747df80-8e24-11ea-8899-41a50e3cd21a.png)
![maskmap-2](https://user-images.githubusercontent.com/7731519/80944583-dd3dc080-8e24-11ea-9397-ccde36378dcd.png)


## 프로젝트 설치
```
git clone https://github.com/cjy9306/mask-map.git
npm install
```

## 프로젝트 실행
시작
```
npm start
```
빌드 환경의 경우 package.json의 NODE_ENV 환경변수를 변경하여 설정하실 수 있습니다.

## 프로젝트 구조
root
 - docs: 빌드된 파일들. github pages를 이용하여 서비스중
 - public: template 파일들(index.html 등)
   - index.html: index.html의 template 파일. kakao map api가 설정되어 있음.
 - src: src 파일들이 위치
   - components: 공통적으로 많이 사용되는 JSX 컴포넌트들
   - App.js: Root 컴포넌트
   - index.js: react entry
 
## 사용법
해당 프로젝트가 필요하신 분들은 아래 내용을 수정하신 후 사용하시면 됩니다.
1. kakao map에 대한 api가 필요합니다. 자세한 내용은 kakao 개발자 사이트 참고하시면 됩니다.
