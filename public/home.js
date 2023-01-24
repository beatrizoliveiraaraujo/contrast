//botão que aplica o auto contraste na página
$("body").on("click", "#contraste", () => {  
  alert("AAA")
    if($("body").hasClass("claro")){
      $("body").removeClass("claro").addClass("escuro");
      $("body").children().removeClass("claro").addClass("escuro");
    } else {
      $("body").removeClass("escuro").addClass("claro");
      $("body").children().removeClass("escuro");
    }
  });
  //botão que aplica a escala de cinza na página
  $("body").on("click", "#grayescale", () => {  
    if($("body").hasClass("grayscale")){
      $("body").removeClass("grayscale");
    } else {
      $("body").addClass("grayscale");
    }
  });
  //Reseta o tamanho da fonte
  let originalFontSize = $('html').css('font-size');
  $("body").on("click", "#resetFont", () => {
    $('html').css('font-size', originalFontSize);
  });
  //Aumenta o Tamanho da Fonte
  $("body").on("click", "#increaseFont", () => {
    let currentFontSize = $('html').css('font-size');
    let currentFontSizeNum = parseFloat(currentFontSize, 10);
    let newFontSize = currentFontSizeNum*1.1;
    $('html').css('font-size', newFontSize);
    return false;
  });
  //Diminui o tamanho da fonte
  $("body").on("click", "#decreaseFont", () => {
    let currentFontSize = $('html').css('font-size');
    let currentFontSizeNum = parseFloat(currentFontSize, 10);
    let newFontSize = currentFontSizeNum*0.9;
    $('html').css('font-size', newFontSize);
    return false;
  });