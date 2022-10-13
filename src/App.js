// import { GlobalStyles } from "./GlobalStyles";
import "./App.css";
import Counter from "./components/counter/Counter";
import Header from "./components/Header";
import HackerNews from "./components/news/HackerNews";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
// import Card from "./components/card/Card";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
// import Card2 from "./components/card/Card2";
// import { ThemeProvider } from "styled-components";
// import CardTailWind from "./components/card/CardTailWind";
import Photos from "./components/photo/Photos";
import Timer from "./components/Timer";

// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };

function App() {
  return (
    <div>
      {/* 
    <ThemeProvider theme={theme}>
    </ThemeProvider> */}
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <CardList> */}
      {/* <CardTailWind primary></CardTailWind> */}
      {/* </CardList> */}
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      <HackerNewsWithReducer></HackerNewsWithReducer>
    </div>
  );
}

export default App;
