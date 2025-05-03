import Styles from "./FerrisWheel.module.scss";

const FerrisWheel = ({ icons, radius = 120 }) => {
	return (
		<div className={Styles.FerrisWheelContainer}>
			<div className={Styles.Wheel}>
				{icons.map((icon, index) => {
					const angle = (360 / icons.length) * index;
					const radians = (angle * Math.PI) / 180;
					const x = Math.cos(radians) * radius;
					const y = Math.sin(radians) * radius;

					return (
						<div
							key={index}
							className={Styles.techIconWrapper}
							style={{
								transform: `translate(${x - 25}px, ${y - 25}px)`,
							}}
						>
							<img
								className={Styles.techIcon}
								src={icon}
								alt={`tech-${index}`}
								width='50'
								height='50'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FerrisWheel;
