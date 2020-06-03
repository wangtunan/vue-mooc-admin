<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test :name="name"></test>
  </div>
</template>

<script lang="ts">
import Test from '@/components/test.vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {
    Test
  }
})
export default class About extends Vue {
  name = 'AAA'
}
</script>
