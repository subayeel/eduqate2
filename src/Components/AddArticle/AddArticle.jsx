import React, { useState } from "react";
import { AddArticleContainer } from "./AddArticle.elements";
import { collection, addDoc,doc ,setDoc} from "firebase/firestore";
import { db } from "../../firebase-config";

const AddArticle = () => {
  const [inputs, setInputs] = useState({});
  
  async function addArticle() {
    try {
      await setDoc(doc(db, "q_misconception",'post1'), {
        id:inputs.id,
        heading: inputs.heading,
        author: inputs.author,
        date: inputs.date,
        descA: inputs.descA,
        descC: inputs.descC,
        descP: inputs.descP,
        imgSrc: inputs.imgSrc,
        link:inputs.link
      });
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addArticle()
    
  };
  return (
    <>
      <AddArticleContainer>
        <form onSubmit={handleSubmit}>
        <label>
            Enter your id:
            <input
              type="number"
              name="id"
              value={inputs.id || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your heading:
            <input
              type="text"
              name="heading"
              value={inputs.heading || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your author:
            <input
              type="text"
              name="author"
              value={inputs.author || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your imgSrc:
            <input
              type="text"
              name="imgSrc"
              value={inputs.imgSrc || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your date:
            <input
              type="text"
              name="date"
              value={inputs.date || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your descA:
            <input
              type="text"
              name="descA"
              value={inputs.descA || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your descC:
            <input
              type="text"
              name="descC"
              value={inputs.descC || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your descP:
            <input
              type="text"
              name="descP"
              value={inputs.descP || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your link:
            <input
              type="text"
              name="link"
              value={inputs.link || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </AddArticleContainer>
    </>
  );
};

export default AddArticle;
