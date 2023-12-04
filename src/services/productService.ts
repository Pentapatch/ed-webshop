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

const getProduct = async () => {
    try {
        const response = await axios.get<FlowerProductDto>(baseUrl);
        return response.data;
    } catch (error: any) {
        throw createErrorMessage(error);
    }
};

const createErrorMessage = (axiosError: any) =>
    axiosError.response ? axiosError.response.data : "Kunde inte kontakta servern.";

export { getProduct, getProducts }