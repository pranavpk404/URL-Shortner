document.getElementById("btn").addEventListener("click", shortLink);

async function shortLink() {
  try {
    let longUrl = document.getElementById("input").value;
    let resp = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const respData = await resp.json();
    longUrl.innerText = "";
    addToDOM(respData.result);
  } catch (error) {
    alert("Not Valid");
    console.log(error);
  }
}
function addToDOM(data) {
  let html = `
  <li id="shortLink">
  <span id="newurl">${data.short_link}</span>
   <button id="copyBtn" onclick="copyToClipboard()">Copy</button>
  <small>${data.original_link}</small>
</li>
  `;
  document.getElementById("linkList").innerHTML = html;
}
function copyToClipboard() {
  const cb = navigator.clipboard;
  const paragraph = document.querySelector("#newurl");
  cb.writeText(paragraph.innerText).then(() => alert("Text copied"));
}
