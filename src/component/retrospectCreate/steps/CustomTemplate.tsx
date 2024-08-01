import { useAtom } from "jotai";
import { useContext, useEffect } from "react";

import { RetrospectCreateContext } from "@/app/retrospectCreate/RetrospectCreate";
import { FullModal } from "@/component/common/Modal/FullModal";
import { ConfirmEditTemplate, EditQuestions, ConfirmDefaultTemplate } from "@/component/retrospectCreate";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { isQuestionEditedAtom } from "@/store/retrospect/retrospectCreate";

export function CustomTemplate() {
  const retroContext = useContext(RetrospectCreateContext);
  const { currentStep, goNext, goPrev, goTo } = useMultiStepForm({
    steps: ["confirmDefaultTemplate", "editQuestions", "confirmEditTemplate"] as const,
  });
  const [isQuestionEdited, _] = useAtom(isQuestionEditedAtom);

  useEffect(() => {
    if (isQuestionEdited) {
      goTo("confirmEditTemplate");
    }
  }, []);

  return (
    <>
      {currentStep === "confirmDefaultTemplate" && <ConfirmDefaultTemplate goEdit={goNext} />}
      {currentStep === "editQuestions" && (
        <FullModal>
          <EditQuestions
            goNext={goNext}
            goPrev={() => {
              if (!isQuestionEdited) {
                goPrev();
              } else {
                goTo("confirmEditTemplate");
              }
            }}
          />
        </FullModal>
      )}
      {currentStep === "confirmEditTemplate" && (
        <FullModal>
          <ConfirmEditTemplate goNext={retroContext.goNext} goPrev={goPrev} />
        </FullModal>
      )}
    </>
  );
}
