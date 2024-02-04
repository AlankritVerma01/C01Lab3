import './App.css'

const Note = ({ entry, editNote, deleteNote }) => {
    return (
        <div style={NodeStyle.note}>
            <p style={NodeStyle.text}>{entry.title}</p>
            <button onClick={() => editNote(entry)}>Edit Note</button>
            {<button onClick={() => deleteNote(entry)}>Delete Note</button>}
        </div>
    );
};

export default Note;

const NodeStyle = {
    note: {
        padding: "20px",
        margin: "20px",
        width: "200px",
        borderStyle: "dotted",
        borderRadius: "30px",
        borderWidth: "thin",
        overflowWrap: "break-word",
    },
    text: {
        margin: "0px",
    },
};