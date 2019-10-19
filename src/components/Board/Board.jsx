import React , {Fragment} from 'react'
/*
Criação da borda do tabuleiro, localização de X e O.
*/
import {connect} from 'react-redux'
import Square from './Square/Square.jsx'
import Summary from './Summary/Summary.jsx'
function Board(props){
    const {board} = props
   
    return(
        <Fragment>
             <div id="board" className="mt-4 d-flex flex-wrap">
            {
                /*
                  Posiciona X e O no tabuleiro
                */
                board.map((symbol,i)=><Square key={i} index={i} symbol={symbol} />)
            }
        </div>
        <Summary />
        </Fragment>
       
    )
    
}

export default connect(({board})=>({board}))(Board)