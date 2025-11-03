"use client";
import { useEffect } from "react";

export default function Modal({ isOpen, children, onClose }) {
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