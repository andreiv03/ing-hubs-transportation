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

			<div className={styles.content}></div>
		</div>
	);
};

export default App;
