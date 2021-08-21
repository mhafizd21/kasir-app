export const addCart = id => {
  return {
    type: "ADD_TO_CART",
    payload: id
  }
}

export const incCart = id => {
  return {
    type: "INC_CART",
    payload: id
  }
}

export const decCart = id => {
  return {
    type: "DEC_CART",
    payload: id
  }
}

export const removeCart = id => {
  return {
    type: "REMOVE_CART",
    payload: id
  }
}
export const resetCart = () => {
  return {
    type: "RESET_CART"
  }
}