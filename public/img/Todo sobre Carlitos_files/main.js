var ManejadorDeArticulos = {};


window.onload = function(){

  ManejadorDeArticulos.load();
  //ManejadorDeArticulos.render('arti')


}

var Articulo = function(titulo, contenido){
   this.titulo = titulo;
   this.contenido = contenido;
};

Articulo.prototype.render = function(){
   return '<li><article><div><h3>' + this.titulo + '</h3></div><div><p>' + this.contenido + '</p></div></article></li>'
};


ManejadorDeArticulos.load = function(){
   this.articulos = [];
   var param1 = "<span id= 'titulo1'> Nos vamos a la estratosfera<br><iframe width='300' height='250' frameborder='0' src='https://www.youtube.com/embed/p2Fnc-Iv1kE'> </iframe></span>";

   var articulo1 = new Articulo('Titulo1',param1)
   this.articulos.push(articulo1);
   this.articulos.push(new Articulo('Titulo2', 'Contenido2'));
   this.articulos.push(new Articulo('Titulo3', 'Contenido3'));

};

ManejadorDeArticulos.render = function(objectId){
   var result = "";
   for (var i = 0; i<this.articulos.length; i++) {
      result += this.articulos[i].render();
   }
   document.getElementById.innerHTML = result;
};
