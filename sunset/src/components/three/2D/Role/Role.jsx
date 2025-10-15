import { SpriteAnimator, useSpriteLoader } from "@react-three/drei";
import * as THREE from "three";

const Role = () => {
  // 1️⃣ 用 useSpriteLoader 載入你的 spritesheet
  const texture = useSpriteLoader("/sprite/Sprite-0003.png");

  // 2️⃣ 設定像素風濾鏡（確保清晰）
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;

  // 3️⃣ 回傳 SpriteAnimator（只有一層 return）
  return (
    <group rotation={[0, Math.PI, 0]}>
      <SpriteAnimator
        texture={texture}
        frameCount={13}
        columns={13}
        rows={1}
        frameSize={[32, 32]}
        fps={10}
        loop
        autoPlay
        scale={[5, 5, 5]}
        material={{ transparent: true, toneMapped: false }}
      />
    </group>
  );
};

export default Role;
