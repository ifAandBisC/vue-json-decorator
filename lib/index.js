import JsonDecorator from './json-decorator'

const install = Vue => {
  Vue.component('JsonDecorator', JsonDecorator)
}

export default Object.assign(JsonDecorator, { install })
