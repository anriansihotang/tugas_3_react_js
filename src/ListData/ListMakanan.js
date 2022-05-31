import React, { Component } from "react";

class ListMakanan extends Component {
	constructor(props) {
		super(props);
		this.State = {
			datalist: this.props.linkmakanan
		};
	}

	render() {
		return (
			<div>
				<img src={this.State.datalist} alt="Product Makanan" width="150"/>
			</div>
		);
	}
}

export default ListMakanan;
