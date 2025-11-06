import { colorize } from "json-colorizer";

export function log(msg: string | object) {
  console.log(colorize(msg))
}

export {
  colorize
}
