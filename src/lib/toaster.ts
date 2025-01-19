class Toaster {
  #toast: HTMLElement;
  #timeoutId: number = 0;

  constructor() {
    const element = document.getElementById("toast");
    if (!element) throw new Error("Toast element not found on page!");

    this.#toast = element;
  }

  showMessage(message: string) {
    this.#toast.classList.add("visible");
    this.#toast.innerText = message;

    clearTimeout(this.#timeoutId);
    setTimeout(() => {
      this.#toast.classList.remove("visible");
    }, 2000);
  }
}

export { Toaster };
