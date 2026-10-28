// Exemplo do disparo automático para o Telegram
async function enviarParaTelegram(produto) {
  const token = "SEU_BOT_TOKEN";
  const chat_id = "@nome_do_seu_canal"; // ou ID numérico do canal
  
  const legenda = `🔥 *${produto.titulo}*\n\n` +
                  `💰 Por apenas: *${produto.preco}*\n\n` +
                  `👉 [PEGAR OFERTA AQUI](${produto.linkAfiliado})`;

  await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chat_id,
      photo: produto.imagemUrl,
      caption: legenda,
      parse_mode: "Markdown"
    })
  });
}
