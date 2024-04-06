import { useRef } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import styles from "../styles/components/profile-button.module.scss";

const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 18%)"
		strokeLinecap="round"
		{...props}
	/>
);

const backgroundVariants = {
	open: {
		clipPath: `circle(150% at calc(100% - 2.5rem) calc(100% - 2.5rem))`, // circle covers the entire screen
		transition: {
			delay: 0.1,
			type: "spring",
			stiffness: 60,
			restDelta: 2
		}
	},
	closed: {
		clipPath: `circle(2rem at calc(100% - 2.5rem) calc(100% - 2.5rem))`, // circle size matches the button size
		transition: {
			delay: 0.3, // delay the transition to closed state
			type: "spring",
			stiffness: 400,
			damping: 40
		}
	}
};

const contentVariants = {
	open: {
		opacity: 1,
		transition: {
			delay: 0.5
		}
	},
	closed: {
		opacity: 0,
		transition: {
			delay: 0
		}
	}
};

const ProfileButton = () => {
	const containerRef = useRef(null);
	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<motion.div
			animate={isOpen ? "open" : "closed"}
			className={styles.container}
			initial={false}
			ref={containerRef}
		>
			<motion.div
				className={styles.background}
				variants={backgroundVariants}
			>
				<motion.div
					className={styles.content}
					variants={contentVariants}
				>
					<div className={styles.profile_picture}>
						<img
							alt="Profile picture"
							src="/lion.png"
						/>
					</div>

					<div className={styles.profile_info}>
						<h3>John Doe</h3>
						<h3>john.doe@email.com</h3>
					</div>
				</motion.div>
				<div className={styles.circle} />
			</motion.div>
			<div
				className={styles.button}
				onClick={toggleOpen}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 23 23"
				>
					<Path
						variants={{
							closed: { d: "M 2 2.5 L 20 2.5" },
							open: { delay: 1, d: "M 3 16.5 L 17 2.5" }
						}}
					/>
					<Path
						d="M 2 9.423 L 20 9.423"
						variants={{
							closed: { opacity: 1 },
							open: { delay: 1, opacity: 0 }
						}}
						transition={{ duration: 0.1 }}
					/>
					<Path
						variants={{
							closed: { d: "M 2 16.346 L 20 16.346" },
							open: { delay: 1, d: "M 3 2.5 L 17 16.346" }
						}}
					/>
				</svg>
			</div>
		</motion.div>
	);
};

export default ProfileButton;
