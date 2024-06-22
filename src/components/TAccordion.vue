<template>
  <!-- struktura accordionu -->
  <div class="accordion">
    <div class="accordion-item" v-for="(item, index) in accData">
      <div class="header">
        <div class="header-title">{{ item.header }}</div>
        <div class="header-button">
          <span @click="onClick(index)">></span>
        </div>
      </div>
      <div class="content">
        <transition name="accordion" @before-enter="console.log('before-enter')" @after-enter="console.log('after-enter')">
          <div v-if="show[index]" class="inner">
              {{  contents[index] }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
import { getData } from '@/data.js';


export default {
  name: 'TAccordion',
  props: {
    accData: Array
  },
  data () {
    return {
      show: [],
      contents: []
    }
  },
  created () {
    // for(let i = 0; i < this.accData.length; i ++) {
    //   this.show.push(false)
    // }
    this.accData.forEach(() => {
      this.show.push(false)
      this.contents.push('')
    })
  },
  methods: {
    onClick (index) {
      // this.show.forEach((item, i) => {
      //   this.show[i] = i === index ? !this.show[i] : false
      // })
      this.show.forEach((item, i) => {
        if (index !== i) {
          this.show[i] = false
          return
        }
        if (this.show[index]) {
          this.show[index] = false
          return
        }
        getData(this.accData[index].id)
          .then(content => {
            this.contents[index] = content
            this.show[index] = true
          })
      })
    }
  }
}

</script>

<style scoped>
.accordion {
  border: 1px solid black;
  min-width: 300px;
  width: 60%;
  margin: auto;
}
.accordion-item {
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.accordion-item:last-child {
  border-bottom: none;
}
.header {
  display: flex;
  height: 3rem;
  background: #efefef;
}
.header-title {
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.header-button {
  width: 3rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 400ms ease;
}
.header-button:hover {
  background: #dedede;
}
.header-button span {
  transform: rotate(90deg)
}
.content {
  border-top: 1px solid #ababab;
  overflow: hidden;
  height: auto;
  background: lightpink;
  transition: all .2s linear;
}
.inner {
  background: lightgreen;
  overflow: hidden;
}

.accordion-enter-from {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to {
  opacity: 1;
  /* height: 100%; */
  max-height: 2rem;
}
.accordion-leave-from {
  opacity: 1;
  max-height: 2rem;
}
.accordion-leave-to {
  opacity: 0;
  max-height: 0rem;
}
.accordion-enter-active {
  transition: all 2s ease
}
.accordion-leave-active {
  transition: all 2s ease
}
</style>