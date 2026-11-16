document.querySelectorAll(".copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const card = button.closest(".loader-card");
    const cssText = card.querySelector(".code-panel code").textContent;
    const oldLabel = button.textContent;

    try {
      await navigator.clipboard.writeText(cssText);
      button.textContent = "Copied!";
    } catch (error) {
      button.textContent = "Copy unavailable";
    }

    window.setTimeout(() => {
      button.textContent = oldLabel;
    }, 1300);
  });
});
