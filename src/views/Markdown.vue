<template>
  <div>
    <div class="container">
      <!-- 顶部 -->
      <div id="top" :class="{ day: change }">
        <h1>这是一个全新的MarkDown编辑器</h1>
      </div>
      <!-- 工具栏 -->
      <div class="toolDev">
        <button class="fullBtn" @click=";(full.show = !full.show), (full.fullEd = !full.fullEd)">全屏</button>
        <button @click="change = !change" class="specialBtn">切换主题</button>
      </div>

      <!-- 左侧侧栏 -->
      <div class="left_item" id="left" :class="{ day: change }">
        <b>菜单</b><br />
        HTML<br />
        CSS<br />
        JavaScript
      </div>

      <!-- 编辑和预览区 -->
      <div id="editor">
        <textarea :value="input" @input="update" :class="{ day: change, full: full.fullEd }"></textarea>
        <div class="preview" v-html="compiledMarkdown" v-show="full.show" :class="{ day: change }"></div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
export default {
  name: 'Markdown',
  data() {
    return {
      input: '# hello markdown',
      change: false,
      full: {
        show: true,
        fullEd: false,
        width: '79.8%'
      }
    }
  },
  methods: {
    update(e) {
      this.input = e.target.value
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input)
    }
  }
}
</script>

<style scoped lang="scss">
html,
body,
.full {
  width: 79.8%;
}
//最外层容器
.container {
  width: 90%;
  margin: 0 auto;
}
//顶部
#top {
  position: relative;
  top: 0;
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  background-color: #2a333c;

  h1 {
    color: #ddd;
  }
}
.toolDev {
  display: flex;
  width: 100%;
  background-color: rgb(238, 238, 238);
  .specialBtn {
    float: right;
  }
  .fullBtn {
    left: 100px;
  }
}

.left_item {
  width: 20%;
  height: 600px;
  float: left;
  background: #2a333c;
  color: #ddd;
  border: 1px solid #ccc;
}
#editor {
  margin: 0;
  height: 600px;
  font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
  color: #333;
}

textarea,
#editor div {
  text-align: left; //字显示在左侧
  float: left;
  width: 39.9%;
  height: 600px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid #ccc;
}
textarea {
  // width: 79.8%;
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #2a333c;
  color: #ddd;
  font-size: 18px;
  font-family: 'Monaco', courier, monospace;
}
.preview {
  background-color: #2a333c;
  color: #ccc;
  // display: none;
}
code {
  color: #ccc;
  font-size: 18px;
  background-color: #282c34;
  display: block;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
}
.day {
  background-color: rgb(243, 242, 238);
  color: #333;
  border: 1px solid #333;
}
</style>
