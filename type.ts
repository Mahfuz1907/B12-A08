export interface AppPromiseTypes{
    id: number,
    image: string,
    title: string,
    companyName: string,
    description: string,
    size: number,
    reviews: number,
    ratingAvg: number,
    downloads: number,
    ratings: {
        name: string,
        count: number
    }[],
}