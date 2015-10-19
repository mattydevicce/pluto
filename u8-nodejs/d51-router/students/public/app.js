const {Router, Route, Link} = ReactRouter;

const App = React.createClass ({
	render: function() {
		return (
			<div>
				<h2>I am the App component</h2>
				<p><Link to='/'>Home</Link></p>
				<p><Link to='/posts'>Posts</Link></p>
				{this.props.children}
			</div>
		);
	}
});

const Posts = React.createClass ({
	getInitialState() {
    return {
    	data: []     
    };
	},
	componentDidMount() {
		var that = this;
		$.ajax({
			url: '/posts',
			method: 'GET',
			success: function(results, status) {
				that.setState({data: results})
			}
		})
	},
	render: function() {
		var posts = this.state.data.map(function(post) {
			return (
				<Post data={post} />
			)
		});
		return (
			<div>
				<h3>Posts</h3>
				<div>
					{posts}
				</div>
			</div>
		)
	}
})

const Post = React.createClass ({
	render: function() {
		return (
			<div>
				<h4>{this.props.data.title}</h4>
				<p>{this.props.data.content}</p>
				<p>{this.props.data.author}</p>
			</div>
		)
	}
})


React.render((
	<Router>
		<Route path="/" component={App}>
			<Route path='/posts' component={Posts}>
			</Route>
		</Route>
	</Router>
), document.body)