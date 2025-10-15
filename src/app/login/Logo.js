import Image from "next/image";

export default function Logo({ width = 48, height = 48, className = "", title = "App logo" }) {
  return (
    <Image
      src="/next.svg"
      alt={title}
      width={width}
      height={height}
      className={className}
    />
  );
}
