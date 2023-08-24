const REGEX = {
  NAME: /^[a-záéíóú\s-]+$/i,
};

export function validateDescription(description) {
  if (!REGEX.NAME.test(description)) return 'Sólo letras, espacios y guiones';

  if (description.includes('  ')) return 'No puede tener doble espacio';

  if (description.includes('--')) return 'No puede tener doble guión';

  const descriptionSplitted = description.split(' ');
  for (const word of descriptionSplitted) {
    if (word.startsWith('-') || word.endsWith('-'))
      return 'Uso de guiones incorrecto';
  }

  if (description.length < 2 || description.length > 30)
    return 'Longitud entre 2 y 50';
}
