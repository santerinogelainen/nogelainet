import React, { useEffect } from "react";
import Modal from "../Modal";
import { useTranslation } from "react-i18next";
import WrittenTextAnimation from "../animations/WrittenTextAnimation";

type ProjectItemModalProps = React.PropsWithChildren<{
  name?: string;
  employer?: string;
  visible: boolean;
  onHide: () => void;
}>;

const ProjectItemModal: React.FC<ProjectItemModalProps> = ({
  name,
  employer,
  visible,
  children,
  onHide,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", onHide);
      return () => window.removeEventListener("keydown", onHide);
    }
  }, [visible, onHide]);

  return (
    <div className="project-modal">
      <Modal visible={visible}>
        <div className="project-modal-container">
          <h1 className="project-modal-title">
            <WrittenTextAnimation text={name} />
          </h1>
          <div className="project-modal-employer">[{employer}]</div>
          <div className="project-modal-content">{children}</div>
          <div
            className="modal-close-container"
            role="button"
            tabIndex={0}
            onClick={onHide}
            title={t("close")}
          >
            <div className="modal-close">
              <div className="modal-close-line" />
              <div className="modal-close-line" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectItemModal;
