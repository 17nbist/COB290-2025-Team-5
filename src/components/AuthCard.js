

export default function AuthCard({ children }) {
	return (
		<div style={styles.card}>
			{children}
		</div>
	);
}

const styles = {
	card: {
		width: 380,
		padding: 24,
		borderRadius: 8,
		boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
		background: "#fff",
	},
};

