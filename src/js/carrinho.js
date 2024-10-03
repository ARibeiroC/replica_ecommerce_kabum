import { catalogo, formatPreco, salvarLocalStorage, lerLocalStorage} from "./utils.js"

const cart = document.querySelector('#cart')
const btnCart = document.querySelector('#btn-cart')
btnCart.addEventListener('click', toggleCart)


let idsProdutosCarrinhosQuantidade = lerLocalStorage("Produtos no Carrinho") ?? {}

export function toggleCart(){
    cart.classList.toggle('toggleCart')
}


export function incrementarQuantidadeProduto(idProduto){
    idsProdutosCarrinhosQuantidade[idProduto]++
    atualizarInformacaoQuantidadeProduto(idProduto)
    salvarLocalStorage("Produtos no Carrinho", idsProdutosCarrinhosQuantidade)
    atualizaSubTotalCarrinho()
}

function decrementarQuantidadeProduto(idProduto){
    if (idsProdutosCarrinhosQuantidade[idProduto] === 1){
        removerDoCarrinho(idProduto)
        salvarLocalStorage("Produtos no Carrinho", idsProdutosCarrinhosQuantidade)
        atualizaSubTotalCarrinho()
        return
    }
    idsProdutosCarrinhosQuantidade[idProduto]--
    atualizarInformacaoQuantidadeProduto(idProduto)
    salvarLocalStorage("Produtos no Carrinho", idsProdutosCarrinhosQuantidade)
    atualizaSubTotalCarrinho()
}

function removerDoCarrinho(idProduto){
    delete idsProdutosCarrinhosQuantidade[idProduto]
    salvarLocalStorage("Produtos no Carrinho", idsProdutosCarrinhosQuantidade)
    atualizaSubTotalCarrinho()
    renderizarProdutosCarrinho()    
}

function atualizarInformacaoQuantidadeProduto(idProduto){
    document.querySelector(`#quantidade-${idProduto}`).innerText = idsProdutosCarrinhosQuantidade[idProduto]
}


export function renderizarProdutosCarrinho(){

    const containerProdutoCarrinho = document.querySelector("#prod-carrinho")
    
    containerProdutoCarrinho.innerHTML = ''

    for (const idProduto in idsProdutosCarrinhosQuantidade){
        desenharProdutoNoCarrinho(idProduto)
    } 
}

function desenharProdutoNoCarrinho(idProduto){
    const produto = catalogo.find((p)=> p.id === idProduto )

    const prod_carrinho = document.querySelector("#prod-carrinho")

    const div_container_produto_carrinho = document.createElement('div')

    const div_classes = ['text-center', 'relative', 'border-b-[1px]', 'border-slate-200','py-4', 'w-full']
    
    for (const classe of div_classes){
        div_container_produto_carrinho.classList.add(classe)
    }
    
    const card_carrinho = 
    `
        <img src="./src/img/product-${produto.id}.jpg" alt="Carrinho: ${produto.nomeProduto}" class="w-24 mx-auto my-2">
        <section id="prod-descricao">
            <p class="font-bold">${produto.nomeProduto}</p>
            <p>${produto.marca}</p>
            <p class="text-orange-500 font-bold">${produto.preco}</p>
        </section>
        <button id="remover-item-${produto.id}" class="absolute top-2 right-2 text-slate-400 hover:text-slate-900"><i class="fa-solid fa-circle-xmark"></i></button>
        <div class="flex justify-center gap-1 items-center">
            <button id="decrementar-produto-${produto.id}" class="w-[25px] bg-orange-500 rounded-full">-</button>
            <p id="quantidade-${produto.id}" class="border-2 border-orange-500 w-[45px] bg-slate-50 text-center">${idsProdutosCarrinhosQuantidade[produto.id]}</p>
            <button id="incrementar-produto-${produto.id}" class="w-[25px] bg-orange-500 rounded-full">+</button>
        </div>
    `

    div_container_produto_carrinho.innerHTML += card_carrinho
    prod_carrinho.appendChild(div_container_produto_carrinho)
    
    document.querySelector(`#decrementar-produto-${produto.id}`).addEventListener('click', ()=>decrementarQuantidadeProduto(produto.id))

    document.querySelector(`#incrementar-produto-${produto.id}`).addEventListener('click', ()=> incrementarQuantidadeProduto(produto.id))

    document.querySelector(`#remover-item-${produto.id}`).addEventListener('click', ()=> removerDoCarrinho(produto.id))
}

export function adicionarAoCarrinho(idProduto){    
    
    if (idsProdutosCarrinhosQuantidade[idProduto]){
        incrementarQuantidadeProduto(idProduto)
        return
    }
    idsProdutosCarrinhosQuantidade[idProduto] = 1
    salvarLocalStorage("Produtos no Carrinho", idsProdutosCarrinhosQuantidade)
    atualizaSubTotalCarrinho()  
    desenharProdutoNoCarrinho(idProduto)
}

export function atualizaSubTotalCarrinho(){

    const subtotal = document.querySelector("#subtotal")
    
    let precoTotalCarrinho = 0

    for (const idProdutoNoCarrinho in idsProdutosCarrinhosQuantidade){
        const precoProduto = catalogo.find((p)=> p.id === idProdutoNoCarrinho).preco

        precoTotalCarrinho += precoProduto * idsProdutosCarrinhosQuantidade[idProdutoNoCarrinho]
    }
    precoTotalCarrinho = formatPreco(precoTotalCarrinho)
    subtotal.innerText = `${precoTotalCarrinho}`
}




