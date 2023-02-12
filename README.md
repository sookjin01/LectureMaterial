# LectureMaterial


20230108 완료

오전에 바벨 프로젝트 vue cli 설치

20230115 vue.js 플러기인 방식으로 할경우 인스턴스 중요 설치 컴포넌트가 중요

data 데이터를 주고 받을때에 내려주는것을 props 올려보낼때에 이벤트라고 한다. vuex

vscode root 는 .vscode 가 바로 아래 있어야 된다.


// 좀더 찾아보기

배열.map((item) => {
  return item.id;
});

배열.reduce((pvalue, cvalue, index, array) => {
  if (pvalue > cvalue) {
    return pvalue;
  } else {
    return cvalue;
  }
}, 0);

this.$emit()


배열.filter((item, index, arrya) => {
  if (item.id == id) {
    return false;
  } else {
    return true;
  }
});


map, reduce 설명
https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d




debugger >> 가끔 다른 이벤트 버블링을 발생시킨다 (click 이벤트)
click 이벤트 버블링 막기 => 이벤트 취소

window.event.stopPropagation();
window.event.preventDefault();
또는
v-on:click.stop="이벤트"
