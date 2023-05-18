import './App.css';
import db from "./firebase";
import { useState,useEffect } from "react";
import { doc, collection, getDocs, onSnapshot, addDoc } from "firebase/firestore";

function sendD(){

    try{
        const postData = collection(db, "posts");
        addDoc(collection(db, "posts"),{
            title: "test",
            text: "u-hu",
            num: 2
        }
        );
        console.log("completed");
    }
    catch(e){
        console.log(e);
    }
    
}

function App() {
  //データ箱用意
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    //データ取得
    //クソでか入れ子状態
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      //データベース引っ張りテスト
      //console.log(snapShot.docs.map((doc) => ({...doc.data()})));
      setPosts(snapShot.docs.map((doc) => ({...doc.data()})));
    });

    onSnapshot(postData,(post) => {
      setPosts(post.docs.map((doc) => ({...doc.data()})));
    })

  },[]
  );

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.title}>
          <h2>{post.title}</h2>
        </div>
      ))}
      <button onClick={sendD}>test</button>
    </div>
  );
}

export default App;
