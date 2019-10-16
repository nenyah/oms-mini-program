Component({
  mixins: [],
  data: {
    counter:35,
    },
  props: {
    onCounterPlusOne: {},
    extra: 'default extra',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    plusOne(e) {
      // console.log(e);
      const counter = this.data.counter + 1;
      this.setData({ counter });
      this.props.onCounterPlusOne(counter);
    },
  },
});
