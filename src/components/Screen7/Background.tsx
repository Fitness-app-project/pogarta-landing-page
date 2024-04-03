import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const MovingStars = () => {
  const camRef = useRef({
    theta: 0, 
    radius: 80,
  });

  useFrame((state, delta) => {
    camRef.current.theta += delta * 0.05; 

    const x = camRef.current.radius * Math.sin(camRef.current.theta);
    const y = camRef.current.radius * Math.cos(camRef.current.theta);
    const z = camRef.current.radius * Math.sin(camRef.current.theta);
    state.camera.position.set(x, y, z);
    state.camera.lookAt(new THREE.Vector3(0, 5, 0)); 
  });

  return (
    <Stars radius={100} depth={50} count={5000} factor={8} saturation={0} fade={true} />
  );
};

export const BackgroundAnimation = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <MovingStars />
      </Suspense>
    </Canvas>
  );
};
