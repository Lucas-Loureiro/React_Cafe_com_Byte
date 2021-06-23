import {
HamburguerContainer,
Icon,
CloseIcon,
HamburguerMenu,
HamburguerLink,
} from './style'

const HamburguerNav = ({ isOpen, toggle }) => {
    
    return (
        <HamburguerContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <HamburguerMenu>
                <HamburguerLink to="/">Colocar map</HamburguerLink>
            </HamburguerMenu>
        </HamburguerContainer>
    );
};

export default HamburguerNav;