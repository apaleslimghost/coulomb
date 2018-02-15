import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import htmr from 'htmr';

class App extends Component {
	state = {
		html: '',
	};

	render() {
		return <div>
			<textarea onChange={e => this.setState({html: e.target.value})} value={this.state.html} />
			<div>{htmr(this.state.html)}</div>
		</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
