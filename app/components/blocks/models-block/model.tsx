"use client";
import { useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh } from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";

export const Model = (props: any) => {
  if (!props.obj) return;
  const catRef = useRef();
  const obj = useLoader(FBXLoader, props.obj);

  return (
    <>
      <mesh ref={catRef as any} scale={0.1} />
    </>
  );
};
