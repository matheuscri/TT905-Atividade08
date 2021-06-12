/********************************************************************** 
*******************************Cantores********************************
************************************************************************/

let url = "https://tt905-prog-web-matheus-cri.herokuapp.com/cantores/"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou/GET");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost(cantor){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Cantor' : cantor
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, novaMensagem){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'Cantor' : novaMensagem
        })
    }
    await fetch(`${url}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}${id}`, options);
}

/*
    Formulários
*/

function submitPost(){
    console.log("entrei na função");
    
    const form = document.forms['postForm'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPost(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPut(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}
/********************************************************************** 
*******************Soudtrack: Tony Hawk********************************
************************************************************************/

let url = "https://tt905-prog-web-matheus-cri.herokuapp.com/soundtrack/Tony_Hawk_American_Wasteland/"


async function callFetchWithGets1(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementByIds1("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou/GET");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPosts1(musica){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Music' : musica
        })
    }
    await fetch(url, options);
}

async function callFetchWithPuts1(id, novaMensagem){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'Music' : novaMensagem
        })
    }
    await fetch(`${url}${id}`, options);
}

async function callFetchWithDeletes1(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}${id}`, options);
}

/*
    Formulários
*/

function submitPosts1(){
    console.log("entrei na função");
    
    const form = document.forms['postForm'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPost(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPuts1(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPut(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDeletes1(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}