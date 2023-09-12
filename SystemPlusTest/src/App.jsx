import { useState } from "react";

import "./App.css";
import Comments from "./components/Comments";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Comments />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
