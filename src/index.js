import navbar from '../components/navbar.js'

import '../styles/style.css'

let navbar_div = document.getElementById('navbar');

navbar_div.innerHTML = navbar();

let url = 'https://fakestoreapi.com/products';

let cont = document.getElementById('cont');

import { getData, append } from "../components/fetch.js"

getData(url).then((res) => {
    // console.log(res)
    append(res, cont)
})