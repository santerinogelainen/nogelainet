import React from "react";
import Modal from "./Modal";
import { SBContentPlaceholder } from "../utils/storybookUtils"

export default {
    title: "Components/Modal",
    component: Modal
}

const Template = (args) => {

    const [visible, setVisible] = React.useState(false);

    return (
        <div>
            <button type="button" onClick={() => setVisible(true)}>Show</button>
            <Modal visible={visible} {...args}>
                <SBContentPlaceholder size={200} />
                <button type="button" onClick={() => setVisible(false)}>Hide</button>
            </Modal>
        </div>
    )
}

export const Default = Template.bind({});

Default.args = {};