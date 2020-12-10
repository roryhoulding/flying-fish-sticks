const getClassStr = (classNames) => {
  return classNames
    .filter(className => className != null)
    .join(' ')
}

export default getClassStr