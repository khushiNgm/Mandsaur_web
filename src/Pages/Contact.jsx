

// import { Github, Linkedin } from "react-bootstrap-icons";
// import '../App.css';

// export default function Contact() {
//   return (
//     <div className="w-full flex flex-col items-center mt-4 text-xl md:text-2xl text-center text-[#01c48a] items-center justify-center h-screen ml-[350px]">
//       <p>If you want to contact me, please write to:</p>
//       <a
//         href="mailto:ab.r4thore@gmail.com"
//         className="text-shadow hover:scale-150 hover:font-bold focus:scale-150 focus:font-bold transition-all duration-500"
//       >
//         nigamkhushi731@gmail.com
//       </a>
//       <p className="mt-5">My social media addresses:</p>
//       <div
//         className="flex bg-transparent h-[60px] p-3 gap-4 rounded mt-2
//         backdrop-blur-sm"
//       >
//         <a
//           href="https://github.com/khushiNgm"
//           target="_blank"
//           className="after:inline-block after:-z-10 after:w-[30px]
//           after:h-[30px] after:bg-white after:relative after:top-[-33px]
//           after:right-[-2px] after:rounded-full"
//         >
//           <Github
//             color="#171516"
//             size={36}
//             className="transition-shadow
//             hover:shadow-lg hover:shadow-white"
//           />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/khushi-nigam-635763272"
//           target="_blank"
//         >
//           <Linkedin
//             color="royalblue"
//             size={36}
//             className="transition-shadow
//             hover:shadow-lg hover:shadow-[#4169e1]"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }



import { Github, Linkedin } from "react-bootstrap-icons";
import '../App.css';

export default function Contact() {
  return (
    <div className="overflow-x-hidden w-full flex flex-col items-center justify-center h-screen px-4 md:px-10 text-xl md:text-2xl text-center text-[#01c48a] md:mr-[1000px]">
      <p>If you want to contact me, please write to:</p>
      <a
        href="mailto:nigamkhushi731@gmail.com"
        className="text-shadow hover:scale-110 hover:font-bold transition-all duration-300"
      >
        nigamkhushi731@gmail.com
      </a>
      <p className="mt-5">My social media addresses:</p>
      <div
        className="flex bg-transparent h-[60px] p-3 gap-6 rounded mt-2 backdrop-blur-sm"
      >
        <a
          href="https://github.com/khushiNgm"
          target="_blank"
          className="relative group"
        >
          <Github
            color="#171516"
            size={36}
            className="transition-shadow group-hover:shadow-lg group-hover:shadow-white"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/khushi-nigam-635763272"
          target="_blank"
          className="relative group"
        >
          <Linkedin
            color="royalblue"
            size={36}
            className="transition-shadow group-hover:shadow-lg group-hover:shadow-[#4169e1]"
          />
        </a>
      </div>
    </div>
  );
}
