import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageWrapperProps {
  src: string;
  alt?: string;
  ratio?: number;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  className?: string;
}

/**
 * Componente que acoge una imagen y la muestra en un tamaño adecuado y responsive
 */
export default function ImageWrapper({
  src,
  alt = "",
  ratio = 16 / 9,
  fit = "cover",
  className,
}: ImageWrapperProps) {
  return (
    <AspectRatio ratio={ratio} className={className}>
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: fit }}
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
    </AspectRatio>
  );
}

