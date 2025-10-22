import { create } from "zustand";
import { Howl } from "howler";


export const useSFXStore = create(() => ({
    sounds:{
        click: new Howl({src:["/SFX/click1.ogg","/SFX/click.mp3"], volume: 0.4}),

    },

    play:(key) => {

        const{sounds} = useSFXStore.getState();
        const sound = sounds[key];
        if (sound) sound.play();
    }


}) )