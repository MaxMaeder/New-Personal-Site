export class Lightboxer {
  #lightbox: HTMLElement;

  constructor() {
    const container = document.getElementById("lightbox");
    if (!container) throw new Error("Lightbox element not found on page!");

    this.#lightbox = container;

    container.addEventListener("click", () => this.hideEmbed());
  }

  showEmbed(src: string) {
    this.#lightbox.classList.add("visible");
    document.body.classList.add("stop-scroll");

    const iframe = document.createElement("iframe");
    this.#lightbox.appendChild(iframe);
    iframe.src = src;
  }

  hideEmbed() {
    this.#lightbox.classList.remove("visible");
    document.body.classList.remove("stop-scroll");
    this.#lightbox.querySelector("iframe")?.remove();
  }
}
