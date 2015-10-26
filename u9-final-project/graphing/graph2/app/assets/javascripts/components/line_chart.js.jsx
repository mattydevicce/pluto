var LineChart = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var pathInfo = [];
    this.props.data.map(function(element, index) {
      pathInfo.push(index == 0 ? "M" : "L")
      pathInfo.push(index * 30)
      pathInfo.push(element * 10)
    })
    var labels = this.props.data.map(function(element, index) {
      return (
        <text x={index * 30} y={element*10}>{element}</text>
      )
    })
    return (
      <svg>
        <path d={pathInfo.join(' ')} stroke="#000000" fill="none"></path>
        {labels}
      </svg>
    );
  }
});
