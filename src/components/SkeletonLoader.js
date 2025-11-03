"use client";
import LoadingSpinner from "./LoadingSpinner";

export default function SkeletonLoader({ lines = 3, className = "" }) {
	return (
		<div className={`animate-pulse space-y-3 ${className}`}>
			{Array.from({ length: lines }).map((_, index) => (
				<div
					key={index}
					className={`h-4 bg-gray-200 dark:bg-gray-700 rounded ${
						index === lines - 1 ? "w-3/4" : "w-full"
					}`}
				/>
			))}
		</div>
	);
}

export function CardSkeleton({ count = 1 }) {
	return (
		<div className="space-y-4">
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className="bg-white dark:bg-[#242424] rounded-lg p-6 shadow-md animate-pulse"
				>
					<div className="flex items-center justify-between mb-4">
						<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
						<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
					</div>
					<div className="space-y-2 mb-4">
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
					</div>
					<div className="flex items-center gap-4">
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
					</div>
				</div>
			))}
		</div>
	);
}

export function PageSkeleton() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<LoadingSpinner size="large" />
			<p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
		</div>
	);
}

