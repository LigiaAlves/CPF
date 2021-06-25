function verificarCPF(){
    let cpf = document.getElementById("entrada").value // 123.456.789-00
    let estado = ""
    try{
        // let y = cpf.split("-") //[123.456.789; 00]
        // let j = y[0] // 123.456.789
    
        // let x = j.split(".") // [123; 456 ; 789]
        // let c = x[2] // 789

        // let digito = x[2] // 9

        let digito = parseInt(cpf.split("-")[0].split(".")[2][2])

        switch(digito)
        {
            case 0:
                estado = 'RS'
                break
            case 1:
                estado = 'DF, GO, MT, MS, TO'
                break
            case 2:
                estado = 'AM, PA, RR, AP, AC, RO'
                break
            case 3:
                estado = 'CE, MA, PI'
                break
            case 4:
                estado = 'PB, PE, AL, RN'
                break
            case 5:
                estado = 'BA, SE'
                break
            case 6:
                estado = 'MG'
                break
            case 7:
                estado = 'RJ, ES'
                break
            case 8:
                estado = 'SP'
                break
            case 9:
                estado = 'PR e SC'
                break
        }

        document.getElementById("saida").textContent = estado
    }
    catch(err){
        document.getElementById("saida").textContent = 'Inserir o cpf no formato correto'

    }
    
}

