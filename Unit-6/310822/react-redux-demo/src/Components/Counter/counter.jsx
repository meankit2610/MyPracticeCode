import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../../Redux/Counter/action";

export const Counter = () => {
    const count = useSelector((state) => state.count.count)
    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch(increaseCount(2))
    }

    const handleDec = () => {
        dispatch(increaseCount(-2))
    }
    return (
        <div>
            <h2>

            Count :{count}
            </h2>
            <button onClick={handleInc}>INC</button>
            <button onClick={handleDec}>Dec</button>
        </div>
    )
}