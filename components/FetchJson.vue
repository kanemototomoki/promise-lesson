<template>
  <div class="wrapper">
    <div>
      <button id="js-button" @click="getColorList">2秒後にカラーリストを取得するボタン</button>
    </div>
    <ul class="color-list"></ul>
    <div class="loading-wrapper">
      <div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getColorList() {
      const loadingWrapper = document.getElementsByClassName('loading-wrapper')[0];
      loadingWrapper.style.display = 'initial';
      setTimeout(() => {
        fetch('./data.json')
        .then((r) => r.json())
        .then((res) => {
          const targetElement = document.getElementsByClassName('color-list')[0];
          const createColorList = res.colorList.map((val) => {
            const _li = document.createElement('li');
            const _p = document.createElement('p');
            _p.innerHTML = val.colorName;
            _p.style.backgroundColor = val.colorValue;
            _p.classList.add('color-list__title');
            _li.classList.add('color-list__item');
            _li.appendChild(_p)
            targetElement.appendChild(_li);
          });
        });
        loadingWrapper.style.display = 'none';
      }, 2000);
    },
  }
}
</script>

<style>

ul, li {
  list-style: none;
}

.wrapper {
  padding: 20px;
}

.wrapper div {
  text-align: center;
}

.color-list {
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px #ccc;
}

.color-list__item +
.color-list__item {
  margin-top: 10px;
}

.color-list__title {
  padding: 10px;
  color: #fff;
  box-shadow: 0 0 2px #999 inset;
  font-weight: bold;
}

.loading-wrapper {
  width: 100%;
  height: 100vh;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: .3;
  display: none;
}

.loading-wrapper > div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle {
  width: 100px;
  height: 100px;
  border: 10px solid white;
  border-top-color: #00bcd4;
  border-radius: 50%;
  animation: loading 1.2s infinite linear;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
