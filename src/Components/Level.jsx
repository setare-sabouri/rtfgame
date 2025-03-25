import StartBlock from './Blocks/StartBlock';
import SpinnerBlock from './Blocks/SpinnerBlock';
import LimboBlock from './Blocks/LimboBlock';
import AxeBlock from './Blocks/AxeBlock';
import EndBlock from './Blocks/EndBlock';
import { useMemo } from 'react';
import Walls from './Walls';

const Level = ({count=5, types=[SpinnerBlock,LimboBlock,AxeBlock]}) => {

const blocks= useMemo(()=>{
    const blocks =[]

    for(let i=0;i<count;i++){
        const RandomBlock = types[Math.floor(Math.random()*types.length)]
        blocks.push(RandomBlock)
    }
    return blocks
},[count,types])

    console.log(count)
    return (
        <>
            <axesHelper args={[5]} />
            <StartBlock position={[0,0.1,0]}/>
            {
                blocks.map((Block,index)=>{
                    return <Block position={[0,0.1,(index+1)*4]}/>
                })
            }
            <EndBlock position={[0,0.1,(count+1)*4]}/>
            <Walls length={count+2} position={[2.15,0.75,(count*2)+2]}/> //right
            <Walls length={count+2} position={[-2.15,0.75,(count*2)+2]}/> //left
            <Walls length={1} position={[0,0.75,(count+1.5)*4]} scale={[4 ,1.5,0.3]}/> //back

        </>
    );
};

export default Level;