import { define as defineBase } from 'remount'

const define = (components, defaults = {}) => {
  return defineBase(components, {
    adapter: Adapter,
    ...defaults
  })
}

const Adapter = {
  mount({ component }, mountPoint, props) {
    // This function will be called on the first appearance of the custom
    // element.
    component.embed(mountPoint, props)
  },
  update({ component }, mountPoint, props) {
    // This function will be called on any subsequent updates afterwards (ie,
    // if attributes were changed).
  },
  unmount({ component }, mountPoint) {
    // This function will be called when a custom element is removed from the
    // DOM (eg, `parent.removeChild()`).
  }
}

export { define, Adapter }
