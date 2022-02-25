class Anteojos{
    constructor(id, marca,modelo,ano,precio,stock,disponible,img){
        this.id=parseInt(id);
        this.marca=marca.toLowerCase();
        this.modelo=modelo.toLowerCase();
        this.ano=parseInt(ano);
        this.precio=parseInt(precio);
        this.stock=parseInt(stock);
        this.disponible=disponible;
        this.img=img;
    }
    comprar(cantidad){
        this.stock=this.stock - cantidad;
        if (this.stock==0){
            this.disponible=false;
        }
    }
}

let arrAnte=[];

arrAnte.push(new Anteojos("1", "versace","extes", "2020", "70", "7", true,"img/ante/ante1.jpg"));
arrAnte.push(new Anteojos("2", "versace","tent", "2021", "92", "12", true, "img/ante/ante1.jpg"));
arrAnte.push(new Anteojos("3", "versace","pound", "2019", "49", "4", true, "img/ante/ante1.jpg"));
arrAnte.push(new Anteojos("4", "versace","estros", "2022", "110","13", true, "img/ante/ante1.jpg"));

arrAnte.push(new Anteojos("5", "gucci","d", "2021", "93", "4", true, "img/ante/gucci.jpg"));
arrAnte.push(new Anteojos("6", "gucci","d", "2020", "78", "7", true, "img/ante/gucci.jpg"));
arrAnte.push(new Anteojos("7", "gucci","d", "2019", "62", "2", true, "img/ante/gucci.jpg"));
arrAnte.push(new Anteojos("8", "gucci","d", "2022", "105","11", true, "img/ante/gucci.jpg"));

arrAnte.push(new Anteojos("9", "prada","d", "2021", "92", "8", true, "img/ante/prada2.jpg"));
arrAnte.push(new Anteojos("10", "prada","d", "2021", "95", "9", true, "img/ante/prada2.jpg"));
arrAnte.push(new Anteojos("11", "prada","d", "2020", "78", "3", true, "img/ante/prada2.jpg"));
arrAnte.push(new Anteojos("12", "prada","d", "2020", "80", "5", true, "img/ante/prada2.jpg"));

arrAnte.push(new Anteojos("13", "vogue","d", "2020", "76", "6", true, "img/ante/vogue.jpg"));
arrAnte.push(new Anteojos("14", "vogue","d", "2021", "93", "5", true, "img/ante/vogue.jpg"));
arrAnte.push(new Anteojos("15", "vogue","d", "2018", "55", "8", true, "img/ante/vogue.jpg"));
arrAnte.push(new Anteojos("16", "vogue","d", "2018", "60", "2", true, "img/ante/vogue.jpg"));

arrAnte.push(new Anteojos("17", "dolce","d", "2021", "94", "7", true, "img/ante/dolce.jpg"));
arrAnte.push(new Anteojos("18", "dolce","d", "2022", "129","1", true, "img/ante/dolce.jpg"));
arrAnte.push(new Anteojos("19", "dolce","d", "2020", "79", "10", true, "img/ante/dolce.jpg"));
arrAnte.push(new Anteojos("20", "dolce","d", "2021", "93", "6", true, "img/ante/dolce.jpg"));