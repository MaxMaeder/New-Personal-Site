export class Lightboxer {
  #lightbox: HTMLElement;

  constructor() {
    const container = document.getElementById("lightbox");
    if (!container) throw new Error("Lightbox element not found on page!");

    this.#lightbox = container;

    container.addEventListener("click", () => {
      this.#lightbox.classList.remove("visible");
    });
  }

  showVideo(src: string) {
    this.#lightbox.classList.add("visible");

    const iframe = this.#lightbox.querySelector("iframe");
    if (iframe) iframe.src = src;
  }
}
