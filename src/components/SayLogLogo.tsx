import Image from "next/image";

export default function SayLogLogo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="SayLog"
      width={size}
      height={size}
      className={className}
    />
  );
}
