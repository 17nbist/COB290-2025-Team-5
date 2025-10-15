"use client";
import React from "react";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";

export default function LoginForm({
	email,
	setEmail,
	password,
	setPassword,
	error,
	onSubmit,
}) {
	return (
		<form style={styles.form} onSubmit={onSubmit}>
			<label style={styles.label}>
				Email
				<div style={styles.inputWrapper}>
					<MdOutlineEmail style={styles.icon} />
					<input
						style={{ ...styles.input, paddingLeft: 32 }}
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
			</label>

			<label style={styles.label}>
				Password
				<div style={styles.inputWrapper}>
					<MdLockOutline style={styles.icon} />
					<input
						style={{ ...styles.input, paddingLeft: 32 }}
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</label>

			{error && <p style={styles.error}>{error}</p>}

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
	label: { display: "flex", flexDirection: "column", fontSize: 14, color: "#4a4a4aff" },
	input: { padding: 8, borderRadius: 4, border: "1px solid #4a4a4aff", width: "100%" },
	inputWrapper: { position: "relative", display: "flex", alignItems: "center" },
	icon: { position: "absolute", left: 8, color: "#9ca3af" },
	button: { padding: 10, borderRadius: 6, background: "#2563eb", color: "#ffffffff", border: "none" },
	forgotPasswordWrapper: {
		alignSelf: "flex-end",
	},
	forgotPassword: {
		fontSize: 12,
		color: "#2563eb",
		textDecoration: "none",
		cursor: "pointer",
	},
	error: {
		color: "#ef4444",
		fontSize: 12,
		textAlign: "center",
	},
};

