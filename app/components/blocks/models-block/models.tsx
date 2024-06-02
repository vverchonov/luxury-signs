import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./model";
import { OrbitControls, TransformControls } from "@react-three/drei";

const modelClass =
  "p-8 rounded-xl bg-white flex md:w-[35vw] md:h-[35vw] w-[75vw] h-[75vw] flex-col gap-2 z-10";

const textClass = "text-3xl text-black text-center mt-auto font-bold";
export const Models = (props: any) => {
  const { selectedID } = props;

  return (
    <>
      <div className={modelClass}>
        <Canvas className="w-full h-full">
          <ambientLight intensity={3} />
          <OrbitControls enablePan={false} enableZoom={false} />
          {selectedID === "1" && (
            <Model texture={"./front1.png"} obj={"./front1.obj"} />
          )}
          {selectedID === "2" && (
            <Model texture={"./closed1.png"} obj={"./closed1.obj"} />
          )}
          {selectedID === "3" && (
            <Model texture={"./both1.png"} obj={"./both1.obj"} />
          )}
        </Canvas>
        <p className={textClass}>Outside</p>
      </div>
      <div className={modelClass}>
        <Canvas className="w-full h-full">
          <ambientLight intensity={3} />
          <OrbitControls enablePan={false} enableZoom={false} />
          {selectedID === "1" && (
            <Model texture={"./front2.png"} obj={"./front2.obj"} />
          )}
          {selectedID === "2" && (
            <Model texture={"./closed2.png"} obj={"./closed2.obj"} />
          )}
          {selectedID === "3" && (
            <Model texture={"./both2.png"} obj={"./both2.obj"} />
          )}
        </Canvas>
        <p className={textClass}>Inside</p>
      </div>
    </>
  );
};
