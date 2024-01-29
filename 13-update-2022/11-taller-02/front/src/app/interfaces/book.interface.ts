export interface Book {
    id: number;
    title: string;
    description?: string;
    category?: string;
    thumbnail: string;
    author?: string;
    price: number;
    totalBook?: number;
    amount: number;
    createdAt?: string;
    updatedAt?: string;
}