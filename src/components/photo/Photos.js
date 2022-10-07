import React, { useEffect, useState } from "react";
import axios from "axios";
// const getRandomPhotos = (page) => {
//   return axios
//     .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
//     .then((response) => {
//       console.log(response);
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
// const Photos = () => {
//   const [randomPhotos, setRandomPhotos] = useState([]);
//   const [nextPage, setNextPage] = useState(1);
//   const handleLoadMore = () => {
//     getRandomPhotos(nextPage).then((images) => {
//       const newPhotos = [...randomPhotos, ...images];
//       setRandomPhotos(newPhotos);
//       setNextPage(nextPage + 1);
//     });
//   };
//   useEffect(() => {
//     handleLoadMore();
//   }, []);
//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-5 p-5">
//         {randomPhotos.length > 0 &&
//           randomPhotos.map((item, index) => (
//             <div
//               key={item.id}
//               className="p-3 bg-white shadow-md rounded-lg h-[200px]"
//             >
//               <img
//                 src={item.download_url}
//                 alt={item.author}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           ))}
//       </div>
//       <div className="text-center">
//         <button
//           onClick={handleLoadMore}
//           className="inline-block px-8 py-4 text-white bg-purple-600"
//         >
//           Load more
//         </button>
//       </div>
//     </div>
//   );
// };

const GetRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    // handle success
    console.log(response);
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMore = async () => {
    const images = await GetRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    handleLoadMore();
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={item.id}>
              <img
                src={item.download_url}
                alt={item.author}
                className="object-cover w-full rounded-lg h-[200px]"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="inline-block px-8 py-4 text-white bg-purple-500"
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default Photos;
