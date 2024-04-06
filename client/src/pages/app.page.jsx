import styles from "../styles/pages/app-page.module.scss";

const App = () => {
	return (
		<div className={styles.page}>
			<div className={styles.visualization}>
				<div className={styles.background}>
					<img
						alt="ING Bank"
						src="/wallpaper-ing.jpg"
					/>
					<div className={styles.overlay} />
					<div className={styles.pattern} />
					<div className={styles.pattern} />
					<div className={styles.pattern} />
				</div>

				<div className={styles.container}>
					<img
						alt="ING Bank logo"
						src={"/logo-ing-white.png"}
					/>
				</div>
			</div>

			<div className={styles.content}>
				<h1>Appointments</h1>
				<p>
					Reserve your slot for efficient public transport planning and
					assistance.
				</p>
				<button>Book an appointment</button>
			</div>
		</div>
	);
};

export default App;
