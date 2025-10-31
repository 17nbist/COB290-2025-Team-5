"use client";

export default function Member({ member, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        border border-gray-300 rounded-[10px] p-4 cursor-pointer transition-colors duration-200
        bg-white hover:bg-gray-100 
        dark:bg-[#767676] dark:hover:bg-[#5c5c5c] dark:border-gray-500
      "
    >
      <h3 className="m-0 text-[18px] font-semibold dark:text-white">
        {member.name}
      </h3>
      <p className="mt-1 text-gray-600 dark:text-gray-300">{member.role}</p>
    </div>
  );
}
