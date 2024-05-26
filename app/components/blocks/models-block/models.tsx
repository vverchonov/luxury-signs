import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./model";
import { OrbitControls, TransformControls } from "@react-three/drei";

const modelClass =
  "p-8 rounded-xl bg-white flex md:w-[35vw] md:h-[35vw] w-[75vw] h-[75vw] flex-col gap-2 z-10";

const textClass = "text-2xl text-black text-center mt-auto font-bold";
export const Models = (props: any) => {
  return (
    <>
      <div className={modelClass}>
        <p className={textClass}>
          <Canvas className="w-full h-full">
            <OrbitControls enablePan={false} enableZoom={false} />
            <Model obj={"./full.fbx"} />
          </Canvas>
          Outside
        </p>
      </div>
      <div className={modelClass}>
        {/* <Suspense fallback={<p className="text-blacl">Loading model...</p>}>
          <Model obj={"./diss.fbx"} />
        </Suspense> */}
        <p className={textClass}>Inside</p>
      </div>
    </>
  );
};
