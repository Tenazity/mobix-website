import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";

function SpinningModel({ modelPath }) {
  const groupRef = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={groupRef} object={scene} scale={1.4} />;
}

export default function ModelSection({ modelPath, title, description, reverse = false, id, children, modelHeightClasses = "h-[300px] sm:h-[360px] md:h-[440px] lg:h-[480px]" }) {
  return (
    <section id={id} className="w-full pt-4 pb-6 md:pt-6 md:pb-8">
      <div className={`mx-auto w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center`}>
        {/* Text block */}
        <div 
          className={`${reverse ? 'md:order-2' : 'md:order-1'} z-10`}
          data-aos={`${reverse ? 'fade-left' : 'fade-right'}`}
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          {title && (typeof title === 'string' 
            ? (
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mb-5">{title}</h2>
            ) : (
              title
            )
          )}
          {description && (
            <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-xl mb-6">{description}</p>
          )}
          {children}
        </div>

        {/* Model block */}
        <div className={`${reverse ? 'md:order-1' : 'md:order-2'} relative ${modelHeightClasses} w-full`}>
          <div 
            className="absolute inset-0"
            data-aos={`${reverse ? 'fade-right' : 'fade-left'}`}
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <Canvas camera={{ position: [0, 1.2, 2.4], fov: 35 }} dpr={[1, 2]} shadows={false} gl={{ antialias: true }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <SpinningModel modelPath={modelPath} />
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

useGLTF.preload('/foodtrailer.glb');
useGLTF.preload('/foodtrailer3d.glb');
useGLTF.preload('/foodtrailerobj.glb');
useGLTF.preload('/food3d.glb');

