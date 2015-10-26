var RadialGraph = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var sum = this.props.data.reduce(function(a, b) { return a + b })
    var circumference = 2*Math.PI*40;
    var offset = 0;
    var arcs = this.props.data.map(function(element, index) {
      var color = ['#FF0000', '#00FF00', '#0000FF'][index % 3];
      var arc = circumference * (element / sum)
      console.log(arc, offset)
      var dashArray = [0, offset, arc, 999].join(' ')
      offset += arc
      return (
        <circle r="40" cx="60" cy="60" fill="none" stroke={color} strokeWidth="30" strokeDasharray={dashArray} />
      )
    })
    return (
      <svg>
        {arcs}
        <text>Sum: {sum}</text>
      </svg>
    );
  }
});
