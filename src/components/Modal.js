"use client";
import { useEffect } from "react";

export default function Modal({ isOpen, children, onClose }) {
	// Handle ESC key press to close modal
	useEffect(() => {
		if (!isOpen || !onClose) return;

		const handleEscape = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isOpen, onClose]);

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<div 
			className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
			onClick={(e) => {
				// Close modal when clicking backdrop (but not when clicking content)
				if (e.target === e.currentTarget && onClose) {
					onClose();
				}
			}}
			role="dialog"
			aria-modal="true"
		>
			{children}
		</div>
	);
}