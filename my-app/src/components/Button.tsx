import { type } from 'os'
import React from 'react'

type Props = {
    // onClick: Function or we can do like this
    // onClick(): string// a function get string inside that return string
    // onClick(): void; // void methode return nothing.
    // onClick(text: string): void;//method with params
    // onClick: (text: string) => void; //function with params
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    // children: string;
}

// export const Button = ({ onClick, children }: Props) => {
export const Button: React.FC<Props> = ({ onClick, children }) => {//Functional component or FC 

    return (
        // {/* <button onClick={() => onClick("inside component")} > */}
        <button onClick={onClick} >
            {children}
        </button>
    )
}
