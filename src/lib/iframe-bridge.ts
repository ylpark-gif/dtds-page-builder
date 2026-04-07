// Module-level iframe ref for sending messages to the doctalk iframe
let _iframe: HTMLIFrameElement | null = null

export function registerIframe(el: HTMLIFrameElement | null) {
  _iframe = el
}

export function sendToIframe(msg: object) {
  _iframe?.contentWindow?.postMessage(msg, '*')
}
