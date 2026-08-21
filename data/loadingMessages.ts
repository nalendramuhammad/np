export const LOADING_MESSAGES = [
  "hello",
  "halo",
  "hola",
  "bonjour",
  "ciao",
  "guten tag",
  "olá",
  "你好",
  "こんにちは",
  "안녕하세요",
  "привет",
  "مرحبا",
  "नमस्ते",
  "สวัสดี",
  "xin chào",
  "merhaba",
];

export function getShuffledLoadingMessages() {
  const messages = [...LOADING_MESSAGES];

  for (let i = messages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [messages[i], messages[j]] = [messages[j], messages[i]];
  }

  return messages;
}
