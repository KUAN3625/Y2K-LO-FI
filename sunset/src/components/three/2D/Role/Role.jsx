import { SpriteAnimator } from "@react-three/drei";

const Role = () => {
  return (
    <SpriteAnimator
      // 換成你的 JSON 與圖檔
      textureImageURL="/HELP.jpg"
      textureDataURL="/HELP.json"

      // 可調整的參數
      fps={12}               // 每秒幀數
      loop                   // 循環播放
      autoPlay               // 自動播放
      scale={[1, 1, 1]}      // 放大一點方便看
      position={[0, 0, 0]}   // 放在畫面中央
      alphaTest={0.01}       // 防止透明邊緣發光
    />
  );
};

export default Role;

