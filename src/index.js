import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import htmr from 'htmr';

class App extends Component {
	state = {
		html: '',
		css: '',
	};

	render() {
		return <div>
			<textarea onChange={e => this.setState({html: e.target.value})} value={this.state.html} />
			<textarea onChange={e => this.setState({css: e.target.value})} value={this.state.css} />
			<div>{htmr(this.state.html)}</div>
			<style dangerouslySetInnerHTML={{__html: this.state.css}} />
		</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
