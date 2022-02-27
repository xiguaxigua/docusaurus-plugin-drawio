function escapeHTML(value: string) {
  if (typeof value !== 'string') {
    return value
  }
  return value.replace(/[&'`"<>]/g, function (match) {
    return {
      '&': '&amp;',
      "'": '&#x27;',
      '`': '&#x60;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;',
    }[match]
  })
}

export { escapeHTML }
