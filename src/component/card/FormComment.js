import { useMutation, gql } from "@apollo/client";
import React, { useState, useEffect } from "react";

export default function FormComment({ getData, clothesId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [insertData, { loading, error, data }] = useMutation(gql`
    mutation MyMutation($clothesId: Int!, $comment: String, $name: String) {
      insert_clothes_comment_one(
        object: { clothes_id: $clothesId, comment: $comment, name: $name }
      ) {
        id
      }
    }
  `);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    (async () => {
      e.preventDefault();
      await insertData({
        variables: {
          clothesId: clothesId,
          comment: comment,
          name: name,
        },
      });
      window.location.reload(false);
    })();
  };

  useEffect(() => {
    if (loading || error) return;
  }, [loading, error, data]);

  return (
    <div>
      <form>
        <label>Nama: </label>
        <input onChange={handleNameChange} value={name}></input>
        <label>Komentar: </label>
        <input onChange={handleCommentChange} value={comment}></input>
        <button onClick={handleSubmit}>tambah komentar</button>
      </form>
    </div>
  );
}
