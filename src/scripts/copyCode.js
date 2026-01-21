// src/scripts/copy-code.js

const copyButtonLabel = "Copy";
const codeBlocks = Array.from(document.querySelectorAll("pre"));

for (let codeBlock of codeBlocks) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";

    const copyButton = document.createElement("button");
    copyButton.className = "absolute top-2 right-2 text-xs rounded px-2 py-1 bg-bg-surface text-text-muted hover:bg-brand hover:text-bg-main transition-colors";
    copyButton.innerHTML = copyButtonLabel;

    codeBlock.setAttribute("tabindex", "0");
    codeBlock.appendChild(copyButton);

    copyButton.addEventListener("click", async () => {
        await copyCode(codeBlock, copyButton);
    });
}

async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    button.innerText = "Copied!";
    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 1500);
}