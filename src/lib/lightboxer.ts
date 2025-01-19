export class Lightboxer {
  #lightbox: HTMLElement;

  constructor() {
    const container = document.getElementById("lightbox");
    if (!container) throw new Error("Lightbox element not found on page!");

    this.#lightbox = container;

    container.addEventListener("click", () => {
      this.#lightbox.classList.remove("visible");
      document.body.classList.remove("stop-scroll");
    });
  }

  showVideo(src: string) {
    this.#lightbox.classList.add("visible");
    document.body.classList.add("stop-scroll");

    const iframe = this.#lightbox.querySelector("iframe");
    if (iframe) iframe.src = src;
  }
}
