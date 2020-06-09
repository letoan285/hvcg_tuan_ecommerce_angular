export interface Product {
    id?: number;
    name: string;
    image?: string;
    description?: string;
    price: number;
    category_id: number;
}

export interface Cart {
    id?: number;
    product_id: number;
    quantity: number;
    user_id?: number;
    status?: boolean;
}