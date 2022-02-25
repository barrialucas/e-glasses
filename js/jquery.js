/* FILTRO POR MARCA */

function filtrarProductos(categoria) {
  if (categoria==="Tod"){
      $(".card-body").css({"display":"block"});
  }else if (categoria==="versace") {
      $(".versace").css({"display":"block"});
      $(".gucci").css({"display":"none"});
      $(".prada").css({"display":"none"});
      $(".vogue").css({"display":"none"});
      $(".dolce").css({"display":"none"});
  } else if (categoria==="gucci") {
      $(".versace").css({"display":"none"});
      $(".gucci").css({"display":"block"});
      $(".prada").css({"display":"none"});
      $(".vogue").css({"display":"none"});
      $(".dolce").css({"display":"none"});
  } else if (categoria==="prada") {
      $(".versace").css({"display":"none"});
      $(".gucci").css({"display":"none"});
      $(".prada").css({"display":"block"});
      $(".vogue").css({"display":"none"});
      $(".dolce").css({"display":"none"});
  }else if (categoria==="vogue") {
    $(".versace").css({"display":"none"});
    $(".gucci").css({"display":"none"});
    $(".prada").css({"display":"none"});
    $(".vogue").css({"display":"block"});
    $(".dolce").css({"display":"none"});
  }else if (categoria==="dolce") {
    $(".versace").css({"display":"none"});
    $(".gucci").css({"display":"none"});
    $(".prada").css({"display":"none"});
    $(".vogue").css({"display":"none"});
    $(".dolce").css({"display":"block"});
  }else if (categoria==="Todos") {
    $(".versace").css({"display":"block"});
    $(".gucci").css({"display":"block"});
    $(".prada").css({"display":"block"});
    $(".vogue").css({"display":"block"});
    $(".dolce").css({"display":"block"});
  }
};


$("#Todos").click( (e)=> {
  e.preventDefault();
  filtrarProductos("Todos");
  $('html,body').animate({
      scrollTop:$('.main__row2').offset().top
  },300);
});

$("#versace").click( (e)=> {
  e.preventDefault();
  filtrarProductos("versace");
  $('html,body').animate({
      scrollTop:$('.main__row2').offset().top
  },300);
});

$("#gucci").click( (e)=> { 
  e.preventDefault();
  filtrarProductos("gucci");
  $('html,body').animate({
      scrollTop:$('.main__row2').offset().top
  },300);
});

$("#prada").click( (e)=> { 
  e.preventDefault();
  filtrarProductos("prada");
  $('html,body').animate({
      scrollTop:$('.main__row2').offset().top
  },300);
});

$("#vogue").click( (e)=> { 
  e.preventDefault();
  filtrarProductos("vogue");
  $('html,body').animate({
      scrollTop:$('.main__row2').offset().top
  },300);
});

$("#dolce").click( (e)=> { 
  e.preventDefault();
  filtrarProductos("dolce");
  $('html,body').animate({
      scrollTop:$('.main__row2').offset().top
  },300);
});


