# wct-ce-name-conflict

This is a live demo showing that the [WCT](https://github.com/Polymer/tools/tree/master/packages/web-component-tester) only runs different suites in iframes, which apparently does not prevent Custom Element name conflicts between individual tests within the same suite.

```sh
bower install
polymer serve
# open tests
# http://127.0.0.1:8081/components/wct-ce-name-conflict/test/
```

You'll see the result of these 2 suites:

```js
// suite1.html
describe('Suite 1', () => {
  it('registers same-name', () => {
    customElements.define('same-name', class extends HTMLElement {});
  });
  it('registers same-name again', () => {
    customElements.define('same-name', class extends HTMLElement {});
  });
});

// suite2.html
describe('Suite 2', () => {
  it('registers same-name', () => {
    customElements.define('same-name', class extends HTMLElement {});
  });
  it('registers same-name again', () => {
    customElements.define('same-name', class extends HTMLElement {});
  });
});

```

With these errors:

```
suite1.html
  Suite 1
    ✅ registers same-name
    ❌ registers same-name again
      Error: Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry
        Context.it at suite1.js:6

suite2.html
  Suite 2
    ✅ registers same-name
    ❌ registers same-name again
      Error: Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry
        Context.it at suite2.js:6
```
