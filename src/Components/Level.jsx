import StartBlock from './Blocks/StartBlock';
import SpinnerBlock from './Blocks/SpinnerBlock';
import LimboBlock from './Blocks/LimboBlock';
import AxeBlock from './Blocks/AxeBlock';
import EndBlock from './Blocks/EndBlock';


const Level = ({count=5, types=[SpinnerBlock,LimboBlock,AxeBlock]}) => {
    return (
        <>
            <axesHelper args={[5]} />
            <StartBlock position={[0,0.1,0]}/>
            <SpinnerBlock position={[0,0.1,4]}/>
            <LimboBlock position={[0,0.1,8]}/>
            <AxeBlock position={[0,0.1,12]}/>
            <EndBlock position={[0,0.1,16]}/>
        </>
    );
};

export default Level;