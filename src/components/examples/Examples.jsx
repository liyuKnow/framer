import React from "react";
import ScaleAndDrag from "./ScaleAndDrag";
import OnClickAnim from "./OnClickAnim";
import OnScrollAnim from "./OnScrollAnim";
import LoadingSequence from "./LoadingSequence";
import ParentAndChild from "./ParentAndChild";
import Interactive from "./Interactive";
import KeyFrames from "./keyFrames";

const Examples = () => {
  return (
    <div>
      <header className="p-4 shadow-sm">
        <div className="inline-block text-lg">
          <h1>Header</h1>
        </div>
        <div className="inline-block top-auto text-teal-800 float-right rounded-full mx-1 px-2">
          <a href="#" className="align-middle">
            More
          </a>
        </div>
        <div className="inline-block top-auto text-teal-800 float-right rounded-full mx-1 px-2">
          <a href="#onScrollAnim" className="align-middle">
            On Scroll
          </a>
        </div>
        <div className="inline-block top-auto text-teal-800 float-right rounded-full px-2 bg-teal-100">
          <a href="#" className="align-middle">
            Home
          </a>
        </div>
      </header>
      <OnClickAnim />
      <OnScrollAnim />
      <ScaleAndDrag />
      <ParentAndChild />
      <LoadingSequence />
      <KeyFrames />
      <Interactive />
    </div>
  );
};

export default Examples;
