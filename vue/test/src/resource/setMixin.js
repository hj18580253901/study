import BMap from 'BMap'
export var mixin = {
  data: function () {
    return {
      cityName: ''
    }
  },
  created: function () {
    var that = this
    var myCity = new BMap.LocalCity()
    myCity.get((result) => {
      console.log(result)
      that.cityName = result.name
    })
  },
  methods: {
    returnClick: function () {
      this.$router.go(-1)
    }
  }
}
