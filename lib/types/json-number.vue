<script>
import { decorateText } from '../utils'

export default {
  name: 'JsonNumber',
  functional: true,
  props: {
    jsonValue: {
      type: Number,
      required: true
    },
    decorator: {
      type: Function,
      default: null
    },
  },
  render (h, { props }) {
    const isInteger = Number.isInteger(props.jsonValue)

    return h('span', {
      class: {
        'jv-item': true,
        'jv-number': true,
        'jv-number-integer': isInteger,
        'jv-number-float': !isInteger,
      },
      domProps: {
        innerText: decorateText(props.decorator, props.jsonValue.toString())
      }
    })
  }
}
</script>
