import iphone15 from './iphone15-removebg-preview.png';
import airpods from './airpods2-removebg-preview (1).png';
import airpods2 from './airpods2-removebg-preview (1).png';
import charger from './charger2-removebg-preview.png';
import carCharger from './charger3-removebg-preview (1).png';
import headphone from './headphone-removebg-preview.png';
import iphone11 from './iphone11-removebg-preview.png';
import iphone14 from './iphone14-removebg-preview.png';

import S20 from './samsungs20-removebg-preview.png'
import S21 from './samsungs21-removebg-preview.png'
import S23ultra from './samsungs23ultra-removebg-preview.png'

export const products = [
    {
        _id: "iphone11",
        name: "Iphone 11",
        description: "The Awesome iPhone 11, Full package",
        price: 345000,
        image: [iphone11],
        category: "Phones",
        subCategory: "Iphones",
        colors: ['red' , 'black' , 'white'],
        date: 12345677777,
        bestseller: true,
        type: 'Iphones'
        
    },
    {
        _id: "SamsungS20",
        name: "Samsung S20",
        description: "The Awesome Samsung, Full package",
        price: 345000,
        image: [S20],
        category: "Phones",
        subCategory: "Androids",
        colors: [ 'black', 'white'],
        date: 12345677777,
        bestseller: true,
        type: 'Androids'
        
    },
    {
        _id: "SamsungS21",
        name: "Samsung S21",
        description: "The Awesome Samsung S21, Full package",
        price: 345000,
        image: [S21,S23ultra,iphone14],
        category: "Phones",
        subCategory: "Androids",
        colors: [ 'black', 'white'],
        date: 12345677777,
        bestseller: true,
        type: 'Androids'
        
    },
    {
        _id: "SamsungS23ultra",
        name: "Samsung S23-Ultra",
        description: "The Awesome Samsung S23-Ultra, Full package",
        price: 345000,
        image: [S23ultra],
        category: "Phones",
        subCategory: "Androids",
        colors: [ 'black', 'white'],
        date: 12345677777,
        bestseller: true,
        type: 'Androids'
        
    },
    {
        _id: "iphone14",
        name: "Iphone 14",
        description: "The sleek iPhone 14 with advanced features",
        price: 799,
        image: [iphone14],
        category: "Phones",
        subCategory: "Iphones",
        colors: ['blue', 'black', 'white'],
        date: 12345678888,
        bestseller: true,
        type: 'Iphones'
    },
    {
        _id: "iphone15",
        name: "Iphone 15",
        description: "The latest iPhone with cutting-edge technology",
        price: 999,
        image: [iphone15],
        category: "Phones",
        subCategory: "Iphones",
        colors: ['pink', 'black', 'white'],
        date: 12345679999,
        bestseller: true,
        type: 'Iphones'
    },
    {
        _id: "airpods",
        name: "AirPods",
        description: "Wireless earbuds with great sound quality",
        price: 159,
        image: [airpods],
        category: "Accessories",
        subCategory: "Earbuds",
        colors: ["white"],
        date: 12345670000,
        bestseller: true,
        type: 'Others'
    },
    {
        _id: "airpods2",
        name: "AirPods Pro",
        description: "Active noise cancellation and immersive sound",
        price: 249,
        image: [airpods2],
        category: "Accessories",
        subCategory: "Earbuds",
        colors: ["white"],
        date: 12345671111,
        bestseller: true,
        type: 'Others'
    },
    {
        _id: "charger",
        name: "Charger",
        description: "Fast charging USB-C charger",
        price: 25,
        image: [charger],
        category: "Accessories",
        subCategory: "Chargers",
        colors: ['black', 'white'],
        date: 12345672222,
        bestseller: true,
        type: 'Others'
    },
    {
        _id: "carCharger",
        name: "Car Charger",
        description: "Dual USB car charger for on-the-go charging",
        price: 20,
        image: [carCharger],
        category: "Accessories",
        subCategory: "Chargers",
        colors: ["black"],
        date: 12345673333,
        bestseller: true,
        type: 'Others'
    },
    {
        _id: "headphone",
        name: "Headphone",
        description: "Over-ear headphones with premium sound",
        price: 89,
        image: [headphone],
        category: "Accessories",
        subCategory: "Headphones",
        colors: ['black', 'silver'],
        date: 12345674444,
        bestseller: true,
        type: 'Others'
    },
];

export default products