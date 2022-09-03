import React, { useState, useEffect } from "react";
import { AddArticleContainer } from "./AddArticle.elements";
import { collection, getDoc, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const AddArticle = () => {
  const [inputs, setInputs] = useState({});
  const [articleId, setArticleId] = useState(0);
  var docId = articleId.articleNumber;
  var ctg = inputs.category;
  useEffect(() => {
    const getArticleId = async () => {
      const docRef = doc(db, "articleId", ctg+"_article_id");
      const docSnap = await getDoc(docRef);

      const id = docSnap.exists() ? docSnap.data() : null;

      if (id === null || id === undefined) return null;
      setArticleId(id);
    };

    getArticleId();
  });

  async function updateArticleId() {
    try {
      await setDoc(doc(db, "articleId", ctg+"_article_id"), {
        articleNumber: docId + 1,
      });
      console.log("article id updated to: " + (docId + 1));
    } catch (e) {
      console.error("Error updating id: ", e);
    }
  }
  async function addArticle() {
    try {
      await setDoc(doc(db, inputs.category, docId.toString()), {
        id: docId,
        heading: inputs.heading,
        author: inputs.author,
        date: inputs.date,
        descA: inputs.descA,
        descC: inputs.descC,
        descP: inputs.descP,
        imgSrc: inputs.imgSrc,
        link: "/browsepage/"+ctg+"/articlePage/" + docId,
      });
      console.log("Document written with ID: " + docId);
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

    addArticle();
    updateArticleId();
    
  };
  return (
    <>
      <AddArticleContainer>
        <form onSubmit={handleSubmit}>
          <select
            name="category"
            value={inputs.category ? inputs.category : inputs.category='q_misconception'}
            onChange={handleChange}
          >
            <option>q_misconception</option>
            <option>c_misconception</option>
            <option>p_misconception</option>
          </select>
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

          <input type="submit" />
        </form>
      </AddArticleContainer>
    </>
  );
};

export default AddArticle;
