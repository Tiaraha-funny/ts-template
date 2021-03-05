import React, { useRef, useState } from 'react'

export const Input = () => {
 
    // const [name, setName] = useState<string>("");
    const [name, setName] = useState("");
    // const [name, setName] = useState<string | null>(null);

    // const ref = useRef(null);
    const ref = useRef<HTMLInputElement>(null);
    // console.log("ref",ref, ref.current); // you can not get value here unless you have the htmlInputElement and mak a condition        
    
    console.log("ref", ref?.current?.value);

    if(ref && ref.current) {
        console.log("ref",ref, ref.current.value);
    }

    return (
        <div>
            <input ref={ref} onChange={e => setName(e.target.value)} value={name} />
        </div>
    )
}
