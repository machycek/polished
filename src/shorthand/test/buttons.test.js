import buttons from '../buttons'

describe('buttons', function() {
  // Single States
  it('populates all base button selectors', function() {
    expect({[buttons()]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates all active button selectors', function() {
    expect({[buttons('active')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates all focus button selectors', function() {
    expect({[buttons('focus')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates all hover button selectors', function() {
    expect({[buttons('hover')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('throws an error when passed a state it does not recognize', function() {
    expect(
      function () { return {[buttons('clicked')]: {'border-color': 'black'}} }
    ).toThrow('buttons only accepts the following state: "active", "focus", or "hover". You can also pass no state at all.')
  })

  // Multiple States
  it('populates button selectors for two states', function() {
    expect({[buttons('active', 'hover')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('populates both base button selectors and button selectors with a state', function() {
    expect({[buttons(null, 'hover')]: {'border-color': 'black'}}).toMatchSnapshot()
  })
  it('throws an error when one of multiple states is not recognized', function() {
    expect(
      function () { return {[buttons('hover', 'clicked')]: {'border-color': 'black'}} }
    ).toThrow('buttons only accepts the following state: "active", "focus", or "hover". You can also pass no state at all.')
  })

})
