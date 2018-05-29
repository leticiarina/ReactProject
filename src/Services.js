import React from 'react';
import petShelter from './img/pet-shelter.svg'
import petsBath from './img/pets-bath.svg';
import petTrimmer from './img/pet-trimmer.svg';
import stethoscope from './img/stethoscope.svg';
import dogToy from './img/dog-toy.svg';

function Services(){
  return(
    <div>
      <main class="bd-masthead intro" id="content" role="main">
        <div class="container">
          <div class="row align-items-center">
            <div class="col p-2 p-md-5">
              <img class="img-fluid" src={petShelter}/>
            </div>
            <div class="col p-2 p-md-5">
              <h1>Pet Shop</h1>
              <p class="lead">
                Pensando no que ele precisa e tantos outros cachorrinhos e gatinhos, a loja foi projetada para atender as necessidades desses queridos peludos e peludinhos.
              </p>
              <p>  
                A satisfação da loja é oferecer produtos de ótima qualidade que atenda desde os mimos até as necessidades mais importante de nossos pets.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div class="row masthead-followup row m-0 border border-white">
        <div class="col p-3 p-md-5 bg-light-green  border border-white">
          <img src={petsBath} class="icon"/>
          <h3>Banho</h3>
          <p>Em um ambiente climatizado e higienizado, nossos profissionais dedicam toda atenção aos animais a fim de fazer do banho uma experiência divertida.</p>
          <hr class="half-rule"/>
          <a class="btn btn-outline-primary" href="#">Saiba Mais</a>
        </div>

        <div class="col p-3 p-md-5 bg-light-green  border border-white">
          <img src={petTrimmer} class="icon"/>
          <h3>Tosa</h3>
          <p>Nossos profissionais são aptos a realizar tosas na máquina e tesoura para todas as raças.</p>
          <hr class="half-rule"/>
          <a class="btn btn-outline-primary" href="#">Saiba Mais</a>
        </div>

        <div class="col p-3 p-md-5 bg-light-green border border-white">
          <img src={stethoscope} class="icon"/>
          <h3>Atendimento Médico</h3>
          <p>Trabalhamos para a promoção de bem-estar e manutenção da qualidade de vida dos animais de estimação,  bem como proporcionar conforto e comodidade para o proprietário.</p>
          <hr class="half-rule"/>
          <a class="btn btn-outline-primary" href="#">Saiba Mais</a>
        </div>
        
        <div class="col p-3 p-md-5 bg-light-green border border-white">
          <img src={dogToy} class="icon"/>
          <h3>Produtos</h3>
          <p>Assim como gostamos quando nos mimam, porque não mimar o animalzinho que amamos? Produtos para pet shop você encontra aqui.</p>
          <hr class="half-rule"/>
          <a class="btn btn-outline-primary" href="#">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
}

export default Services;
