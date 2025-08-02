const descricoes = {
  paralelo: "Blocos rústicos conhecidos como paralelo, ideais para calçadas, passarelas e áreas urbanas. Alta resistência e estilo clássico.",
  paver: "Piso intertravado de concreto (Paver), perfeito para calçadas, garagens e áreas externas, com excelente durabilidade e manutenção prática.",
  ceramicas: "Cerâmicas adequadas para ambientes internos e externos, com acabamento refinado e grande variedade de modelos.",
  pisos: "Serviço de instalação de diversos tipos de piso, com nivelamento preciso e acabamento profissional.",
  porcelanato: "Porcelanato de alta resistência e acabamento sofisticado, ideal para residências e comércios exigentes."
};

function mostrarDescricao(servico) {
  const container = document.getElementById("descricao-servico");
  container.style.display = "block";
  container.innerHTML = `
    <p>${descricoes[servico]}</p>
    <a href="https://wa.me/5541991973847" class="btn">Solicitar Orçamento</a>
  `;
}
