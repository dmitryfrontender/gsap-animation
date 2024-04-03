<template>
  <h1>Welcome to IT space</h1>
  <router-view/>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-size: 0;
  text-align: center;
  background-color: #000;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 3px solid #91b3fa;
  border-radius: 10px;
  padding: 20px;
}
h4 {
  font-size: 24px;
  line-height: 24px;
}
.routes-block {
  display: flex;
  gap: 30px;
}
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: 30px;
}

.svg-block {
  width: 100%;
  margin-bottom: 50px;
  svg {
    max-width: 100%;
    max-height: 500px;
  }
}

.routes-block {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
}
</style>
