export const InitialState = {
    text: 'Initial label value.'
}

export const changeState = () => dispatch => {
    return dispatch({ type:'ChangeLabel', text: document.getElementById('inputTextbox').value })
}