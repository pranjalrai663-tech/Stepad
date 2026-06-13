import Image from "next/image";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({
  size = 32,
  showWordmark = true,
  className = "",
}: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="Stepad"
        width={size}
        height={size}
        className="rounded-lg object-contain"
        priority
      />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">Stepad</span>
      )}
    </span>
  );
}
