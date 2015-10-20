const {Router, Route, Link} = ReactRouter;

const Home = React.createClass ({	
	render: function() {
		return (
			<div>
			<h1><Link to='/'>Welcome to Vampire Academy</Link></h1>
			<p><Link to='/index'>Show all vampires</Link> || <Link to='/new'>New Vampire</Link></p>
			{this.props.children}
			</div>
		)
	}
})

const Index = React.createClass ({
	getInitialState() {
		return {data: []}
	},
	componentDidMount() {
		var that = this;
		$.ajax({
			url: '/index',
			method: 'GET',
			success: function(results) {
				that.setState({data: results})
			}
		})
	},
	render: function() {
		var vampireNodes = this.state.data.map(function(vampire) {
			return (
				<VampireNode vampire={vampire} />
			)
		})
		return (
			<div>
				<h1>Index</h1>
				{vampireNodes}
			</div>
		)
	}
})

var VampireNode = React.createClass ({
	render: function() {
		var link = "/show/"+this.props.vampire.name;
		return (
			<div>
				<h3><Link to={link}>{this.props.vampire.name}</Link></h3>
				<h4>{this.props.vampire.title}</h4>
				<p>Victims: {this.props.vampire.victims}</p>
				<p>Hair Color: {this.props.vampire.hair_color}</p>
				<p>Eye Color: {this.props.vampire.eye_color}</p>
				<p>DOB: {this.props.vampire.dob}</p>
				<p>Loves: {this.props.vampire.loves}</p>
				<p>Location: {this.props.vampire.location}</p>
				<p>Gender: {this.props.vampire.gender}</p>
			</div>
		)
	}
})

const VampireShow = React.createClass ({
	getInitialState() {
		return {data: {}}
	},
	componentDidMount(){
		var that = this;
		$.ajax({
			url: '/show/'+this.props.params.name,
			method: 'GET',
			success: function(results) {
				that.setState({data: results[0]})
			}
		})
	},
	render: function() {
		var link = '/edit/' + this.state.data._id
		return (
			<div>
				<h3>{this.state.data.name}</h3>
				<h4>{this.state.data.title}</h4>
				<p>Victims: {this.state.data.victims}</p>
				<p>Hair Color: {this.state.data.hair_color}</p>
				<p>Eye Color: {this.state.data.eye_color}</p>
				<p>DOB: {this.state.data.dob}</p>
				<p>Loves: {this.state.data.loves}</p>
				<p>Location: {this.state.data.location}</p>
				<p>Gender: {this.state.data.gender}</p>
				<p>id: {this.state.data._id}</p>
				<br/>
				<br/>
				<Link to={link}>Edit</Link>
			</div>
		)
	}
})

const NewVampire = React.createClass({
	render: function() {
		return (
			<div>
				<form method="post" action="/create">
					<div>
					<label>Name: </label>
					<input id="name" name="name" type="text"/>
					</div>
					<div>
					<label>Title: </label>
					<input id="title" name="title" type="text"/>
					</div>
					<div>
					<label>Victims: </label>
					<input id="name" name="victims" type="text"/>
					</div>
					<div>
					<label>Hair Color: </label>
					<input id="hair_color" name="hair_color" type="text"/>
					</div>
					<div>
					<label>Eye Color</label>
					<input id="eye_color" name="eye_color" type="text"/>
					</div>
					<div>
					<label>DOB</label>
					<input id="dob" name="dob" type="date"/>
					</div>
					<div>
					<label>Loves</label>
					<input id="loves" name="loves" type="text"/>
					</div>
					<div>
					<label>Location</label>
					<input id="location" name="location" type="text"/>
					</div>
					<div>
					<label>Gender</label>
					<input id="gender" name="gender" type="text"/>
					</div>
					<div>
						<input type="submit"/>
					</div>
				</form>
			</div>
		)
	}
})



const EditVampire = React.createClass({
	getInitialState() {
		return {data: {}}
	},
	componentDidMount() {
		var that = this;
		console.log(that.props)
		$.ajax({
			url: '/edit/'+that.props.params.id,
			method: 'GET',
			success: function(results) {
				that.setState({data: results[0]})
			}
		})
	},
	render: function() {
		return (
			<div>
				<form method="post" action="/edit">
					<div>
						<label>Name: </label>
						<input id="name" name="name" type="text" value={this.state.data.name} />
					</div>
					<div>
						<label>Title: </label>
						<input id="title" name="title" type="text" value={this.state.data.title}/>
					</div>
					<div>
						<label>Victims: </label>
						<input id="name" name="victims" type="text" value={this.state.data.victims}/>
					</div>
					<div>
						<label>Hair Color: </label>
						<input id="hair_color" name="hair_color" type="text" value={this.state.data.hair_color}/>
					</div>
					<div>
						<label>Eye Color</label>
						<input id="eye_color" name="eye_color" type="text" value={this.state.data.eye_color}/>
					</div>
					<div>
						<label>Loves</label>
						<input id="loves" name="loves" type="text" value={this.state.data.loves}/>
					</div>
					<div>
						<label>Location</label>
						<input id="location" name="location" type="text" value={this.state.data.location}/>
					</div>
					<div>
						<label>Gender</label>
						<input id="gender" name="gender" type="text" value={this.state.data.gender}/>
					</div>
					<div>
						<input type="submit"/>
					</div>
				</form>
			</div>
		)
	}
})
	

React.render((
	<Router>
		<Route path='/' component={Home} >
			<Route path='/index' component={Index}>
			</Route>
			<Route path='/show/:name' component={VampireShow} />
			<Route path='/new' component={NewVampire} >
			</Route>
			<Route path='/edit/:id' component={EditVampire} />
		</Route>
	</Router>
), document.body)