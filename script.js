function abrirWhatsapp() {
  const telefone = "5541991810217";
  const mensagem = "Olá, gostaria de falar com Adriana Mateus!";
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
