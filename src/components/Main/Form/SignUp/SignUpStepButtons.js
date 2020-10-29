import React from 'react';
import Next from '../../../Button/OutlinePrimary';
import Cancel from '../../../Button/OutlineSecondary';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const SignUpStepButtons = ({index,changeIndex,onClose,submitForm}) => {
    return (
        <React.Fragment>
            <Determine 
            index={index} 
            changeIndex={changeIndex} 
            onClose={onClose}
            submitForm={submitForm}/>
        </React.Fragment>
    );
};

const Determine =({index,changeIndex,onClose,submitForm})=>{
    switch(index){
        case 0:
            return  <FirstStep
                    index={index} 
                    changeIndex={changeIndex} 
                    onClose={onClose}/>
        case 1:
            return  <SecondStep
                    index={index} 
                    changeIndex={changeIndex} 
                    onClose={onClose}/>
        case 2: 
            return  <ThirdStep
                    index={index} 
                    changeIndex={changeIndex} 
                    onClose={onClose}/>
        case 3:
            return  <FourthStep
                    index={index} 
                    changeIndex={changeIndex} 
                    submitForm={submitForm}/>
        default:
            return 'No Such Step';
    }
}

const FirstStep =({index,changeIndex,onClose})=>{
    return(
        <ButtonGroup
        style={{float:'right'}}>
            <Next title='Next' onClick={()=>{
                if(index < 3){
                    let next = index + 1;
                    changeIndex(next);
                }}}/>
            <Cancel title='Cancel' onClick={onClose}/>
        </ButtonGroup>
    );
}

const SecondStep =({index,changeIndex,onClose})=>{
    return(
        <ButtonGroup
        style={{float:'right'}}>
            <Next title='Prev' onClick={()=>{
                if(index > 0){
                    let prev = index - 1;
                    changeIndex(prev);
                }}}/>
            <Next title='Next' onClick={()=>{
                if(index < 3){
                    let next = index + 1;
                    changeIndex(next);
                }}}/>
        </ButtonGroup>
    );
}

const ThirdStep =({index,changeIndex,onClose})=>{
    return(
        <ButtonGroup
        style={{float:'right'}}>
            <Next title='Prev' onClick={()=>{
                if(index > 0){
                    let prev = index - 1;
                    changeIndex(prev);
                }}}/>
            <Next title='Next' onClick={()=>{
                if(index < 3){
                    let next = index + 1;
                    changeIndex(next);
                }}}/>
        </ButtonGroup>
    );
}

const FourthStep =({index,changeIndex,submitForm})=>{
    return(
        <ButtonGroup
        style={{float:'right'}}>
            <Next title='Prev' onClick={()=>{
                if(index > 0){
                    let prev = index - 1;
                    changeIndex(prev);
                }}}/>
            <Next title='Submit' onClick={submitForm}/>
        </ButtonGroup>
    );
}

export default SignUpStepButtons;