import StartBlock from './Blocks/StartBlock';
import SpinnerBlock from './Blocks/SpinnerBlock';
const Level = () => {
    return (
        <>
            <axesHelper args={[5]} />
            <StartBlock position={[0,0.1,4]}/>
            <SpinnerBlock position={[0,0.1,0]}/>
        </>
    );
};

export default Level;
