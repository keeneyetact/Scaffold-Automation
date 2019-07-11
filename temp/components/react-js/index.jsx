import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class Demo extends Component {
	static propTypes = {
		done: PropTypes.string
	}
	static defaultProps = {
		done: "Done"
	}
	render() {
		return <div className="demo-component">Demo Component {this.props.done}</div>;
	}
}