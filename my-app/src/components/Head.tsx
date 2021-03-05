import { UserInfo } from 'os';
import React from 'react';

type Props = {
    title: string;//required
    isActive?: boolean;//optional
    thing?: number;
    arrayOfString?: string[];
    status?: "loading" | "loaded";
    emptyObject?: {};
    object?: {
        name: string;
    };
    func?: () => void;
    // user?: User;
}

const Head = ({ title, isActive = true }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            {isActive && <h3>Active</h3>}
        </div>
    )
}

export default Head;