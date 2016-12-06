var ManejadorDeArticulos = {};
var actual = 0;
var cantArtPorPag = 5;

window.onload = function(){

  ManejadorDeArticulos.load();
  ManejadorDeArticulos.cargarPaginas();
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
   var param1 = "<span id= 'articulo0'><iframe width='300' height='250' frameborder='0' src='https://www.youtube.com/embed/p2Fnc-Iv1kE'> </iframe></span>";
   var param2 = "<span id= 'articulo1'><iframe width='300' height='250' frameborder='0' src='https://www.youtube.com/embed/yPJLL2FA8qg'> </iframe></span>";
   var param3 = "<span id= 'articulo2'><img src='img/capcon.jpg'></span>";
   var titulo1 = "Nos vamos a la estratosfera!";
   var titulo2 = "Menem lo hizo!";
   var titulo3 = "Y para cerrar los Power Rangers!";

   var articulo1 = new Articulo(titulo1,param1)
   this.articulos.push(articulo1);
   this.articulos.push(new Articulo(titulo2, param2));
   this.articulos.push(new Articulo(titulo3, param3));

};

ManejadorDeArticulos.render = function(objectId){
  if (actual >= 3) actual = 0;

  $("#" + objectId).html(this.articulos[actual].render());
   actual++;

};

ManejadorDeArticulos.cargarPaginas = function(){
  var retorno = "";

  for (var i = 0; i < this.articulos.length; i++) {
    this.articulos[i]
    "<li>2</li>"
  }


  $('.paginas').html(retorno)

}
