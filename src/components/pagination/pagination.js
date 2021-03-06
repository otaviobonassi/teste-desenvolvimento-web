import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


const Paginas = (props) => {
    return (
        <Pagination 
            className={props.className}
            count={props.totalPaginas} 
            size="small" 
            onChange={(evt, value) => props.mudarPagina(value)}
        />)
};

export default Paginas;