"use client";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function OverviewTable({ label, data, stats }) {
    const router = useRouter()

    function routChange(labelName) {

        if (labelName == "project") {
            router.push("/dashboard#projects");
        }
        else if (labelName == "task") {
            router.push("/dashboard#To-do");
        }
    }

    return (
        <Card className="w-full h-full flex flex-col overflow-hidden" style={{ minWidth: 0, minHeight: 0, padding: 0 }}>

            <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 grid grid-cols-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{label} overview</h2>
                <button
                    onClick={() => routChange(label)}
                    className="text-lg bg-blue-100 font-semibold p-2 w-100 md:w-40 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:bg-blue-200 hover:scale-105 hover:shadow-lg active:scale-95"
                    style={{ justifySelf: "self-end", borderRadius: "20px" }}
                >
                    See all {label}s
                </button>
            </div>

            {/* Header */}
            <div className="grid grid-cols-1 sm:grid-cols-3 text-sm font-medium text-gray-500 uppercase tracking-wide border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1c1c1c]">
                <div className="p-3 text-center">{label}</div>
                <div className="p-3 text-center">Progress</div>
                <div className="p-3 text-center">Status</div>
            </div>

            {/* Data Rows */}
            {data.map((item, index) => (
                <motion.div key={index} className={`grid grid-cols-1 sm:grid-cols-3 items-center text-center text-gray-800 dark:text-gray-200 text-sm ${index % 2 === 0 ? "bg-white dark:bg-[#242424]" : "bg-gray-50 dark:bg-[#1e1e1e]"}`} whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                    <div className="p-3 font-medium">{item.name}</div>
                    <div className="p-3 flex justify-center">
                        <div className="w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                                className={`h-2 rounded-full ${item.progress < 0.4 ? "bg-red-500" : item.progress < 0.8 ? "bg-yellow-400" : "bg-green-500"
                                    }`}
                                style={{ minWidth: 0 }}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.progress * 100}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                    <div className="p-3">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${item.status === "On Track"
                                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                                : item.status === "Behind"
                                    ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                                }`}
                        >
                            {item.status}
                        </span>
                    </div>
                </motion.div>
            ))}

            {/* Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1c1c1c]">
                {stats.map((stat, idx) => (
                    <div key={idx} className="p-3 text-center flex flex-col items-center justify-center">
                        <p className="text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </Card>

    );
}
