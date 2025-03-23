import StartBlock from './Blocks/StartBlock';
import SpinnerBlock from './Blocks/SpinnerBlock';
import LimboBlock from './Blocks/LimboBlock';
const Level = () => {
    return (
        <>
            <axesHelper args={[5]} />
            <StartBlock position={[0,0.1,0]}/>
            <SpinnerBlock position={[0,0.1,4]}/>
            <LimboBlock position={[0,0.1,8]}/>

        </>
    );
};

export default Level;