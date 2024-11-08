export default interface SwiperType {
    id: number,
    title: string, 
    price: string,
    img: string,
    link: string,
    wishList: boolean,
    discount: boolean,
    discountValue: string,
    oldPrice: string,
    filter: filter,
    priceNum: number
}

type filter = "new" | "favorite"