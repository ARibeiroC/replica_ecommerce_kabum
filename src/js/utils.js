export const catalogo = [
    {
      id: "1",
      marca: "Azus",
      nomeProduto: "RTX 3060 12GB",
      preco: 1999.99,
      imagem: "product-1.jpg",
      categoria: 'GPU',
    },
    {
      id: "2",
      marca: "MSI",
      nomeProduto: "Placa Mãe A320M-A Pro",
      preco: 319.99,
      imagem: "product-2.jpg",
      categoria: 'MOBO',
    },
    {
      id: "3",
      marca: "Gigabyte",
      nomeProduto: "Placa Mãe A520M K V2",
      preco: 459.99,
      imagem: "product-3.jpg",
      categoria: 'MOBO',
    },
    {
      id: "4",
      marca: "Galax",
      nomeProduto: "RTX 3060 1-Click OC 12GB",
      preco: 1899.99,
      imagem: "product-4.jpg",
      categoria: "GPU",
    },
    {
      id: "5",
      marca: "AMD",
      nomeProduto: "Ryzen 5 5600G, 3.9GHz",
      preco: 833.26,
      imagem: "product-5.jpg",
      categoria: 'CPU',
    },
    {
      id: "6",
      marca: "Zotac Gaming",
      nomeProduto: "RTX 3060 Twin Edge 12GB",
      preco: 2049.99,
      imagem: "product-6.jpg",
      categoria: 'GPU',
    },
    {
      id: "7",
      marca: "AMD",
      nomeProduto: "Ryzen 7 5700X, 3.4GHz",
      preco: 1249.99,
      imagem: "product-7.jpg",
      categoria: 'CPU',
    },
    {
      id: "8",
      marca: "Kingston",
      nomeProduto: "Fury 8GB, 3200MHz, DDR4",
      preco: 159.99,
      imagem: "product-8.jpg",
      categoria: 'RAM',
    },
  ]

export function formatPreco(preco){
  let precoFormatado = preco
  return precoFormatado = precoFormatado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

export function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao))
}

export function lerLocalStorage(chave){
  return JSON.parse(localStorage.getItem(chave))
}