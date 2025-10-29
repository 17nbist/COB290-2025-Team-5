import Image from "next/image";

export default function Logo({ width = 0, height = 0, className = "", title = "App logo" }) {
  return (
    <Image
      src="/mia.png"
      alt={title}
      width="350"
      height={height}
      className={className}
    />
  );
}
