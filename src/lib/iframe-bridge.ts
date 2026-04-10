// Module-level iframe ref for sending messages to the doctalk iframe
let _iframe: HTMLIFrameElement | null = null

export function registerIframe(el: HTMLIFrameElement | null) {
  _iframe = el
}

export function sendToIframe(msg: object) {
  console.log('[iframe-bridge] sendToIframe:', (msg as any).type, 'iframe exists:', !!_iframe, 'contentWindow:', !!_iframe?.contentWindow)
  _iframe?.contentWindow?.postMessage(msg, '*')
}
