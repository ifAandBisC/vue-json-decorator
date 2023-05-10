<script>
import { decorateText } from '../utils'

export default {
  name: 'JsonDate',
  inject: ['timeformat'],
  functional: true,
  props: {
    jsonValue: {
      type: Date,
      required: true
    },
    decorator: {
      type: Function,
      default: null
    },
  },
  render (h, { props, injections }) {
    const value = props.jsonValue;
    const timeformat = injections.timeformat;
    let text = timeformat(value)
    text = text.toLocalString ? text.toLocalString() : text.toString()

    const domProps = {}
    if (props.decorator) {
      domProps.innerHTML = `"${decorateText(props.decorator, text)}"`
    } else {
      domProps.innerText = `"${text}"`
    }

    return h('span', {
      class: {
        'jv-item': true,
        'jv-string': true,
      },
      domProps
    })
  }
};
</script>
