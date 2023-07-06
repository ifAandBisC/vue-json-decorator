<script>
import { decorateText } from '../utils'

export default {
  name: 'JsonNumber',
  functional: true,
  props: {
    jsonValue: {
      type: [Number, BigInt],
      required: true
    },
    decorator: {
      type: Function,
      default: null
    },
  },
  render (h, { props }) {
    const isInteger = Number.isInteger(props.jsonValue) || typeof props.jsonValue === 'bigint'

    const domProps = {}
    if (props.decorator) {
      domProps.innerHTML = decorateText(props.decorator, props.jsonValue.toString())
    } else {
      domProps.innerText = props.jsonValue.toString()
    }

    return h('span', {
      class: {
        'jv-item': true,
        'jv-number': true,
        'jv-number-integer': isInteger,
        'jv-number-float': !isInteger,
      },
      domProps
    })
  }
}
</script>
