import {proxy} from "valtio";

const state = proxy({
    intro : true, //are we currently on the homepage or not
    color: '#EFBD4B',
    isLogoTexture : true, //are we currently displaying the logo or not
    isFullTexture : false,
    logoDecal : './threejs.png',
    fullDecal : './threejs.png'

});

export default state;