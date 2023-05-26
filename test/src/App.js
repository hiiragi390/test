import './App.css';
import db from "./firebase";
import { useState,useEffect } from "react";
import { doc, collection, getDocs, onSnapshot, addDoc } from "firebase/firestore";
import { QFormat, InitialX } from './QFormat';

function sendD(){

    try{
        const postData = collection(db, "posts");
        addDoc(collection(db, "posts"),{
            title: "test",
            text: Math.floor(InitialX).toString(),
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
          <h2>{post.text}</h2>
        </div>
      ))}
      <div className="canvasWarp">
        <QFormat />
        <div className="backCanvas"></div>
      </div>
      
      <button onClick={sendD}>test</button>
    </div>
  );
}

export default App;
