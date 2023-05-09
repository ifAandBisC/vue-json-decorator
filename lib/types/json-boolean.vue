<script>
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
        innerText: this.decorator && typeof this.decorator === 'function' ? this.decorator(props.jsonValue.toString()) : props.jsonValue.toString()
      }
    })
  }
}
</script>
