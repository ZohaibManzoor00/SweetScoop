export const classNames = (...classes) => classes.filter(Boolean).join(" ")
export const nameFormatter = name => name[0].toUpperCase() + name.slice(1)