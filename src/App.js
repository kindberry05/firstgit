import "./App.css";
import { signInWithGoogle } from "./firebaseConfig";

function App() {
  return (
    <>
      <h2>login2</h2>
      <button onClick={signInWithGoogle}>로그인</button>
    </>
  );
}

export default App;
