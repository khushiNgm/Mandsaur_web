// import React from "react";
// const PlacesImg =[  
//     {
//     title: "Buddhist Caves",
//      image :"/historical/Buddhist Caves.jpg",
//     },
//   {
//          title :"Dharmarajeshwar Temple",
//         image :"/historical/Dharmarajeshwar Temple.jpg ",
//  },
//    {
//          title :"Lord Pashupatinath Temple ",
//         image :"/historical/Pashupatinath Temple.png ",
//    },
//      {
//       title :"Teliya Talab",
//       image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV030EKSw9TN1lcMsgSznPaNJMSjmjI1ZxA&s",
//   },
//  {
//     title :"Vijay Stambh",
//    image :"/historical/Vijay Stambh.jpg",
// },
//    {
//         title :"Gandhi Sagar Dam",
//         image :"/historical/Gandhi Sagar Dam.jpg",
//    },
// ];
// const Places = () => {
//      return (
//        <div className="w-screen h-screen bg-[#040815] items-center justify-center h-screen flex mt-10">
//    <div className=" ml-50 p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-[80px] mt-10 w-[900px] h-[600px] ">
//      {PlacesImg.map((place, index) => (
//         <div key={index} className="border rounded-lg shadow-lg">
//           <img
//              src={place.image}
//              alt={place.title}
//              className="w-full h-40 object-cover rounded-[12px] opacity-40 hover:opacity-100 transition-all duration-95 ease-in-out"
//            />
//            <div className="p-3">
//              <h3 className="text-xl font-bold text-white text-center">{place.title}</h3>
//            </div>
//           </div>
//        ))}
//     </div>
//     </div>
//    );
//   };
  
//   export default Places;




//   import React, { useState } from "react";
// const PlacesImg = [  
//     {
//         title: "Buddhist Caves",
//         image: "/historical/Buddhist Caves.jpg",
//     },
//     {
//         title: "Dharmarajeshwar Temple",
//         image: "/historical/Dharmarajeshwar Temple.jpg",
//     },
//     {
//         title: "Lord Pashupatinath Temple",
//         image: "/historical/Pashupatinath Temple.png",
//     },
//     {
//         title: "Teliya Talab",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV030EKSw9TN1lcMsgSznPaNJMSjmjI1ZxA&s",
//     },
//     {
//         title: "Vijay Stambh",
//         image: "/historical/Vijay Stambh.jpg",
//     },
//     {
//         title: "Gandhi Sagar Dam",
//         image: "/historical/Gandhi Sagar Dam.jpg",
//     },
// ];

// const Places = () => {
//     const [selectedImage, setSelectedImage] = useState(null);

//     return (
//         <div className="w-screen h-screen bg-[#040815] flex items-center justify-center mt-10">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-[80px] mt-10 w-[900px] h-[600px]">
//                 {PlacesImg.map((place, index) => (
//                     <div key={index} className="border rounded-lg shadow-lg">
//                         <img
//                             src={place.image}
//                             alt={place.title}
//                             className="w-full h-40 object-cover rounded-[12px] opacity-40 hover:opacity-100 transition-all duration-95 ease-in-out cursor-pointer"
//                             onClick={() => setSelectedImage(place.image)}
//                         />
//                         <div className="p-3">
//                             <h3 className="text-xl font-bold text-white text-center">{place.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedImage && (
//                 <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center z-50">
//                     <div className="relative">
//                         <button
//                             className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//                             onClick={() => setSelectedImage(null)}
//                         >
//                             ✖
//                         </button>
//                         <img src={selectedImage} alt="Selected" className="max-w-[80vw] max-h-[80vh] rounded-lg" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Places;





import React, { useState } from "react";
const PlacesImg = [  
    {
        title: "Buddhist Caves",
        image: "/historical/Buddhist Caves.jpg",
    },
    {
        title: "Dharmarajeshwar Temple",
        image: "/historical/Dharmarajeshwar Temple.jpg",
    },
    {
        title: "Lord Pashupatinath Temple",
        image: "/historical/Pashupatinath Temple.png",
    },
    {
        title: "Teliya Talab",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV030EKSw9TN1lcMsgSznPaNJMSjmjI1ZxA&s",
    },
    {
        title: "Vijay Stambh",
        image: "/historical/Vijay Stambh.jpg",
    },
    {
        title: "Gandhi Sagar Dam",
        image: "/historical/Gandhi Sagar Dam.jpg",
    },
];

const Places = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("");

    return (
        <div className="w-screen h-screen bg-[#040815] flex items-center justify-center mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-[80px] mt-10 w-[1000px] h-[600px]">
                {PlacesImg.map((place, index) => (
                    <div key={index} className="border rounded-lg shadow-lg">
                        <img
                            src={place.image}
                            alt={place.title}
                            className="w-full h-40 object-cover rounded-[12px] opacity-40 hover:opacity-100 transition-all duration-95 ease-in-out cursor-pointer"
                            onClick={() => {
                                setSelectedImage(place.image);
                                setSelectedTitle(place.title);
                            }}
                        />
                        <div className="p-3">
                            <h3 className="text-xl font-bold text-white text-center">{place.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
                    <div className="relative text-white text-2xl font-bold mb-4">{selectedTitle}</div>
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                            onClick={() => {
                                setSelectedImage(null);
                                setSelectedTitle("");
                            }}
                        >
                            ✖
                        </button>
                        <img src={selectedImage} alt={selectedTitle} className="max-w-[80vw] max-h-[80vh] rounded-lg" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Places;