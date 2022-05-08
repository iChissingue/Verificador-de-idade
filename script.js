function calcular(){
    var data = new Date()
    var hoje = data.getFullYear()
    var ano = window.document.getElementById('year')
    var idade = hoje - Number(ano.value)

    var resp = window.document.getElementById('res')
    

    if (ano.value.length == 0 || idade.value > ano){
        window.alert('[ERRO]! Verifica os dados e tenta novamente.')
    
    } else {
        var sexo = window.document.getElementsByName('sex')
        var idade = hoje - Number(ano.value)
        var gen = ''
        var img = document.createElement('img')
            img.setAttribute('id', 'fot')


        if (sexo[0].checked){
            gen = 'Masculino'
            if (idade >= 0 && idade <18){
                //crianca
                img.setAttribute('src', 'img/Menino.png')
            }else if(idade <35){
                //jovem
                img.setAttribute('src', 'img/jovemH.png')
            }else {
                //adulto
                img.setAttribute('src', 'img/idoso.png')
            }

        }else if (sexo[1].checked){
            gen = 'Feminino'
            if (idade >= 0 && idade <18){
                //crianca
                img.setAttribute('src', 'img/menina.png')
            }else if(idade <35){
                //jovem
                img.setAttribute('src', 'img/jovemM.png')
            }else {
                //adulto
                img.setAttribute('src', 'img/idosa.png')
            }
        }
    }
   
    resp.innerHTML = `Detectamos um individuo ${gen} de ${idade} anos`
    resp.appendChild(img)
}
