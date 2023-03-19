import { createSlice } from "@reduxjs/toolkit";
import { game } from "../config/game-service-config";
import { CellType } from "../model/CellType";
import GameRow from "../service/GameRow";

const initialState:{cells: CellType[] | string} = {
        cells: game.getInitialRow(),
}
const gameSlice = createSlice({
        initialState,
        reducers:{
        move: (state, date)=> {
                state.cells = game.move(date.payload);
        },
        reset:(state)=>{
                state.cells = game.getInitialRow();
        }
},
        name:"gameRowe"

})
export const gameActions = gameSlice.actions;
export const gameReducer = gameSlice.reducer;