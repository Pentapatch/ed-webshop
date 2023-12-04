import { ProductVariantDto } from "./productVariantDto";

export interface FlowerProductListDto {
    id: number,
    title: string,
    imagePath: string,
    variants: ProductVariantDto[]
}