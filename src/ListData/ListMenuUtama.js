import React, { Component } from "react";

class ListMenutUtama extends Component {
	render() {
		return (
			<div>
				<h1>
					<center> Selamat Datang Di Warung Nusantara</center>
				</h1>
				<center>
					<img src={this.props.linkimg} alt="Makan Nusantara" width="600"/>
				</center>
			</div>
		);
	}
}

export default ListMenutUtama;