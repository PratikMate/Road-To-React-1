let getData = async (url) => {

    let res = await fetch(url);
    let data = await res.json();

    return data;
}

let append = (data, cont) => {
    data.forEach(({ image, title }) => {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = image;

        let p = document.createElement('p');
        p.innerText = title

        let btn = document.createElement('button');
        btn.innerText = "Add to cart"

        div.append(img, p, btn);
        cont.append(div)
    })
}

export { getData, append };