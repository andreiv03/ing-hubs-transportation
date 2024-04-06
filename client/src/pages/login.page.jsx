import { useState } from "react";

import styles from "../styles/pages/login-page.module.scss";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isFormDisabled = () => {
		if (!email) return true;
		if (!password) return true;
		return false;
	};

	return (
		<div className={styles.page}>
			<div className={styles.visualization}>
				<div className={styles.background}>
					<img
						alt="ING Bank"
						src="/wallpaper-ing-2.jpg"
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
				<div className={styles.top_section}>
					<img
						alt="ING Bank logo"
						src={"/logo-ing-black.png"}
					/>
					<h3>Enter your credentials to initiate session</h3>
				</div>

				<form
					noValidate
					onSubmit={() => {}}
				>
					<input
						autoComplete="email"
						autoFocus
						id="email"
						onChange={(event) => setEmail(event.target.value)}
						placeholder="Email"
						type="email"
						value={email}
					/>

					<input
						autoComplete="password"
						autoFocus
						id="password"
						onChange={(event) => setPassword(event.target.value)}
						placeholder="Password"
						type="password"
						value={password}
					/>

					<div className={styles.remember_me}>
						<input
							id="rememberMe"
							type="checkbox"
						/>
						<label htmlFor="rememberMe">Remember me</label>
					</div>

					<button
						disabled={isFormDisabled()}
						type="submit"
					>
						Sign in
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
