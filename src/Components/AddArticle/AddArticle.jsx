import React, { useState, useEffect } from "react";
import {
  AddArticleContainer,
  AddArticleWrapper,
  TextArea,
  TextAreaWrapper,
  TextField,
} from "./AddArticle.elements";
import { collection, getDoc, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const AddArticle = () => {
  const [inputs, setInputs] = useState({});
  const [articleId, setArticleId] = useState(0);
  var docId = articleId.articleNumber;
  var ctg = inputs.category;
  useEffect(() => {
    const getArticleId = async () => {
      const docRef = doc(db, "articleId", ctg + "_article_id");
      const docSnap = await getDoc(docRef);

      const id = docSnap.exists() ? docSnap.data() : null;

      if (id === null || id === undefined) return null;
      setArticleId(id);
    };

    getArticleId();
  });

  async function updateArticleId() {
    try {
      await setDoc(doc(db, "articleId", ctg + "_article_id"), {
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
        link: "/browsepage/" + ctg + "/articlePage/" + docId,
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
        <AddArticleWrapper>
          <form onSubmit={handleSubmit}>
            <select
              name="category"
              value={
                inputs.category
                  ? inputs.category
                  : (inputs.category = "q_misconception")
              }
              onChange={handleChange}
            >
              <option>q_misconception</option>
              <option>c_misconception</option>
              <option>p_misconception</option>
            </select>

            <TextField
              placeholder="Enter your heading:"
              type="text"
              name="heading"
              value={inputs.heading || ""}
              onChange={handleChange}
            />

            <TextField
              placeholder="Enter your author:"
              type="text"
              name="author"
              value={inputs.author || ""}
              onChange={handleChange}
            />

            <TextField
              placeholder="Enter your imgSrc:"
              type="text"
              name="imgSrc"
              value={inputs.imgSrc || ""}
              onChange={handleChange}
            />

            <TextField
              placeholder="Enter your date:"
              type="text"
              name="date"
              value={inputs.date || ""}
              onChange={handleChange}
            />
            <TextAreaWrapper>
              <TextArea
                placeholder="Enter your explanation for athiest"
                type="text"
                name="descA"
                value={inputs.descA || ""}
                onChange={handleChange}
              />
            </TextAreaWrapper> 

            <TextAreaWrapper>
              <TextArea
                placeholder="Enter your text for a Christian:"
                type="text"
                name="descC"
                value={inputs.descC || ""}
                onChange={handleChange}
              />
            </TextAreaWrapper>

            <TextAreaWrapper>
              <TextArea
                placeholder="Enter your text for a Pagan:"
                type="text"
                name="descP"
                value={inputs.descP || ""}
                onChange={handleChange}
              />
            </TextAreaWrapper>

            <input type="submit" />
          </form>
        </AddArticleWrapper>
      </AddArticleContainer>
    </>
  );
};

export default AddArticle;
