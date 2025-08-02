// Botão flutuante do WhatsApp
const btn = document.createElement('a');
btn.href = "https://wa.me/5541991973847";
btn.target = "_blank";
btn.innerHTML = '<img src="assets/whatsapp-icon.svg" alt="WhatsApp">';
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.zIndex = "999";
btn.style.width = "60px";
btn.style.borderRadius = "50%";
btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
btn.style.transition = "transform 0.3s";
btn.onmouseover = () => btn.style.transform = "scale(1.1)";
btn.onmouseleave = () => btn.style.transform = "scale(1)";
document.body.appendChild(btn);
