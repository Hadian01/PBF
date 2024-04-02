import React, { useContext } from 'react';
import { LevelContext } from '@/app/utilities/context/mycontext';

export default function Section({ children }: { children: any }) {
    const level = useContext(LevelContext);
    return (
        <section className="section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>  
    );
}
