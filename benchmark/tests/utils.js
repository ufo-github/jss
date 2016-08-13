suite('Split vs. Regex for finding keyframes id', () => {
  const reg = / ([^ ]*)/g

  benchmark('regex', () => {
    '@keyframe a b c'.match(reg)[0]
  })

  benchmark('split', () => {
    '@keyframe a b c'.split(' ')[1]
  })
})
