class DateHelper{
    
    constructor(){

        throw new Error('Está classe não pode ser instanciada');
    
    }

    static dataParaTexto(data){

       return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;     
       
    }

    static textoParaData(texto){

        /\d{4}-\d{2}-{2}/
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}