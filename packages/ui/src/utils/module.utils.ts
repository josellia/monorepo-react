export function classMapStyles(classes: Object):string {
    return Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(' ');
  }