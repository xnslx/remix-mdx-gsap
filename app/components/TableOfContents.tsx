import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const TableOfContents = ({ headings }: any) => {
  useGSAP(() => {
    console.log("firing?");
    if (typeof document !== "undefined") {
      console.log(document);
      gsap.registerPlugin(useGSAP, ScrollTrigger);
    }
    ScrollTrigger.create({
      trigger: ".container",
      pin: true,
      scrub: 2,
      markers: true,
      start: "top top", // Start pinning when the top of the .container hits the top of the viewport
      end: "bottom+=3000 top", // Extend the pinning duration
    });
  }, []);
  return (
    <div className="p-4 container">
      {headings?.map(
        (
          item: {
            depth: number;
            value:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
          },
          index: Key | null | undefined
        ) => (
          <div className="childContainer">
            <div
              key={index}
              className={
                item.depth === 2
                  ? "text-lg font-bold text-blue-600 my-4 "
                  : "text-md text-gray-700 ml-4 px-4"
              }
            >
              {item.value}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TableOfContents;
