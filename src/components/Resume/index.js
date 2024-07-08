import React from 'react';
import * as C from './styles';
import ResumeItem from '../ResumeItem';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa";

function Resume({income, expense, total}) {
  return(
    <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleDown} value={income}/>
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleUp} value={expense}/>
        <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </C.Container>
  )
}

export default Resume;