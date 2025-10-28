import Card from "./Card";

export default function Modal({isOpen, children}) {
	if (!isOpen) {
		return;
	}

	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 ">
			{children}
		</div>
	);
}