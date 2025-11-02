"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineEmail, MdLockOutline, MdPersonOutline } from "react-icons/md";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Link from "next/link";

export default function UrlForm() {
	const [name, setName] = React.useState("");
	const [gender, setGender] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [error, setError] = React.useState("");
	const [success, setSuccess] = React.useState(false);
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

	const validateForm = () => {
		if (!name.trim()) {
			setError("Please enter your name.");
			return false;
		}
		if (!gender) {
			setError("Please select your gender.");
			return false;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Please enter a valid email address.");
			return false;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters long.");
			return false;
		}
		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return false;
		}
		setError("");
		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setSuccess(true);
		setError("");
		console.log({ name, gender, email, password });

		setName("");
		setGender("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");

		setTimeout(() => setSuccess(false), 3000);
	};

	return (
		<div className="w-full flex flex-col items-center">
			
			<motion.form
				initial={{ opacity: 0, rotate: -5 }}
				animate={{ opacity: 1, rotate: 0 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
				className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4 mt-8"
				onSubmit={handleSubmit}
			>
				
				<label className="flex flex-col text-sm text-gray-700">
					Name
					<div className="relative flex items-center">
						<MdPersonOutline className="absolute left-2 text-gray-400 text-lg" />
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="w-full border border-gray-300 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</label>

				
				<label className="flex flex-col text-sm text-gray-700">
					Gender
					<div className="flex items-center gap-6 mt-1">
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="gender"
								value="male"
								checked={gender === "male"}
								onChange={(e) => setGender(e.target.value)}
								className="text-blue-600 focus:ring-blue-500"
							/>
							<span>Male</span>
						</label>
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="gender"
								value="female"
								checked={gender === "female"}
								onChange={(e) => setGender(e.target.value)}
								className="text-blue-600 focus:ring-blue-500"
							/>
							<span>Female</span>
						</label>
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="gender"
								value="prefer_not_to_say"
								checked={gender === "prefer_not_to_say"}
								onChange={(e) => setGender(e.target.value)}
								className="text-blue-600 focus:ring-blue-500"
							/>
							<span>Prefer not to say</span>
						</label>
					</div>
				</label>

				
				<label className="flex flex-col text-sm text-gray-700">
					Email
					<div className="relative flex items-center">
						<MdOutlineEmail className="absolute left-2 text-gray-400 text-lg" />
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className={`w-full border ${
								error.includes("email") ? "border-red-400" : "border-gray-300"
							} rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 ${
								error.includes("email") ? "focus:ring-red-400" : "focus:ring-blue-500"
							}`}
						/>
					</div>
				</label>

				
				<label className="flex flex-col text-sm text-gray-700">
					Password
					<div className="relative flex items-center">
						<MdLockOutline className="absolute left-2 text-gray-400 text-lg" />
						<input
							type={showPassword ? "text" : "password"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className={`w-full border ${
								error.includes("Password must") ? "border-red-400" : "border-gray-300"
							} rounded-md pl-8 pr-10 py-2 focus:outline-none focus:ring-2 ${
								error.includes("Password must")
									? "focus:ring-red-400"
									: "focus:ring-blue-500"
							}`}
						/>
						<button
							type="button"
							onClick={() => setShowPassword((s) => !s)}
							className="absolute right-2 text-gray-400 hover:text-gray-600"
						>
							{showPassword ? (
								<MdVisibilityOff className="w-5 h-5" />
							) : (
								<MdVisibility className="w-5 h-5" />
							)}
						</button>
					</div>
				</label>

				
				<label className="flex flex-col text-sm text-gray-700">
					Confirm Password
					<div className="relative flex items-center">
						<MdLockOutline className="absolute left-2 text-gray-400 text-lg" />
						<input
							type={showConfirmPassword ? "text" : "password"}
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							className={`w-full border ${
								error.includes("match") ? "border-red-400" : "border-gray-300"
							} rounded-md pl-8 pr-10 py-2 focus:outline-none focus:ring-2 ${
								error.includes("match") ? "focus:ring-red-400" : "focus:ring-blue-500"
							}`}
						/>
						<button
							type="button"
							onClick={() => setShowConfirmPassword((s) => !s)}
							className="absolute right-2 text-gray-400 hover:text-gray-600"
						>
							{showConfirmPassword ? (
								<MdVisibilityOff className="w-5 h-5" />
							) : (
								<MdVisibility className="w-5 h-5" />
							)}
						</button>
					</div>
				</label>

				
				<AnimatePresence>
					{error && (
						<motion.p
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							className="text-red-500 text-sm text-center"
						>
							{error}
						</motion.p>
					)}
				</AnimatePresence>

				
				<div className="flex justify-end items-center text-xs">
					<span className="text-gray-600">Already have an account?</span>
					<Link
						href="/login"
						className="ml-1 text-blue-600 hover:underline font-medium"
					>
						Sign in
					</Link>
				</div>

				
				<button
					type="submit"
					className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 mt-2 transition-all"
				>
					Create Account
				</button>
			</motion.form>

			
			<AnimatePresence>
				{success && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="mt-6 bg-green-100 text-blue-700 px-4 py-2 rounded-lg shadow-md text-sm font-medium"
					>
						Account created successfully! Welcome aboard.
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
