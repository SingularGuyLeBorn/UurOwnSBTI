import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, pointer } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    // 极轻微的鼠标视差 (lerp)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      pointer.y * 0.12,
      0.04
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      pointer.x * 0.12 + state.clock.elapsedTime * 0.06,
      0.04
    );
  });

  const isMobile = viewport.width < 6;
  const scale = isMobile ? 0.75 : 1.35;

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.12, 0.12]}
    >
      <mesh ref={meshRef} scale={scale} position={[0, -0.4, -3.2]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#EBF0F7"
          roughness={0.35}
          metalness={0.05}
          transmission={0.55}
          thickness={2}
          clearcoat={0.35}
          clearcoatRoughness={0.2}
          ior={1.35}
          attenuationColor="#E0E5EC"
          attenuationDistance={3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function SoftParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const count = 48;
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      siz[i] = Math.random() * 0.06 + 0.02;
    }
    return [pos, siz];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    pointsRef.current.rotation.z = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.08}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} color="#ffffff" />
      <directionalLight
        position={[5, 5, 8]}
        intensity={1.5}
        color="#ffffff"
        castShadow={false}
      />
      <directionalLight
        position={[-5, -3, 4]}
        intensity={0.6}
        color="#EBF0F7"
      />
      <AbstractShape />
      <SoftParticles />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
