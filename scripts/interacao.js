const descricoes = {
  paver: "Piso intertravado de concreto ideal para calçadas, garagens e áreas externas. Alta resistência e fácil manutenção.",
  paralelo: "Blocos rústicos para paisagismo e urbanismo com visual tradicional e excelente durabilidade.",
  ceramicas: "Revestimentos versáteis para ambientes internos e externos com acabamento refinado.",
  pisos: "Instalação de diversos tipos de pisos com qualidade, nivelamento e resistência.",
  porcelanato: "Alta resistência e acabamento sofisticado para áreas internas. Ideal para residências e comércios."
};

function mostrarDescricao(servico) {
  const container = document.getElementById("descricao-servico");
  container.style.display = "block";
  container.innerHTML = `
    <p>${descricoes[servico]}</p>
    <a href="https://wa.me/5541991973847" class="btn">Solicitar orçamento</a>
  `;
}
