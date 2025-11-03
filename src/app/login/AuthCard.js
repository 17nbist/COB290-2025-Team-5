"use client";

import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function AuthCard({ children }) {
	return (

	<motion.div
		style={styles.card}
		initial={{ opacity: 0, scale: 0.95}}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ duration: 0.6, ease: "easeOut" }}
	>
		<motion.div
			style={styles.leftPanel}
			initial={{ width: "100%",x: "50%"}}
			animate={{ width: "50%", x: "0%"}}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div style={styles.header}>
				<div style={styles.logoWrapper}>
					<Logo width={64} height={64} title="App logo" />
						</div>
						<h1 style={styles.title}>
							Welcome! Please enter your details.
						</h1>
			</div>
						<div style={styles.footer}>
							Haven't finished registering?{" "}
							<Link href="/login/registration" style={styles.link}>
								Click Here
							</Link>
					</div>
				</motion.div>

			<motion.div
			style={styles.rightPanel}
			initial={{ width: "0%", opacity: 0 }}
			animate={{ width: "50%" , opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut", delay: 0.5, }} >

				<h1 style={styles.title}>    Sign In</h1>
			{children}
			</motion.div>
		</motion.div>
	);
}

const styles = {
	card: {
		display: "flex",
		width: "880px",
		height: "490px",
		padding: 24,
		borderRadius: 8,
		boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
		overflow: "hidden",
		background: "#ffffff31",
	},
	leftPanel: {
		flex: 1,
		background: "#f4cc9eff",
		display: "flex",
		flexDirection: "column",

		justifyContent: "center",
		padding: "40px",
	},
	rightPanel: {
		flex: 1,
		background: "#f4f3f4ff",
		display : "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "40px",
	},
	header: {
		textAlign: "center",
		marginBottom: "24px",
	},
	logoWrapper: {
		display: "flex",
		justifyContent: "center",
		marginBottom: 12,
	},
	title: {
		fontSize: "28px",
		fontWeight: "bold",
		color: "#000000ff",
	},
	subtitle: {
		color: "#6b7280",
		fontSize: "14px",
		marginTop: "8px",
	},
	footer: {
		marginTop: "24px",
		textAlign: "center",
		fontSize: "14px",
		color: "#000000ff",
	},
	link: {
		color: "#2563eb",
		textDecoration: "none",
		fontWeight: "500",
	},
};

