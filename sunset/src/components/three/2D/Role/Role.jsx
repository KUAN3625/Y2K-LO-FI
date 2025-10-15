import { SpriteAnimator } from "@react-three/drei";

const Role = () => {

    return (

        <>
             <SpriteAnimator
        texture="/sprite/Sprite-0003.png"   // 你的 spritesheet 圖片
        frameCount={13}              // 總幀數（416 / 32 = 13）
        columns={13}                 // 橫向 13 格
        rows={1}                     // 一行
        frameSize={[32, 32]}         // 每格大小
        fps={10}                     // 播放速度
        loop                         // 循環播放
        autoPlay                     // 自動播放
        scale={[2, 2, 2]}            // 放大比例
        material={{ transparent: true, toneMapped: false }}
        onCreated={(sprite) => {
          // 保持像素清晰
          sprite.material.map.magFilter = THREE.NearestFilter;
          sprite.material.map.minFilter = THREE.NearestFilter;
          sprite.material.map.generateMipmaps = false;
        }}
      />
        </>
    )
}

export default Role