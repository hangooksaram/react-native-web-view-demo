const html = `<!DOCTYPE html>
 <html>
   <head><meta name="viewport" content="width=device-width, initial-scale=1"> </head>
   <body>
     <div>
        <div>This is from Native View</div>
        <ul id="native-view-data">
        </ul>
        <input type="text" id="native-data-input"/>
        <button id="btn">send to native app</button>
        
     </div>
     <script>
      const appendToWebViewEl=(text)=>{
        const el = document.createElement('li');
        el.innerText = text;
        document.getElementById("native-view-data").appendChild(el)
      }
       document.getElementById('btn').addEventListener('click', () => {
       const obj = {
         id: new Date().toISOString(),
         data : document.getElementById("native-data-input").value
       }
       const stringfiedMessage = JSON.stringify(obj)
       window.ReactNativeWebView.postMessage(stringfiedMessage);
       document.getElementById("native-data-input").value = "";
       });
     </script>
   </body>
 </html>`;

export default html;
