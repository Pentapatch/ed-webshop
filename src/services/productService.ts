import { FlowerProductDto } from '@/contracts/flowerProductDto';
import { FlowerProductListDto } from '@/contracts/flowerProductListDto';
import axios from 'axios';

const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/products`;

const getProducts = async () => {
    try {
        const response = await axios.get<FlowerProductListDto[]>(baseUrl);
        return response.data;
    } catch (error: any) {
        throw createErrorMessage(error);
    }
};

const getProduct = async (id: number) => {
    try {
        let endpoint = `${baseUrl}/${id}`;
        const response = await axios.get<FlowerProductDto>(endpoint);
        return response.data;
    } catch (error: any) {
        throw createErrorMessage(error);
    }
};

const createErrorMessage = (axiosError: any) =>
    new Error(axiosError.response && axiosError.response.data ? axiosError.response.data : "Ingen kontakt med servern.");

export { getProduct, getProducts }