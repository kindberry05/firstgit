import "./App.css";
import { signInWithGoogle } from "./firebaseConfig";

function App() {
  return (
    <>
      <h2>login</h2>
      <button onClick={signInWithGoogle}>로그인</button>
    </>
  );
}

export default App;
