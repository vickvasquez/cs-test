const upQuanty = (state, action) => {
    const id =  action.payload ? action.payload.id : action.id
    return state.map(prod => ((prod.id === id) ?
        {
            ...prod,
            cantidad: prod.cantidad + 1,
        } :
        prod))
}

export default upQuanty
