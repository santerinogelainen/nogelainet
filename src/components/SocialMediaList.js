import React from "react"
import HiddenContainer from "./HiddenContainer"
import { Anchor } from "../models/anchor"

const SocialMediaList = ({
    socials = []
}) => {

    return <div className="socials">
        {socials.map(social => {
            return <SocialMediaItem key={social.rowKey} social={social} />
        })}
    </div>
}

const SocialMediaItem = ({
    social = null
}) => {

    const item = React.useRef();
    const [tooltipVisible, setTooltipVisible] = React.useState(false);

    React.useEffect(() => {

        const currentItem = item.current;

        currentItem?.addEventListener("mouseenter", showTooltip);
        currentItem?.addEventListener("mouseleave", hideTooltip);

        return () => {
            currentItem?.removeEventListener("mouseenter", showTooltip);
            currentItem?.removeEventListener("mouseleave", hideTooltip);
        };
    }, []);

    const showTooltip = () => setTooltipVisible(true);
    const hideTooltip = () => setTooltipVisible(false);

    // TODO: Make prettier and add animations with colors

    return <div className="social-item-container">
        <a ref={item} className="social-item" target="_blank" rel="noreferrer" aria-label={social.Name} href={social.Url}>
            {social.Name}
        </a>
        <HiddenContainer zIndex={5} visible={tooltipVisible} rotate={false} anchor={Anchor.BottomLeft}>
            <span className="target-blank social-tooltip">{social.Username}</span>
        </HiddenContainer>
    </div>
}

export default SocialMediaList;