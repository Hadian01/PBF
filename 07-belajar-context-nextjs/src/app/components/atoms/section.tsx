import React from 'react';
import { LevelContext } from '@/app/utilities/context/mycontext'

export default function Section({ level, children }: { level: number, children: any }) {
    return (
        <section className="section">
            {LevelContext ? ( // Check if LevelContext is defined before using it
                <LevelContext.Provider value={level}>
                    {children}
                </LevelContext.Provider>
            ) : (
                // Render alternative content or handle the case when LevelContext is undefined
                <div>Context is not available</div>
            )}
        </section>
    );
}
