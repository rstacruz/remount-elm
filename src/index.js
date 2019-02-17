import { define as defineBase } from 'remount'

const define = (components, defaults = {}) => {
  return defineBase(components, {
    adapter: Adapter,
    ...defaults
  })
}

const Adapter = {
  mount(spec, mountPoint, props) {
    // This function will be called on the first appearance of the custom
    // element.
    const { component } = spec
    const app = component.init({ node: mountPoint, flags: props })

    // Store the Elm instance so we can communicate with the ports later
    mountPoint._elmApp = app
  },

  update({ component }, mountPoint, props) {
    // This function will be called on any subsequent updates afterwards (ie,
    // if attributes were changed).
    // TODO: ports
    // https://guide.elm-lang.org/interop/ports.html
    // mountPoint._elmApp.ports[propKey].send(propValue)
  },

  unmount({ component }, mountPoint) {
    // This function will be called when a custom element is removed from the
    // DOM (eg, `parent.removeChild()`).
  }
}

export { define, Adapter }
