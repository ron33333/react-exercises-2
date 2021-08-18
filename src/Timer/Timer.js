import React, {useEffect, useState} from 'react';
import './Timer.css';

function Timer() {

	const [time, setTime] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			console.log('interval is runing!');
			setTime((previousValue) => previousValue + 1);
		},  1000);

		return () => {
			console.log('end of life')
			clearInterval(timer);
		}
	}, []);

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{time}</div>
		</div>
	)
}

export default Timer;
