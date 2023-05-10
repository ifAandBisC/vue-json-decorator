<script>
import { decorateText } from '../utils'
export default {
  name: 'JsonBoolean',
  functional: true,
  props: {
    jsonValue: Boolean,
    decorator: {
      type: Function,
      default: null
    },
  },
  render (h, { props }) {
    return h('span', {
      class: {
        'jv-item': true,
        'jv-boolean': true,
      },
      domProps: {
        innerText: decorateText(props.decorator, props.jsonValue.toString())
      }
    })
  }
}
</script>
