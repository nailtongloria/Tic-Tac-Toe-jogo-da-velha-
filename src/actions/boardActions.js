import {DRAW_X,DRAW_O} from '../helpers/actionTypes'

/*
Desenha o X na célula do tabuleiro
*/
export function drawXAction(cellIndex){
    return (dispatch)=>{
        return new Promise(resolve =>{
            dispatch({
                type: DRAW_X,
                cellIndex
            })
            resolve()
        })
    }
}
/*
Desenha o O na célula do tabuleiro
*/
export function drawOAction(cellIndex){
    return (dispatch)=>{
        return new Promise(resolve =>{
            dispatch({
                type: DRAW_O,
                cellIndex
            })
            resolve()
        })
    }

}