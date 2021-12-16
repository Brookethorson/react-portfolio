export default class Animations {
    static animations = new Animations();

    fadeInScreen = (screen_name)=>{
        let screen = document.getElementById(screen);
        if(!screen_name || !screen)
        return

        screen.style.opacity="5";
        screen.style.transform="translateY(1px)"
    }


}