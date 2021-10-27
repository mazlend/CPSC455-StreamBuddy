import React from "react";
import TextField from "@material-ui/core/TextField";

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
