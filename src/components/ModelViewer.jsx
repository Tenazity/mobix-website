import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model() {
  const ref = useRef();
  const { scene } = useGLTF("/foodtrailer.glb"); // Make sure model.glb is in /public

  // 🔁 Slowly rotate the model every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; // adjust speed if needed
    }
  });

  return <primitive ref={ref} object={scene} scale={1.6} />;
}

export default function ModelViewer() {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      data-aos-duration="1500"
      className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full w-full"
    >
      <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
        {/* 💡 Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Model />
          {/* Optional lighting environment */}
          <Environment preset="studio" />
        </Suspense>

        {/* OrbitControls only if you want manual rotation as well */}
        {/* <OrbitControls enableZoom={true} /> */}
      </Canvas>
    </div>
  );
}
