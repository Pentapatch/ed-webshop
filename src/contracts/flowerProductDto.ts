import { ProductVariantDto } from "./productVariantDto";

export interface FlowerProductDto {
    id: number
    title: string,
    imagePath: string,
    description: string,
    longDescription: string,
    variants: ProductVariantDto[]
    length: number,
    weight: number
}