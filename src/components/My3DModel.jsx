import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const My3DModel = () => {
  const { scene } = useGLTF('/path/to/your/model.glb');
  return <primitive object={scene} scale={0.5} position={[0, -1.5, 0]} />;
};

const My3DScene = () => {
  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <My3DModel />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default My3DScene;
