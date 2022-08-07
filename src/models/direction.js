import { SBEnumControl } from "../utils/storybookUtils"

export const Direction = {
    Top: "top",
    Bottom: "bottom",
    Left: "left",
    Right: "right"
}

export const DirectionSBArgs = SBEnumControl(Direction);