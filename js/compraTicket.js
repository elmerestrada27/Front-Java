//capturo los elementos html
const valorTicket = 200;
const cantidad = get('cantidad');
const categoria = get('categoria');
const resumenPago = get('resumenPago');
// Asocio el evento click al boton Resumen
document.getElementById('buttonResumen').addEventListener('click', calcularCompra);

//retorna el objeto que esta en el html
function get(id) {
    return document.getElementById(id);
}

function calcularCompra(){
    const valueCantidad = cantidad.value;
    const valueCategoria = categoria.value;

    const totalSindescuento = parseInt(valueCantidad)*valorTicket;
    console.log('TOTAL A PAGAR SIN DESCUENTO: $' + resumenPago.textContent);

    const totalFinal = totalSindescuento - obtenerDescuento(totalSindescuento,parseFloat(valueCategoria));

    // Actualizo monto a pagar en el Front
    resumenPago.textContent = 'Total a pagar: $' + totalFinal;
    console.log('TOTAL A PAGAR: $' + resumenPago.textContent);
}

function obtenerDescuento(totalSindescuento,categoria){
  const descuentoObtenido = totalSindescuento*categoria;  
  console.log('TOTAL A PAGAR SIN DESCUENTO: $' + descuentoObtenido);
  return descuentoObtenido;
}

/*
function obtenerDescuento(totalSindescuento,categoria){
    switch (categoria) {
        case "Estudiante":
          return (totalSindescuento*0,8);
          break;
        case "Trainee":
            return (totalSindescuento*0,5);
          break;
        case "Junior":
            return (totalSindescuento*0,15);
          break;
        default:
          console.log("ERROR EN CATEGORIA");
          return 0;
          break;
      }
}
*/