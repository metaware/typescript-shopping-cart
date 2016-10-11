enum Size {
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge
}

interface Item {
  name: string,
  price: number,
  size?: Size
}

export { Item as Item }
export { Size as Size }