// In our architecture we have 3 parts
// 1. The Figma sandbox where we has access to the scene and native Figma API (code.ts)
// 2. The Figma Iframe where we can receive/post messages from React Iframe and Figma sandbox, this a bridge
// 3. The distant React Iframe where we handle all the interface

window.onmessage = async (event) => {
  // Messages coming from native part
  if (event.data.pluginMessage) {
    const frame = window.document.getElementById('root') as HTMLIFrameElement;
    frame.contentWindow.postMessage(
      { type: event.data.pluginMessage.type, data: { ...event.data.pluginMessage } },
      '*',
    );
    return;
  }

  // Messages coming from web part
  if (event.data.type) {
    parent.postMessage({ pluginMessage: { ...event.data } }, '*');
    return;
  }
};
