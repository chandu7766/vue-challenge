const multiply = (x, y) => { return x * y }

const multiplier = new Vue({
  el: '#multiplier',
  data: {
    guest: 'Chandu',
    numberOne: 6,
    numberTwo: 3
  },
  computed: {
    answer: function () {
      const i = parseInt(this.numberOne)
      const j = parseInt(this.numberTwo)
      return `${this.guest}, your estimated total tasks ${multiply(i, j)}.`
    }
  }
})