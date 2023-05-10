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
    const domProps = {}
    if (props.decorator) {
      domProps.innerHTML = decorateText(props.decorator, props.jsonValue.toString())
    } else {
      domProps.innerText = props.jsonValue.toString()
    }
    return h('span', {
      class: {
        'jv-item': true,
        'jv-boolean': true,
      },
      domProps
    })
  }
}
</script>
