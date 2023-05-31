import * as ImagePrimitive from "@radix-ui/react-avatar"
import styled from "styled-components"

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <ImageContainer className={className}>
      <ImageElement src={src} alt={alt} />
      <ImageFallback delayMs={500} />
    </ImageContainer>
  )
}

const ImageContainer = styled(ImagePrimitive.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const ImageElement = styled(ImagePrimitive.Image)`
  height: 100%;
  max-width: 100%;
  object-fit: contain;
`

const ImageFallback = styled(ImagePrimitive.Fallback)`
  width: 100%;
  height: 100%;
  background: gray;
`
