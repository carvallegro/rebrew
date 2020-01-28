export const getSpellLevelDisplayText = spellLevel => {
  switch (Number(spellLevel)) {
    case 0:
      return 'Cantrip'
    case 1:
      return '1st level'
    case 2:
      return '2nd level'
    case 3:
      return '3rd level'
    default:
      return `${spellLevel}th level`
  }
}
