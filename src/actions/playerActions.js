import {PLAYER_X,TURN,PLAYER_O}from '../helpers/actionTypes'

/*Retorma do player X*/
export function selectPlayerAction(player){
    return {
        type:PLAYER_X,
        player
    }

}
/*Retorna o player O*/
export function selectOPlayerAction(player){
    return{
        type:PLAYER_O,
        player
    }
}

export function toggleturnAction(){
    return{
        type:TURN
    }
    
}