const catalogoProdutos = document.querySelector("#container-products")

function exibitTodos(){
    const produtosOcultos = Array.from(catalogoProdutos.getElementsByClassName('hidden'))

    for (const produto of produtosOcultos) {
        produto.classList.remove('hidden')
    }
}

function ocultarCpu(){
    const cpus = Array.from(catalogoProdutos.getElementsByClassName('CPU'))

    for (const cpu of cpus){
        cpu.classList.add('hidden')
    }
}

function ocultarGpu(){
    const gpus = Array.from(catalogoProdutos.getElementsByClassName('GPU'))

    for (const gpu of gpus){
        gpu.classList.add('hidden')        
    }
}

function ocultarMobo(){
    const mobos = Array.from(catalogoProdutos.getElementsByClassName('MOBO'))

    for (const mobo of mobos){
        mobo.classList.add('hidden')
    }
}

function ocultarRAM(){
    const rams = Array.from(catalogoProdutos.getElementsByClassName('RAM'))

    for (const ram of rams){
        ram.classList.add('hidden')
    }
}

export function filtrarCatalago(){
    catalogoProdutos.classList.remove('justify-between')
    document.querySelector('#CPU').addEventListener('click', () =>{
        exibitTodos()
        ocultarGpu()
        ocultarMobo()
        ocultarRAM()
    })

    document.querySelector('#GPU').addEventListener('click', () =>{
        exibitTodos()
        ocultarCpu()
        ocultarMobo()
        ocultarRAM()
    })

    document.querySelector('#MOBO').addEventListener('click', () =>{
        exibitTodos()
        ocultarGpu()
        ocultarCpu()
        ocultarRAM()
    })

    document.querySelector('#RAM').addEventListener('click', () =>{
        exibitTodos()
        ocultarGpu()
        ocultarMobo()
        ocultarCpu()
    })

    document.querySelector('#TODOS').addEventListener('click', () =>{
        exibitTodos()
    })
}