// funcion que trae cosas del selector
// visualizaciones del state. se puede modificar el state...



export const selectCount = (state: { count: number }) => {
    return state.count
}

export const selectCheckCartItems = (state: { count: number }) => {
    return state.count && state.count > 0 ? true : false
}