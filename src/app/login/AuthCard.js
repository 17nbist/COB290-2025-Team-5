import Link from "next/link";
import Logo from "./Logo";

export default function AuthCard({ children }) {
	return (
		<div style={styles.card}>
					<div style={styles.header}>
						<div style={styles.logoWrapper}>
							<Logo width={64} height={64} title="App logo" />
						</div>
						<h1 style={styles.title}>Sign In</h1>
						<p style={styles.subtitle}>
							Welcome! Please enter your details.
						</p>
					</div>
			{children}
			<div style={styles.footer}>
				Have a setup URL?{" "}
				<Link href="#" style={styles.link}>
					Click Here
				</Link>
			</div>
		</div>
	);
}

const styles = {
	card: {
		width: 380,
		padding: 24,
		borderRadius: 8,
		boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
		background: "#fff",
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
		color: "#1f2937",
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
		color: "#4b5563",
	},
	link: {
		color: "#2563eb",
		textDecoration: "none",
		fontWeight: "500",
	},
};

