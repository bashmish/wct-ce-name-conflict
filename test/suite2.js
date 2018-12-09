describe('Suite 2', () => {
  it('registers same-name', () => {
    customElements.define('same-name', class extends HTMLElement {});
  });
  it('registers same-name again', () => {
    customElements.define('same-name', class extends HTMLElement {});
  });
});
