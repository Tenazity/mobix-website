import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Floating Food Items Component
const FloatingFood = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Pizza Slice */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[2, 1, 0]}>
          <coneGeometry args={[0.8, 0.3, 6]} />
          <meshStandardMaterial color="#ff6b35" />
        </mesh>
      </Float>

      {/* Burger */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.7}>
        <group position={[-2, 0.5, 1]}>
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.4, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
            <meshStandardMaterial color="#d4942a" />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.35, 0.35, 0.2]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[0, -0.2, 0]}>
            <sphereGeometry args={[0.4, 16, 8, 0, Math.PI * 2, Math.PI * 0.4, Math.PI * 0.6]} />
            <meshStandardMaterial color="#d4942a" />
          </mesh>
        </group>
      </Float>

      {/* Coffee Cup */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <group position={[0, -1, 2]}>
          <mesh>
            <cylinderGeometry args={[0.3, 0.25, 0.6, 16]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[0.4, 0, 0]}>
            <torusGeometry args={[0.15, 0.05, 8, 16]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
        </group>
      </Float>

      {/* Taco */}
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh position={[1.5, -0.5, -1]} rotation={[0, 0, Math.PI * 0.2]}>
          <cylinderGeometry args={[0.5, 0.3, 0.1, 8, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#f4d03f" />
        </mesh>
      </Float>

      {/* Hot Dog */}
      <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.8}>
        <group position={[-1, 1.5, -0.5]} rotation={[0, 0, Math.PI * 0.1]}>
          <mesh>
            <capsuleGeometry args={[0.15, 0.8]} />
            <meshStandardMaterial color="#ff4757" />
          </mesh>
          <mesh position={[0, 0, 0.2]}>
            <boxGeometry args={[0.3, 1, 0.1]} />
            <meshStandardMaterial color="#feca57" />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

// Main Trailer Outline
const TrailerOutline = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group position={[0, 0, -2]}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 1.5, 1]} />
        <meshStandardMaterial 
          color="#ff6b35" 
          transparent 
          opacity={0.3}
          wireframe={false}
        />
      </mesh>
      {/* Wheels */}
      <mesh position={[-1, -0.9, 0.6]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[1, -0.9, 0.6]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffbe0b" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#ff6b35"
            castShadow
          />

          {/* Environment */}
          <Environment preset="night" />

          {/* 3D Elements */}
          <FloatingFood />
          <TrailerOutline />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;