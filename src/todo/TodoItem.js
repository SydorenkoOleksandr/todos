import React from 'react'
import PropTypes from 'prop-types'


const styles ={
    li:{
        display: 'flex',
        justifyContent:'space-between',  // расположение
        alignItems: 'center',             // выровнять итемы 
        padding: '.5rem 1rem',
        border: '1px solid grey',
        borderRadius: '4px',
        marginBottom:'.5rem'
    },
    input:{
        marginRight:'1rem'
    },
  
    btn:{
        backgroundColor:'red',
        borderRadius: '30%',
        color: '#ff0',
        border:'none'
    }

}
 function TodoItem({ todo, index }){
    index = +index+1     
    return( 
    <li style ={styles.li}>
        <span>
            <input type="checkbox" style ={styles.input} />
            <strong style ={styles.strong}>{ index }&nbsp;</strong>
            {todo.title}
        </span>
        <button style ={styles.btn} >&times;</button>
      
        
    </li>
    )
}

TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}



export default TodoItem