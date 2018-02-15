import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import htmr from 'htmr';
import paramCase from 'param-case';
import generateStoryMarkup from './generate-story-markup';

class App extends Component {
	state = {
		title: '',
		html: '',
		css: '',
	};

	generateDownloadFile() {
		const blob = new Blob(
			[generateStoryMarkup(this.state)],
			{type: 'text/html'}
		);

		return this.url = URL.createObjectURL(blob);
	}

	componentWillUnmount() {
		if(this.url) {
			URL.revokeObjectUrl(this.url);
		}
	}

	render() {
		return <div>
			<input onChange={e => this.setState({title: e.target.value})} value={this.state.title} />
			<textarea onChange={e => this.setState({html: e.target.value})} value={this.state.html} />
			<textarea onChange={e => this.setState({css: e.target.value})} value={this.state.css} />
			<a download={`${paramCase(this.state.title)}.html`} href={this.generateDownloadFile()}>Download</a>
			<div>{htmr(this.state.html)}</div>
			<style dangerouslySetInnerHTML={{__html: this.state.css}} />
		</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
