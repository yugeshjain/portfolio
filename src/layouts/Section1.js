import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { greetingTexts } from '../constants/constants';

class Section1 extends Component {
	render() {
		return (
			<div className="App__Section1">
				<div className="App__Section1__Content" data-aos="fade-up" data-aos-duration={600}>
					<div className="App__Section1__Content__Name">
						<Typewriter
							options={{
								strings: greetingTexts,
								autoStart: true,
								loop: true,
							}}
						/>
						I'm Sarthik Gupta!
					</div>
					<div className="App__Section1__Content__Title">Full-Stack Web Developer</div>
				</div>
				<div className="App__Section1__Picture" data-aos="fade-up" data-aos-duration={600}>
					<div className="App__Section1__Picture__Container">
						<img
							src={process.env.PUBLIC_URL + '/Photo.webp'}
							alt="Profile"
							className="App__Section1__Picture__Image"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Section1;
