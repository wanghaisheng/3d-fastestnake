import * as THREE from "three";
import { useState, useMemo } from "react";
import { FieldsProps } from "../../types/field";

const Fields: React.FC<FieldsProps> = ({ size }) => {
  const [grassMaterial, setGrassMaterial] =
    useState<THREE.MeshStandardMaterial | null>(null);

  useMemo(() => {
    const textureLoader = new THREE.TextureLoader();
    const grassAlbedo = textureLoader.load(
      "/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png"
    );
    const grassAo = textureLoader.load(
      "/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png"
    );
    const grassHeight = textureLoader.load(
      "/whispy-grass-meadow-bl/wispy-grass-meadow_height.png"
    );
    const grassMetallic = textureLoader.load(
      "/whispy-grass-meadow-bl/wispy-grass-meadow_metallic.png"
    );
    const grassNormal = textureLoader.load(
      "/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png"
    );
    const grassRoughness = textureLoader.load(
      "/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png"
    );

    const material = new THREE.MeshStandardMaterial({
      map: grassAlbedo,
      roughnessMap: grassRoughness,
      metalnessMap: grassMetallic,
      normalMap: grassNormal,
      displacementMap: grassHeight,
      displacementScale: 0.3,
      aoMap: grassAo,
    });
    setGrassMaterial(material);

    return () => {
      // Clean up textures
      grassAlbedo.dispose();
      grassAo.dispose();
      grassHeight.dispose();
      grassMetallic.dispose();
      grassNormal.dispose();
      grassRoughness.dispose();
    };
  }, []);

  return (
    <group>
      {grassMaterial && (
        <mesh position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[size, size]} />
          <primitive object={grassMaterial} />
        </mesh>
      )}
    </group>
  );
};

export default Fields;
