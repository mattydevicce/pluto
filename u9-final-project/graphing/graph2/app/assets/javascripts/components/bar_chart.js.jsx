var BarChart = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var bars = this.props.data.map(function(element, index) {
      return (
        <g>
          <text x="10" y={index * 25 - 5} fill="#FFFFFF">{element}</text>
          <rect x="0" y={index * 25} width={element * 50} height="20" fill="#FF0000" />
        </g>
      )
    })
    return (
      <svg>
        {bars}
      </svg>
    );
  }
});
