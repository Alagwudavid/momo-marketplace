import f1 from "../assets/laptop.jpg"
import f2 from "../assets/phone.jpg"
import f3 from "../assets/cooker.jpg"
import f4 from "../assets/bags.jpg"
import f5 from "../assets/clothe.jpg"
import f6 from "../assets/shoe.jpg"
import f7 from "../assets/generator.jpg"
import f8 from "../assets/oled.jpg"

import o1 from "../assets/Artboard_1.png"
import o2 from "../assets/Artboard_2.png"
import o3 from "../assets/Artboard_3.png"
import o4 from "../assets/Artboard_4.png"
import o5 from "../assets/Artboard_5.png"
import o6 from "../assets/Artboard_6.png"

export const categories = [
    {id: 1, name: 'Supermarket'},
    {id: 2, name: 'Fashion'},
    {id: 3, name: 'Health & Beauty'},
    {id: 4, name: 'Tech & Electronics'},
    {id: 5, name: 'Appliances'},
    {id: 6, name: 'Miscellenous'},
    {id: 7, name: 'Beauty'},
    {id: 8, name: 'Verified Stores'},
    {id: 8, name: 'Official Stores'},
    {id: 9, name: 'Service Providers'},
    {id: 10, name: 'Others'}
]

export const categoryChild = [
    {id: '1', name: 'Gaming', categoryId: '3'},
    {id: '2', name: 'Computing', categoryId: '3'},
    {id: '3', name: 'Phones & Gadgets', categoryId: '3'},
    {id: '4', name: 'Men', categoryId: '2'},
    {id: '5', name: 'Women', categoryId: '2'},
    {id: '6', name: 'All Fashion', categoryId: '2'},
    {id: '7', name: 'Small Appliances', categoryId: '5'},
    {id: '8', name: 'Large Appliances', categoryId: '5'},
    {id: '9', name: ''},
    {id: '10', name: ''},
    {id: '11', name: ''},
    {id: '12', name: 'Airtime', categoryId: '6'},
    {id: '13', name: 'Data', categoryId: '6'},
]

export const FeaturedProducts = [
    {id: 1, storeName: "Lg Official", name: 'Hp Espiron \'15inch aspire 2024 model student laptop', price: '$7,500', offer: '20%', bg: f1},
    {id: 2, storeName: "Apple Store", name: 'iPhone 15', price: '$7,500', offer: '10%', bg: f2},
    {id: 3, storeName: "Nexus Electronics", name: 'Nexus Combo Cooker', price: '$101,830', offer: '12%', bg: f3},
    {id: 4, storeName: "Angel global", name: 'Hand bags', price: '$67,200', offer: '50%', bg: f4},
    {id: 5, storeName: "Prime Luxury's", name: 'Baby up&down', price: '$7,500', offer: '12%', bg: f5},
    {id: 6, storeName: "Nike Official", name: 'Nike Fly 2023', price: '$7,500', offer: '', bg: f6},
    {id: 7, storeName: "Nexus Electronics", name: 'Generator 3200HP', price: '$7,500', offer: '', bg: f7},
    {id: 8, storeName: "Samsung official", name: 'Samsung 42\'inch O\'led TV', price: '$117,500', offer: '5%', bg: f8}
]

export const Offers = [
    {id: 1, name: 'Brand Deals', bg: o1},
    {id: 2, name: 'Back-2-School Sales', bg: o2},
    {id: 3, name: 'Grocery Deals', bg: o3},
    {id: 4, name: 'Accessories & Gadgets Deal', bg: o4},
    {id: 5, name: 'School Essentials', bg: o5},
    {id: 6, name: 'Miscellenous Deals', bg: o6}
]