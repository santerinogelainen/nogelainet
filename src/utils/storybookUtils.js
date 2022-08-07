import React from "react";

export const SBContentPlaceholder = ({size = 100}) => {
    return <div style={{width: size, height: size, border: "1px solid red", color: "red"}}>
        Content
    </div>
}

export const SBRangeControl = (min = 1, max = 1000, step = 1) => ({ 
  control: { 
    type: 'range', 
    min, 
    max, 
    step
  }
});

export const SBEnumControl = (obj) => ({
  options: obj,
  mapping: obj,
  control: {
      type: 'select'
  },
});