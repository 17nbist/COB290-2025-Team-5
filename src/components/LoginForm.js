"use client";


export default function LoginForm() {
	return (
		<form style={styles.form} onSubmit={(e) => e.preventDefault()}>
			<label style={styles.label}>
				Email
				<input style={styles.input} type="email" name="email" />
			</label>

			<label style={styles.label}>
				Password
				<input style={styles.input} type="password" name="password" />
			</label>

			<div style={styles.forgotPasswordWrapper}>
				<a href="#" onClick={(e) => e.preventDefault()} style={styles.forgotPassword}>
					Forgot Password?
				</a>
			</div>

			<button style={styles.button} type="submit">Sign in</button>
		</form>
	);
}

const styles = {
	form: { display: "flex", flexDirection: "column", gap: 12 },
	label: { display: "flex", flexDirection: "column", fontSize: 14 },
	input: { padding: 8, borderRadius: 4, border: "1px solid #ddd" },
	button: { padding: 10, borderRadius: 6, background: "#2563eb", color: "#fff", border: "none" },
	forgotPasswordWrapper: {
		alignSelf: "flex-end",
	},
	forgotPassword: {
		fontSize: 12,
		color: "#2563eb",
		textDecoration: "none",
		cursor: "pointer",
	},
};

