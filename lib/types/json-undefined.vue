<script>
import { decorateText } from '../utils'

export default {
  name: 'JsonUndefined',
  functional: true,
  props: {
    jsonValue: {
      type: Object,
      default: null
    },
    decorator: {
      type: Function,
      default: null
    },
  },
  render (h, { props }) {
    const text = props.jsonValue === null ? 'null' : 'undefined'
    const domProps = {}
    if (props.decorator) {
      domProps.innerHTML = decorateText(props.decorator, text)
    } else {
      domProps.innerText = text
    }
    return h('span', {
      class: {
        'jv-item': true,
        'jv-undefined': true,
      },
      domProps
    })
  }
}
</script>
