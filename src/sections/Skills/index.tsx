
import { iconTecArray } from "../../assets/Data/images";

import SliderImg from "../../components/SliderImg";

import * as S from './styles'

export default function Skills() {

    return (
        <S.SecondContainer>
            <SliderImg iconTecArray={iconTecArray} />
        </S.SecondContainer>
    );
};