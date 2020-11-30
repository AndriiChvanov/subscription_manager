import React from 'react';
import './GuideLine.css'
import {UiButton} from "@components/ui/UiButton";

export function GuideLine() {
    return (
        <div>
            <h1>GuideLine Page</h1>
            <div className="Guideline-section">
                <h2>Button Examples</h2>
                <UiButton type="primary">Example</UiButton>
            </div>
        </div>
    )
}
