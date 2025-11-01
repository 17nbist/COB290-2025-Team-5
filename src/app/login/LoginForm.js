"use client";
import React from "react";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Link from "next/link";


export default function LoginForm({
	email,
	setEmail,
	password,
	setPassword,
	error,
	onSubmit,
}) {
	const [showPassword, setShowPassword] = React.useState(false);
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
						style={{ ...styles.input, paddingLeft: 32, paddingRight: 40 }}
						type={showPassword ? "text" : "password"}
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="button"
						onClick={() => setShowPassword((s) => !s)}
						aria-label={showPassword ? "Hide password" : "Show password"}
						style={styles.showIconButton}
					>
						{showPassword ? (
							<MdVisibilityOff style={styles.showIcon} />
						) : (
							<MdVisibility style={styles.showIcon} />
						)}
					</button>
				</div>
			</label>

			{error && <p style={styles.error}>{error}</p>}

			<div style={styles.forgotPasswordWrapper}>
				<Link href="/login/forgot" style={styles.forgotPassword}>
					Forgot Password?
				</Link>
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
		margintop: -4,
		paddingRight: 8,
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
		fontSize: 14,
		textAlign: "center",
	},
	showIconButton: {
		background: "none",
		border: "none",
		cursor: "pointer",
		position: "absolute",
		right: 8 }
	,
	showIcon: { color: "#9ca3af", width: 20, height: 20 }
};
