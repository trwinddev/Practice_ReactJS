import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      // const newState = JSON.parse(JSON.stringify(state));
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      // const newState = JSON.parse(JSON.stringify(state));
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};

const HackerNewsWithReducer = () => {
  const [state, dispatch] = React.useReducer(hackerNewsReducer, initialState);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    console.log("it's working");
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `The error ${error}`,
      });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  // const [hits, setHits] = useState([]);
  // const [query, setQuery] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [url, setUrl] = useState(
  //   `https://hn.algolia.com/api/v1/search?query=${query}`
  // );
  // const handleFetchData = useRef({});

  // handleFetchData.current = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(url);
  //     console.log(
  //       "🚀 ~ file: HackerNews.js ~ line 10 ~ handleFetchData ~ data",
  //       response
  //     );
  //     setHits(response.data?.hits || []);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     setErrorMessage(`The error occurred while fetching ${error}`);
  //   }
  // };

  // useEffect(() => {
  //   handleFetchData.current();
  // }, [url]);
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white rounded-lg shadow-md ">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          // onChange={handleUpdateQuery}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md"
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="my-5 text-red-400">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
