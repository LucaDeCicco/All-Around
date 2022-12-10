import React from 'react';
import '../../../node_modules/animate.css/animate.css';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const BounceAnimation = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class HelloDariana extends React.Component {
    render() {
        return (<div style={{textAlign:"center", marginTop:"15em"}}>
                <BounceAnimation>
                    <h1 className="animated bounceInLeft fadeInRight">Dariana</h1>
                </BounceAnimation>
        </div>

        );
    }
}

export default HelloDariana;
