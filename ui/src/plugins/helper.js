import { Editor } from "slate";

export const isHotKey = (event, editor) => {
    console.log(event);
    /*
    return {
        onKeyDown(event, editor, next) {
            console.log(event); 
            console.log("Hello");
            return next();
        }
    }
    */
} 

/**
 * Handles keydown events and applies formatting based on hotkeys.
 * 
 * @param {KeyboardEvent} event - The keyboard event triggered when a key is pressed.
 * @param {Editor} editor - The Slate editor instance.
 */
export const onKeyDown = (event, editor) => {
    console.log(event.key);
    console.log(event.ctrlKey);
    if(event.ctrlKey && event.key == 'b'){
        event.preventDefault();
        editor.addMark('bold', true);
    }
}

/**
 * Handles keydown events and applies formatting based on hotkeys.
 * 
 * @param {KeyboardEvent} event - The keyboard event triggered when a key is pressed.
 * @param {Editor} editor - The Slate editor instance.
 */
export const CustomEditor = {
    isBoldMarkActive (editor) {
        return Editor.marks(editor)?.bold;
    },

    toggleBoldMark (editor){
        let isActive = CustomEditor.isBoldMarkActive(editor); 
        if(isActive){
            console.log('trying to remove bold lol')
            editor.removeMark('bold');
        } else {
            editor.addMark('bold', true);
        } 
    }
}