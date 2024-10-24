import React, { useState, useEffect, useCallback } from 'react';

// Slate editor factory
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { CustomEditor, Hotkey, onKeyDown } from '../plugins/helper';



const SlateEditor = () => {
    const [editor] = useState(() => withReact(createEditor())); 
    const [hoveredLine, setHoveredLine] = useState(null);

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    })

    const renderElement = useCallback(props => {
        return (
            <Element {...props} setHoveredLine={setHoveredLine} />
        )
    })

    const initialValue = [
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]

    return (
        <Slate editor={editor} initialValue={initialValue}>
            <Editable 
                onKeyDown={(event) => {
                    if (!event.ctrlKey) return;
                    switch (event.key){
                        case 'b': {
                            event.preventDefault();
                            CustomEditor.toggleBoldMark(editor)
                            //CustomEditor.isBoldMarkActive(editor)
                        }
                    }
                }} 
                renderLeaf={renderLeaf}
            />
        </Slate>
    )
}

const Element = props => {
    return (
        <p {...props.attributes}>
            {props.children}
        </p>
    )
}

const Leaf = props => {
    return (
        <span
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal'}}
        >
            {props.children}
        </span>
    )
}

export default SlateEditor;