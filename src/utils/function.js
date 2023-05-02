export const onChangeText = (setState) => (e) => {
    setState(e.target.value)
}

export const onChangeFile = (setState) => (e) => {
    if (e.target.files) {
        setState(e.target.files[0])
    }
}

export const onChangeData = (name, setState) => (e) => {
    setState((prevData) => ({
        ...prevData,
        [name]: e.target.value
    }))
}