import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

interface CoverImageProps {
  src: string;
  alt: string;
  caption: string;
}

// export const CoverImage: React.FC<CoverImageProps> = ({
//   src,
//   alt,
//   caption,
// }) => (
//   <AspectRatio ratio={16 / 7} className="bg-muted mb-6 w-3/4 mx-auto">
//     <Image src={src} alt={alt} fill className="rounded-md object-cover" />
//   </AspectRatio>
// );

export const CoverImage: React.FC<CoverImageProps> = ({
  src,
  alt,
  caption,
}) => (
  <div className="relative mb-6 w-3/4 mx-auto">
    <AspectRatio ratio={16 / 7} className="bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-md object-cover"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
    </AspectRatio>
  </div>
);

// export const CoverImage: React.FC<CoverImageProps> = ({
//   src,
//   alt,
//   caption,
// }) => (
//   <div className="relative mb-6 w-3/4 mx-auto">
//     <AspectRatio ratio={16 / 7} className="relative">
//       <Image src={src} alt={alt} fill className="rounded-md object-cover" />
//       <div className="absolute inset-0 rounded-md bottom-half-gradient" />
//     </AspectRatio>
//     <figcaption className="mt-2 text-center text-muted-foreground">
//       {caption}
//     </figcaption>
//   </div>
// );

export default CoverImage;
