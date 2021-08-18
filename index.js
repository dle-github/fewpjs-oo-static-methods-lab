class Formatter {
  //add static methods here
  static capitalize(s){
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  static sanitize(s){
    const newStr = s.replace(/[^a-zA-Z0-9_ '-]/g, "");
    return newStr
  }
  static titleize(s){
    let filterList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let originalStr = s.split(' ')
    let filteredWords = originalStr.filter(val => !filterList.includes(val))
    let capitalizedWords = filteredWords.map(x => this.capitalize(x))

    for (let i = 0; i < capitalizedWords.length; i++){
      originalStr.forEach(function(w, x) { if (w == capitalizedWords[i].toLowerCase()) originalStr[x] = capitalizedWords[i]; })
    }
    return this.capitalize(originalStr.join(' '))
  }
}