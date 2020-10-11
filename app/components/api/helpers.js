
const categories = {
  15: 'A la une',
  2329: 'Actualités',
  24: 'Beauté',
  17: 'Economie',
  18: 'Faits-Divers',
  4: 'Foot',
  13: 'Insolite',
  20: 'Justice',
  21: 'Lutte',
  7: 'People-Buzz',
  2: 'Politique',
  23: 'Revue',
  6: 'Société',
  5:'vidéos'
}


export const getCategory = (id) => {
  if(categories[id]) return categories[id]
  return ('Général')
}
