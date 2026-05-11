import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Мемориал",
  description: "Мемориал павших во время расстрелов 11.05.2026-Н.В.",
  prerender: true,

  extends: [vikeReact],
} satisfies Config;
