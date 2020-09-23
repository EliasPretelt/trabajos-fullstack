 
const inputLetras =document.getElementById('letras');
const inputnumeros =document.getElementById('numeros');
const main = document.getElementById('main');
const a1 = document.getElementById('a1');
const inputDark =document.getElementById('dark');
const inputRetro =document.getElementById('retro');
const header = document.getElementById('header');
const btnReset=document.getElementById('reset');
const abc = ['a','b','c','d','e','f','g','h','i','j'];



swal({title: "ANSALO",text: "Inputs de manera correcta y consecutiva debes llenar.",icon: "success",}) 

 main.addEventListener('click',e=>{
    if(e.target.classList.contains('btn')){
        escribirLetra(e.target.value);
        escribirNumeros(e.target.value);
    }
});

const escribirLetra = n=>{
    let posicion = abc.findIndex(letra=>letra===n);
    let valorDeseado= abc.slice(0,posicion);
    
    if(inputLetras.value==valorDeseado.join('')){
        inputLetras.value+=n;
    }else{
        let esperado = valorDeseado.slice(inputLetras.value.length,valorDeseado.length);let uno = esperado.join('');let unos = esperado.join(' , ')
        if(esperado.length>0){
            esperado.length === 1 ? swal({title: "Lo siento!",text: "Falta la letra "+ uno,icon: "warning",}) : swal({title: "Lo siento!",text: "Faltan la letras "+ unos,icon: "error",})
        }
    }
    btnReset.addEventListener('click',()=>{inputLetras.value='';})
}

 const escribirNumeros = (n)=>{

     if(inputLetras.value===abc.join('')){
         let valor = (abc.findIndex(v=>v===n))+1;
         if(n==='j'){valor=0}
         let valorDeseado='';
         for(let i=1;i<valor;i++){
             valorDeseado+=i;
         }
         if(valor!==0){
            if(inputnumeros.value===valorDeseado){
                inputnumeros.value+=valor;
             }else{
                 let esperado = valorDeseado.slice(inputnumeros.value.length,valorDeseado.length); let varios = esperado.split('').join(' , ');
                 if(esperado.length>0){
                 esperado.length===1 ? swal({title: "Lo siento!",text: "Falta el número "+ esperado,icon: "warning",}) :swal({title: "Lo siento!",text: "Faltan los numeros "+ varios,icon: "error",});
                 }
             }
         }
         else{
             inputnumeros.value==='123456789' ? inputnumeros.value+=valor : null;
         }

     }
     btnReset.addEventListener('click',()=>{
        inputnumeros.value='';
        inputLetras.value='abdefghij';
    })
    if(inputnumeros.value=='1234567890'){swal({title: "Buen Trabajo!",text: "Has terminado el reto!",icon: "success",});}

     
 }

 inputDark.addEventListener('click',()=>{
    if(inputDark.checked){
        localStorage.setItem('tema','dark');
        main.className='dark';
        header.className='dark';
        inputRetro.checked=false;
        document.body.className='normal';
    }else{
        main.classList.remove('dark');
        header.classList.remove('dark');
        localStorage.setItem('tema','clasico');
    }
 })

 inputRetro.addEventListener('click',()=>{
    if(inputRetro.checked){
        localStorage.setItem('tema','retro');
        main.className='retro';
        header.className='retro';
        document.body.className='retro';
        inputDark.checked=false;
    }else{
        main.classList.remove('retro');
        header.classList.remove('retro');
        document.body.className='normal';
        localStorage.setItem('tema','clasico');
    }
 })
if(localStorage['tema']==='dark'){
    main.className='dark';
    header.className='dark';
    inputDark.checked=true;
}
if(localStorage['tema']==='retro'){
    main.className='retro';
    header.className='retro';
    document.body.className='retro';
    inputRetro.checked=true;
}



