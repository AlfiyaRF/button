import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import io from "socket.io-client";
import "./Btn.css";
import { changeBtn } from "./store/actions.js";


class Btn extends Component {
	constructor(props) {
		super(props);

		// Connect with socket and get the current button's state
		this.socket = io("http://localhost:3001");
		this.socket.on("btn state", (state) => {
			this.props.changeBtn(state)
		})

		this.btnClick = this.btnClick.bind(this);
	}

	// Change the state of button with click
	btnClick() {
		this.socket.emit("btn state", this.props.btnValue);
	}

	componentWillUnmount() {
		this.socket.close()
	}

	render() {
		return (
			<button className="btn" onClick={this.btnClick}>
				{this.props.btnValue}
			</button>
		)
	}
}

Btn.propTypes = {
	btnValue: PropTypes.string,
	changeBtn: PropTypes.func,
};

const mapStateToProps = function(store) {
	return { btnValue: store.btnValue };
};

const mapDispatchToProps = { changeBtn };

export default connect(mapStateToProps, mapDispatchToProps)(Btn);

