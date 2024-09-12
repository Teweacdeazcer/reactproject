import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 80,
        height: 100,
        borderRadius: 25
    },
    contentContainer:{
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontsize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontsize: 16,
    },
};

function Comment(props){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img style={styles.image}
                src="https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png"
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;