export const LOADING_MESSAGES = [
  "pretending to load...",
  "warming up pixels",
  "fetching good vibes",
  "almost there (probably)",
  "hang on a sec",
  "loading creativity",
  "making things pretty",
];

export const LOADING_DONE_MESSAGE = "ok, go.";

export function pickRandomLoadingMessage() {
  return LOADING_MESSAGES[
    Math.floor(Math.random() * LOADING_MESSAGES.length)
  ];
}
