import React from "react";
import { Commands } from "../../models/commands";
import { useTranslation } from "react-i18next";
import ConsoleMenuItem from "./ConsoleMenuItem";
import FadeAnimation from "../animations/FadeAnimation";
import gsap, { Power2 } from "gsap";
import { useDidUpdateEffect, useWindowEventListener } from "../../utils/reactUtils";

const ConsoleMenuMobile = ({
    visible = false,
    items = [],
    activeItem = Commands.Home,
    onCommand = null
}) =>  {

    const menu = React.useRef(null);

    const speed = 200;
    const { t } = useTranslation();

    const [open, setOpen] = React.useState(false); 

    const toggleMenu = () => {

        if (!menu.current) {
            return;
        }

        setOpen(!open);
    }
    
    const closeMenu = () => {
        if (open) {
            toggleMenu();
        }
    }

    const runCommand = (command, event) => {

        if(onCommand) {
            onCommand(command, event);
        }

        // close mobile menu
        if (open) {
            setOpen(false);
        }
    }

    useWindowEventListener('resize', closeMenu);

    useDidUpdateEffect(() => {

        const app = document.getElementsByClassName("app");
            
        gsap.set(".console-view-content", {
            filter: open ? "blur(10px)" : "none"
        });

        if (open) {
            gsap.set(menu.current, { display: "flex" });
            gsap.set(app, { overflow: "hidden" });
        }

        gsap.to(menu.current, {
            duration: 0.2,
            ease: Power2.easeInOut,
            opacity: open ? 1 : 0,
            onComplete: () => {

                if (!open) {
                    gsap.set(app, { delay: 0.2, clearProps: "overflow" });
                    gsap.set(menu.current, {
                        display: "none"
                    });
                }
            }
        });

    }, [open]);

    const menuItems = items.map((item, index) => {
        return <ConsoleMenuItem 
            key={index}
            visible={open}
            delay={(index * speed) / 2}
            name={t(item).toLowerCase()} 
            speed={speed}
            active={item === activeItem}
            command={item} 
            onClick={runCommand} />;
    });

    return (
        <div className="console-menu-mobile-wrapper">
            <div className="console-menu-mobile" ref={menu}>
                { menuItems }
            </div>
            <FadeAnimation visible={visible}>
                <ConsoleMenuHandle onClick={toggleMenu} open={open} />
            </FadeAnimation>
        </div>
    )
}

const ConsoleMenuHandle = ({
    open = false,
    onClick = null
}) => {

    const line1 = React.useRef(null);
    const line2 = React.useRef(null);

    const animateLine = React.useCallback((target, rotate, translateY, translateX) => {
        gsap.to(target, {
            duration: 0.2,
            rotate: rotate,
            translateX: translateX,
            translateY: translateY
        });
    }, []);

    useDidUpdateEffect(() => {

        if (open) {
            animateLine(line1.current, 45, 6, -3);
            animateLine(line2.current, -45, -6, -3);
        }
        else {
            animateLine(line1.current, 0, 0, 0);
            animateLine(line2.current, 0, 0, 0);
        }

    }, [open]);
    
    return (
        <div className="console-menu-handle" role="button" tabIndex={0} onClick={onClick}>
            <div className="console-menu-handle-line" ref={line1} />
            <div className="console-menu-handle-line" ref={line2} />
        </div>
    )
}

export default ConsoleMenuMobile;