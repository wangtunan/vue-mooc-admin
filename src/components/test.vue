<template>
  <div class="test">
    姓名：{{name}}<br/>
    年龄：{{age}}<br/>
    双倍年龄：{{doubleAge}}<br/>
    性别：{{sex}}<br/>
    数量：{{count}}<br>
    单价：{{price}}<br/>
    <el-button type="primary" @click="handleBtnClick">点击</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Getter } from 'vuex-class'
import { getHotList } from 'api/common'
import { ResponseConfig } from '@/types/ajax'

@Component
export default class Test extends Vue {
  @Prop(String) private name!: string
  @Prop({ default: 23 }) private age!: number
  @Prop({
    type: [String, Boolean],
    default: true
  }) private sex!: string | boolean

  @State(state => state.count) count!: number
  @Getter('price') price!: number

  public handleBtnClick (): void {
    console.log(this.name)
  }

  private get doubleAge (): number {
    return this.age * 2
  }

  private created () {
    console.log('component created')
  }

  private mounted () {
    getHotList().then((res: ResponseConfig) => {
      const { code, msg, data } = res
      console.log(code, msg, data)
    })
    console.log('component mounted')
  }
}
</script>
