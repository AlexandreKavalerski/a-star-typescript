import { operations } from './utils/operations';
import { State } from "./utils/state";
import { NodeInfo } from "./classes/Node";
import { generateNodeList, generateNode, readNode } from './functions/node';
import { areEqual, includes, isSolvable } from './functions/state';
import { Frontier } from './utils/frontier';

function AStar(initialState: State, finalState?: State){
    const goalState: State = finalState ? finalState : [[1,2,3],[4,5,6],[7, 8,0]];
    if(isSolvable(initialState)){
        const firstNode = generateNode(initialState, operations.none, goalState, 0);
        let frontier: Frontier = [firstNode];
        let expandedStates: State[] = [];
    
        const finalNode = runAStarLoop(goalState, frontier, expandedStates);
    }else{
        throw new Error('Initial state is not solvable');
    }
}

function runAStarLoop(goalState: State, frontier: NodeInfo[], expandedStates: State[]){
    let actualNode = frontier.shift();
    if(actualNode){
        while(!areEqual(actualNode.state, goalState)){
            const children = generateNodeList(actualNode, goalState);
            for (let c of children){
                if(!includes(c.state, expandedStates)){ //Only add to frontier states not openned yet
                    if(isSolvable(c.state)){ //Only add to frontier solvable states
                        frontier.push(c);
                    }
                    expandedStates.push(actualNode.state);
                }
            }

            frontier.sort((a, b) => (a.evaluationFunctionValue.f < b.evaluationFunctionValue.f) ? -1 : ((a.evaluationFunctionValue.f === b.evaluationFunctionValue.f) ? ((a.evaluationFunctionValue.h < b.evaluationFunctionValue.h) ? -1 : 1): 1)); // Order frontier according to heuristic value of nodes       

            const aux = frontier.shift();
            if(aux){
                actualNode = aux;
            }else{
                throw new Error('Empty frontier');
            }
        }
        return actualNode;
    }
}