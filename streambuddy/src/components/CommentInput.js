import React from "react";
import TextField from "@material-ui/core/TextField";

// links for comment box
// https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box
// https://medium.com/codex/create-a-comment-box-and-comment-posting-function-using-react-js-c6004087118

function CommentInput() {
  return (
    <div>
      <p> Here will be a comment </p>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
      />
    </div>
  );
}

export default CommentInput;
