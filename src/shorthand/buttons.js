// @flow
const stateMap = [undefined, null, 'active', 'focus', 'hover']

function generateButtons(state: ?string) {
  const stateSuffix = state ? `:${state}` : ''
  return `
    button${stateSuffix},
    input[type="button"]${stateSuffix},
    input[type="reset"]${stateSuffix},
    input[type="submit"]${stateSuffix}`
}

type State =
  | typeof(undefined)
  | null
  | 'active'
  | 'focus'
  | 'hover';

function buttons(...states: Array<State>) {
  if (states.length === 0) return generateButtons()
  const selectors = []
  for (let i = 0; i < states.length; i += 1) {
    if (!stateMap.includes(states[i])) throw new Error('buttons only accepts the following state: "active", "focus", or "hover". You can also pass no state at all.')
    selectors.push(generateButtons(states[i]))
  }
  return selectors.join(',')
}

export default buttons
