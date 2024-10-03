import { adicionarAoCarrinho } from "./carrinho.js"
import { catalogo, formatPreco } from "./utils.js"


export function renderCatalogo(){
    for (const produtoCatalgo of catalogo){
        const precoFormatado = formatPreco(produtoCatalgo.preco)
        const cartaoProduto = `
            <div class="card-product border-2 border-gray-200 w-52 m-2 my-2 text-center rounded-md ${produtoCatalgo.categoria}">
                <img src="./src/img/${produtoCatalgo.imagem}" alt="Imagem do produto ${produtoCatalgo.id} da Wincorp Store" class="p-4">
                <div class="info-product">
                    <h3 class="font-bold text-2xl">${produtoCatalgo.marca}</h3>
                    <p class="name-product text-[14px]">${produtoCatalgo.nomeProduto}</p>
                    <p class="price-product text-orange-500 font-bold">${precoFormatado}</p>
                </div>
                <div class="actions flex justify-center gap-x-1">
                <button class="btn-buy bg-orange-500 hover:bg-blue-500 duration-100 px-8 py-2 my-2 rounded-md text-slate-200 font-bold">Comprar</button>        
                <button id="add-product-${produtoCatalgo.id}" class="btn-cart bg-orange-500 hover:bg-blue-500 duration-100 px-4 py-2 my-2 rounded-md text-slate-200 font-bold"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        `
        document.querySelector('#container-products').innerHTML += cartaoProduto        
    }

    for (const produtoCatalgo of catalogo){
        document.querySelector(`#adicionar-${produtoCatalgo.id}`).addEventListener('click', ()=>{
            adicionarAoCarrinho(produtoCatalgo.id)
        })
    }
}