// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Teste from './components/teste'

function App() {
  $("body").on("click", "#contraste", () => {  
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
  return (
  <>
      <div class="jumbotron">
        <div class="container">
          <h2>Botões de Acessibilidade</h2>
        </div>
      </div>
    <div class="container py-2">
        <div class="row">
          <div class="col-md-12">
            <button class="btn btn-primary" id="contraste">Auto Contraste</button>
            <button class="btn btn-primary" id="grayescale">Escala de Cinza</button>
            <button class="btn btn-primary" id="increaseFont">A+</button>
            <button class="btn btn-primary" id="decreaseFont">A-</button>
            <button class="btn btn-primary" id="resetFont">A</button>

            <p class="mt-2">Olá mundo</p>
            <img src="https://dominik.com.br/media/catalog/product/cache/d10099810bcac7f0abdd8e42c1022f22/p/a/parafusadeira_furadeira_impacto_gsb_18v_50_bateria_bosch_511166_02_1.png" style={{width: '200px'}} />
          </div>
        </div>
      </div>
      <div>
      <Teste/>
      </div>
      </>
  );
}
 

export default App;
