import { SBEnumControl } from "../utils/storybookUtils"

export const Anchor = {
    TopLeft: "top-left",
    TopRight: "top-right",
    BottomLeft: "bottom-left",
    BottomRight: "buttom-right",
    Center: "center"
}

export const AnchorSBArgs = SBEnumControl(Anchor);