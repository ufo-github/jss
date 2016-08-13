export default () => rule => {
  if (!rule) console.trace('rule')
  const {type, style, options} = rule
  if (!style || type !== 'regular' || !style.animationName || !options.sheet) return

  const {animationName: name} = style
  // Rewrite a local ref.
  if (name[0] === '$') {
    const refRule = options.sheet.getRule(name.substr(1))
    if (refRule && refRule.type === 'keyframe') {
      style.animationName = refRule.id
    }
  }
}
