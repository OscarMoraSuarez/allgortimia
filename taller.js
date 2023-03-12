'use strict';
//!Primer Punto
const distanciaKilometros=42.195;
const tiempoHoras=2;
const tiempoMinutos=25; 

const calcularMinutosKilometro=(distancia,tiempoHoras,tiempoMinutos)=>{
    let minutos=tiempoHoras*60;
    let minutosTotales=minutos+tiempoMinutos ;
    let minutosKilometro=minutosTotales/distancia;
    return `el atleta a recorrido ${minutosKilometro}km por minuto`;
}
let respuesta=calcularMinutosKilometro(42.195,2,25); 
console.log(respuesta);
//! punto 2
let addResponse2=true;
const convertirFahrenheit=(gradosCelcius)=>{
   console.log(addResponse2);   
   if(addResponse2==true){
    addResponse2=false;
    let celcius=document.querySelector('#gradosC').value;
    const fahrenheit=(celcius*9/5)+32;
    const response2=document.querySelector('.response2');
    const resCont=document.createElement('div');
    const resHTML=`<div id="response2" class="alert alert-dismissible alert-info text-center">
                    <strong>${fahrenheit}</strong> 
                 </div>`;
    resCont.innerHTML=resHTML;
    response2.append(resCont);
    console.log(resCont);
    }
}
let botonGrados=document.querySelector('#convertirGrados').addEventListener('click', convertirFahrenheit); 
let reset1=document.querySelector('#reset1').addEventListener('click',()=>{
   let celcius=document.querySelector('#gradosC').value='';
   let response2=document.querySelector('.response2');
   if(response2.firstElementChild){
      response2.firstElementChild.remove();
   }
   addResponse2=true;
}); 
//!punto3
let addResponse3=true
let calcularNota=()=>{
   if(addResponse3==true){
      addResponse3=false;
      let taller1=document.querySelector('#taller1').value;
      let taller2=document.querySelector('#taller2').value;       
      let quiz=document.querySelector('#quiz').value;         
      let parcial=document.querySelector('#parcial').value;
      const calificaciones=[['taller1',taller1],['taller2',taller2],['quiz',quiz],['parcial',parcial]]
      const base=10;
      let calificacionFinal=0;
      const ponderadoCalificacion=(calificacion,base)=>{
   
         let porcentaje=null;
         if(calificacion[0]=='parcial'){
             porcentaje=0.7;
         }else{
             porcentaje=0.1;
         }
         
        const ponderacion=((calificacion[1]*porcentaje)/base)*10
         return ponderacion;
     }
     
      
    calificaciones.forEach((calificacion)=>calificacionFinal+=ponderadoCalificacion(calificacion,base));
      const response3=document.querySelector('.response3');
      const resCont=document.createElement('div');
      const resHTML=`<div id="response3" class="alert alert-dismissible alert-info text-center">
                     <strong>${calificacionFinal}</strong> 
                  </div>`;
     resCont.innerHTML=resHTML;
     response3.append(resCont);
      return calificacionFinal;
   }
   
}
let botonCalcularNota=document.querySelector('#calcularNota').addEventListener('click',calcularNota);
   let reset3=document.querySelector('#reset3').addEventListener('click',()=>{
   const formContainer=document.querySelector('#formContainer');
   const inputs=formContainer.children;
   let arrInputs = [].slice.call(inputs);
   arrInputs.forEach(input=>input.value=' ');
   let response3=document.querySelector('.response3');
   if(response3.firstElementChild){
      response3.firstElementChild.remove();
   } 
   addResponse3=true;
   
})

//!punto4

let addResponse4=true;
const calcularIntereses=()=>{
   console.log(addResponse4);   
   if(addResponse4==true){
    addResponse4=false;
    let cantidad=document.querySelector('#cantidad').value;
    let doble=cantidad*2
    let redito=document.querySelector('#redito').value;
    let uTiempo=document.querySelector('#utiempo').value;
    let tiempo=document.querySelector('#tiempo').value;
    const interesUnidad=(cantidad*redito*1)/uTiempo;
    console.log('tiempo',tiempo);
    const interesTotal=interesUnidad*tiempo; 
    let Amd=null;
    let Dma=null
    if(uTiempo==100){
      Amd='años'
      Dma='anual'
    }else if(uTiempo==1200){
      Amd='meses'
      Dma='años'
    }else if(uTiempo==36000){
      Amd='días';
      Dma='años'
    }
    
    console.log(interesUnidad,interesTotal); 
    const response4=document.querySelector('.response4');
    const resCont=document.createElement('div');
    const resHTML=`<div id="response4" class="alert alert-dismissible alert-info text-center">
                    <strong>El interes es ${interesUnidad} ${Dma}</strong><br> 
                    <strong>El interes es Total es ${interesTotal}</strong><br>  
                    <strong>La cantidad se doblara en ${doble/interesUnidad} ${Amd}</strong><br>  
                 </div>`;
    resCont.innerHTML=resHTML;
    response4.append(resCont);
    console.log(resCont);
    }
}
let botonIntereses=document.querySelector('#calcularIntereses').addEventListener('click', calcularIntereses); 
let reset4=document.querySelector('#reset4').addEventListener('click',()=>{
   const formContainer4=document.querySelector('.formContainer4');
   const nodes=formContainer4.children;
   let arrNodes = [].slice.call(nodes);
   arrNodes.forEach((node)=>{
         if(node.tagName=='INPUT'){
            node.value=' '
         }else if(node.tagName=='SELECT'){
            node.value=null
         }
   });
   let response4=document.querySelector('.response4');
   if(response4.firstElementChild){
      response4.firstElementChild.remove();
   }
   addResponse4=true;
}); 
//!punto5
let addResponse5=true;
let numeros=[];
const devolverNumerosMayores=()=>{
   /* console.log(addResponse5);    */
   if(addResponse5==true){ 
    
      if(numeros.length<=20){
            let numInput=document.querySelector('#num');
            let num=numInput.value;
            
            let numero=parseInt(num,10);
            console.log(numero);
            
            if(num.length!==0){
               numeros.push(num);
            }
            numInput.value=null;
            numInput.focus();
            console.log(numeros);
            let mayores=numeros.filter(numero=>numero>=25);
            
         if(numeros.length==20){
            addResponse5=false;
            const response5=document.querySelector('.response5');
            const resCont=document.createElement('div');
            const resHTML=`<div id="response2" class="alert alert-dismissible alert-info text-center">
                              <strong>los numeros que ingresaste ${numeros}</strong> <br> 
                              <strong>los mayores o iguales a 25 son${mayores}</strong> 
                           </div>`;
            resCont.innerHTML=resHTML;
            response5.append(resCont);

         }
      }   
    } 
   
}

let enviarNums=document.querySelector('#enviarNums').addEventListener('click',devolverNumerosMayores); 
let reset5=document.querySelector('#reset5').addEventListener('click',()=>{
   let num=document.querySelector('#num').value='';
   let response5=document.querySelector('.response5');
   if(response5.firstElementChild){
      response5.firstElementChild.remove();
   }
   addResponse5=true;
}); 
//!punto6
let totalPesos=0;
let totalDolar=0;
let factor=null;
let sellConceptDollar=[]
let sellConceptPesos=[]
const from = 'USD';
const to = 'COP';
const amount = '1';
const apiKey = 'ww87FluCtvGNt0lcezZpOp5hq4zJ94hT';
const dolar=null;
var myHeaders = new Headers();
myHeaders.append("apikey", apiKey);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const getData = async () => {
  const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions);
  const data = await response.json();
  return data;
}
//resulevo la promesa
const resolveConvertion=async(desc,dollars)=>{
  let { result }=await getData();
  let sellpesos=[desc,Math.round(result*dollars)];
  sellConceptPesos.push(sellpesos);
  mostrarItems(); 
}
//llamo a la funcion que resuelve la promesa
let send=document.querySelector('#send').addEventListener('click',()=>{
  let desc=document.querySelector('#desc').value;
  let dollars=document.querySelector('#dollar').value;   
  const regex1 = /^\S.{1,98}\S$/;
  const regex = /^\d+(\.\d{1,2})?$/;
  
  
   if (!(desc.trim()!=''&&regex1.test(desc))) {
      alert("inserte una descripcion valida");
      return
   } 
   if (!regex.test(dollars)) {
    alert('inserte un precio en dolares que sea valido');
    return;
   } 
  
  factor=dollars;
  let selldollar=[desc,dollars];
  sellConceptDollar.push(selldollar);
  resolveConvertion(desc,dollars);
});
function mostrarItems(){
         
         let res6=document.querySelector('#respuesta6');
         res6.innerHTML='';
         if(sellConceptPesos.length>0){
                  
                  let responses=document.createElement('div');
                  responses.classList.add('row','d-flex','justify-content-center');
                  let text='';
                  let background=''
                  let id=''
                  for(let i=0; i<3;i++){
                      if(i==0){
                        text='desc';
                        background='bg-info';
                        id='descOutput';
                      }else if(i==1){
                        text='dollars';
                        background='bg-success';
                        id='dollarsOutput';
                      }else{
                        text='pesos';
                        background='bg-warning';
                        id='pesosOutput';
                      }  
                     let response=document.createElement('div');
                     response.classList.add('col-sm-4',background,'rounded-3','d-flex','justify-content-center')
                     let htmlContent=`
                                       <div class="row text-center text-light" id=${id}>
                                           <h6>${text}</h6>
                                       </div>
                                     `
                     response.innerHTML=htmlContent;
                     responses.append(response);                
                  }
         res6.append(responses);         
                  let descOutput= document.querySelector('#descOutput');
                  let dollarsOutput= document.querySelector('#dollarsOutput');
                  let pesosOutput= document.querySelector('#pesosOutput');
                  for(let i=0; i<sellConceptDollar.length;i++){
                        let descHeader=document.createElement('h6');
                        let descText=`<p>${sellConceptDollar[i][0]}</p>`;
                        descHeader.innerHTML=descText;
                        descOutput.append(descHeader);
                        let dollarsHeader=document.createElement('h6');
                        let dollarsText=`<p>${sellConceptDollar[i][1]}</p>`;
                        dollarsHeader.innerHTML=dollarsText;
                        dollarsOutput.append(dollarsHeader);
                        let pesosHeader=document.createElement('h6');
                        let pesosText=`<p>${sellConceptPesos[i][1]}</p>`;
                        pesosHeader.innerHTML=pesosText;
                        pesosOutput.append(pesosHeader);
                  }
         } 
   }

   let rest= document.querySelector('#reset6').addEventListener('click',reset);
   function reset(){
      let res6=document.querySelector('#respuesta6');
      let desc=document.querySelector('#desc').value='';
      let dollars=document.querySelector('#dollar').value='';
      res6.innerHTML='';
      sellConceptDollar=[];
      sellConceptPesos=[];
      let totalOutput=document.querySelector('#totales');
      totalOutput.innerHTML='';
   }
   let totalButton=document.querySelector('#total').addEventListener('click',calcularTotal)
   function calcularTotal(){
      for(let i=0;i<sellConceptDollar.length; i++){
          totalDolar+=parseInt(sellConceptDollar[i][1]); 
          totalPesos+=sellConceptPesos[i][1]; 
      }

      let totalOutput=document.querySelector('#totales');
      totalOutput.innerHTML=`<div class="m-4 col-sm-12 bg-danger text-center text-light rounded-1">
                               Totales 
                              <h6> $Dolares:${totalDolar} $Pesos:${totalPesos}</h6>
                            </div>`
   }
   
/////////////////////////////////////////////////////////////////////////////////////////
  
//!Punto7
let misVentas = (function() {
   let ventas = [];
      function ordenarPorMesa(array) {
         return array.sort((a, b) => {
           if (a.mesa < b.mesa) {
             return -1;
           }
           if (a.mesa > b.mesa) {
             return 1;
           }
           return 0;
         });
     }   
    
   function insertarVenta(venta) {
     ventas.push(venta);
   }
   function leerVentas() {
     return ordenarPorMesa(ventas);
   }
   function reset(){
      ventas=[];
   }
   return {
      insertarVenta,
      leerVentas,
      reset
   };
 })();

 class Venta{
   constructor(mesa,descripcion,precio,hora=new Date().toLocaleTimeString()){
      this.mesa=mesa;
      this.descripcion=descripcion;
      this.precio=precio;
      this.hora=hora;
   }
}
const tabla=document.querySelector('#tabla7');
const totales7=document.querySelector('#totales7');
const mesa=document.querySelector('#numeroMesa');
const descripcion=document.querySelector('#descripcion');
const precio=document.querySelector('#precio');
const botonReset7=document.querySelector('#reset7').addEventListener('click',reset7);
const botonTotal=document.querySelector('#total7').addEventListener('click',calcularTotal);
const botonLeer=document.querySelector('#leer').addEventListener('click',()=>{
   const venta=new Venta(mesa.value,descripcion.value,precio.value);
   if(mesa.value.trim()==''||mesa.value.trim()==''||descripcion.value.trim()==''||isNaN(parseFloat(precio.value))){
      alert('debe asegurarse de ingresar los valores adecuados');
      return;
   }
   mesa.value=null;
   descripcion.value=null;
   precio.value=0;
   misVentas.insertarVenta(venta);
   mostrarVentas();
});
function leerVentas(){
   return misVentas.leerVentas();      
   
}
function mostrarVentas(){
 let tabla=document.querySelector('#tabla7');
 tabla.innerHTML=''; 
 let ventas=leerVentas(); 
 
 for(let i=0;i<ventas.length;i++){
   
   let tr=document.createElement('tr');
   tr.classList.add('table-active');
   let tableContent=` <th scope="row">${ventas[i].mesa}</th>
                      <td>${ventas[i].descripcion}</td>
                      <td>${ventas[i].precio}</td>
                      <td>${ventas[i].hora}</td>
                     `
   tr.innerHTML=tableContent;
   tabla.append(tr);

 }
 

}
function reset7(){
   tabla.innerHTML='';
   misVentas.reset();
}
function calcularTotal(){
   /* let mesaVenta=; */
   
   if(mesaVenta==='Seleccione Mesa'){
      alert('seleccione una mesa')
      return
   }
   let ventasTotales=0;
   let ventaTotalMesa=0;
   console.log(ventaTotalMesa);
   let precioPrecioDes=0;
   let ventas=misVentas.leerVentas(); 
   console.log(ventas)
   let ventasMesa=ventas.filter(venta=>venta.mesa=='mesa1');
   console.log(ventasMesa);
   for(let i=0; i<ventasMesa.length;i++){
      ventaTotalMesa+= parseFloat(ventasMesa[i].precio); 
   }
   for(let i=0;i<ventas.length;i++){
      ventasTotales+=parseFloat(ventas[i].precio);   
   }
   if(ventaTotalMesa>50000){
     precioPrecioDes=(ventaTotalMesa*20)/100;
   }
   console.log(ventaTotalMesa-precioPrecioDes);
   console.log(ventasTotales);

   let totales7=document.querySelector('#totales7');

   let htmlContent=`
                     <div>${mesaVenta}</div>
                     <div>Total=$${ventaTotalMesa}</div>
                     <div>Descuento=$${precioPrecioDes}</div>
                     <div>Total a Pagar=$${ventaTotalMesa-precioPrecioDes}</div>
                     <hr>
                     <div>Ventas totales Mesas</div>
                     <div>Total=$${ventasTotales}</div>
                  `
   totales7.innerHTML=htmlContent;

}
//!Punto8
function sumarSegundos() {
      let hora = Number(document.querySelector("#hora").value);
      let minutos = Number(document.querySelector("#minutos").value);
      let segundos = Number(document.querySelector("#segundos").value) + 1;
    
      if (segundos === 60) {
         segundos = 0;
         minutos++;
       }
     
       if (minutos === 60) {
         minutos = 0;
         hora++;
       }
     
       if (hora === 24) {
         hora = 0;
       }
     
       if (minutos === 0 && segundos === 0) {
         hora++;
         minutos = 0;
         segundos = 0;
       }
    
      document.querySelector("#hora").value = hora.toString().padStart(2, "0");
      document.querySelector("#minutos").value = minutos.toString().padStart(2, "0");
      document.querySelector("#segundos").value = segundos.toString().padStart(2, "0");
}















