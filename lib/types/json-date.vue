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

    return h('span', {
      class: {
        'jv-item': true,
        'jv-string': true,
      },
      domProps: {
        innerText: `"${props.decorator, decorateText(timeformat(value))}"`
      }
    })
  }
};
</script>
