import React from "react";
import { Commands } from "../../models/commands";
import { useTranslation } from "react-i18next";
import ConsoleMenuItem from "./ConsoleMenuItem";
import gsap, { Power2 } from "gsap";
import { useDidUpdateEffect } from "../../utils/reactUtils";

const ConsoleMenuMobile = ({
    visible = false,
    items = [],
    activeItem = Commands.Home,
    onCommand = null
}) =>  {

    const handle = React.useRef(null);
    const menu = React.useRef(null);

    const speed = 200;
    const { t } = useTranslation();

    const [open, setOpen] = React.useState(false); 

    React.useEffect(() => {

        const currentHandle = handle.current;

        currentHandle?.addEventListener("mouseup", toggleMenu);
        window.addEventListener('resize', closeMenu);
        return () => {
            currentHandle?.removeEventListener("mouseup", toggleMenu);
            window.removeEventListener('resize', closeMenu);
        }
    });

    useDidUpdateEffect(() => {

        gsap.set(".console-view-content", {
            filter: open ? "blur(10px)" : "none"
        });

        if (open) {
            gsap.set(menu.current, {
                display: "flex"
            });
        }

        gsap.to(menu.current, {
            duration: 0.3,
            ease: Power2.easeInOut,
            opacity: open ? 1 : 0,
            onComplete: () => {

                if (!open) {
                    gsap.set(menu.current, {
                        display: "none"
                    });
                }
            }
        });

    }, [open]);

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

    const menuItems = items.map((item, index) => {
        return <ConsoleMenuItem 
            key={index}
            visible={open}
            delay={(index * speed) / 1.5}
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
            <div className="console-menu-handle" ref={handle} style={{ opacity: visible ? 1 : 0 }}>
                <div className="console-menu-handle-line" />
                <div className="console-menu-handle-line" />
            </div>
        </div>
    )
}

export default ConsoleMenuMobile;