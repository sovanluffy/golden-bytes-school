import React, { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

/* ------------------ DATA ------------------ */
const locations = [
  { name: "Cambodia", lat: 12.5657, lon: 104.991 },
  { name: "India", lat: 20.5937, lon: 78.9629 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Vietnam", lat: 14.0583, lon: 108.2772 },
  { name: "Jordan", lat: 31.3104, lon: 36.7562 },
];

/* ------------------ HELPERS ------------------ */
const latLngToVec3 = (lat: number, lon: number, radius = 1) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

/* ------------------ PIN ------------------ */
const Pin = ({ name, lat, lon }: any) => {
  const [hovered, setHovered] = useState(false);

  const position = useMemo(
    () => latLngToVec3(lat, lon, 1.02),
    [lat, lon]
  );

  return (
    <group position={position}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[0.018, 16, 16]} />
        <meshStandardMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={hovered ? 2 : 0.8}
        />
      </mesh>

      {hovered && (
        <Html
          distanceFactor={10}
          position={[0, 0.05, 0]}
          center
          occlude
        >
          <div className="globe-hotspot-label">{name}</div>
        </Html>
      )}
    </group>
  );
};

/* ------------------ EARTH ------------------ */
const Earth = () => {
  const ref = useRef<THREE.Mesh>(null);

  const [
    dayMap,
    normalMap,
    nightMap
  ] = useTexture([
    "src/assets/earth-globe-icon-cartoon-asia-grid-vector.jpg",
    "src/assets/earth-globe-icon-cartoon-asia-grid-vector.jpg",
    "src/assets/earth-globe-icon-cartoon-asia-grid-vector.jpg"
  ]);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0012;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={dayMap}
        normalMap={normalMap}
        roughness={0.7}
        metalness={0.1}
        emissiveMap={nightMap}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
};

/* ------------------ CLOUDS ------------------ */
const Clouds = () => {
  const ref = useRef<THREE.Mesh>(null);
  const cloudMap = useTexture("/textures/earth_clouds.png");

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0015;
  });

  return (
    <mesh ref={ref} scale={1.01}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={cloudMap}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
};

/* ------------------ ATMOSPHERE ------------------ */
const Atmosphere = () => (
  <mesh scale={1.06}>
    <sphereGeometry args={[1, 64, 64]} />
    <meshBasicMaterial
      color="#4db8ff"
      transparent
      opacity={0.08}
      side={THREE.BackSide}
    />
  </mesh>
);

/* ------------------ SCENE ------------------ */
const GlobeScene = () => (
  <>
    {/* Lighting */}
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 3, 5]} intensity={1.2} />
    <pointLight position={[-5, -3, -5]} intensity={0.6} color="#4db8ff" />

    <Earth />
    <Clouds />
    <Atmosphere />

    {locations.map((loc, i) => (
      <Pin key={i} {...loc} />
    ))}
  </>
);

/* ------------------ MAIN COMPONENT ------------------ */
export const Globe = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <GlobeScene />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
};

export default Globe;
