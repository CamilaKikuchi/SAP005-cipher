const cipher = {
  encode: function(){
    const textArea = document.getElementById("text").value 
    const offset = Number(document.getElementById("offset").value)
    let resultado = "";
    
    

    for(let i = 0; i <textArea.length; i++) {
      const text = textArea.charCodeAt(i);
      const palavraCodificada =((text - 65 + offset) % 26) + 65;
      
    resultado += String.fromCharCode(palavraCodificada);
    }
  

  document.getElementById("resultado").innerHTML =`código pronto: ${resultado}` 
},
decode: function(){
    
  const textAreaUm = document.getElementById("textUm").value
  const offsetUm = Number(document.getElementById("offsetUm").value)
  let resultado = "";
  

  for(let i = 0; i <textAreaUm.length; i++) {
    const text = textAreaUm.charCodeAt(i);
    const palavraDecodificada =((text - 90 - offsetUm) % 26) + 90;
    

  resultado += String.fromCharCode(palavraDecodificada);
  }


document.getElementById("resultado").innerHTML =`código pronto: ${resultado}` 
}
};


export default cipher;

