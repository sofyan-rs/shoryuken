"use client";

import { FC } from "react";
import { Trans } from "@lingui/macro";
import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const StyledAlertDialogOverlay = styled(AlertDialog.Overlay)`
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledAlertDialogContent = styled(AlertDialog.Content)`
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

type Props = {
  description: string;
  isOpen: boolean;
  onRequestClose?: () => void;
  onClickConfirm?: () => void;
};

const PopupDeleteConfirmation: FC<Props> = ({
  description,
  isOpen,
  onRequestClose,
  onClickConfirm,
}) => {
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onRequestClose}>
      <AlertDialog.Portal>
        <StyledAlertDialogOverlay className="bg-black/50 fixed inset-0" />
        <StyledAlertDialogContent className="bg-white rounded shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg max-h-[50vh] p-6 focus:outline-none">
          <AlertDialog.Title className="mb-4 text-slate-700 text-lg font-semibold">
            <Trans>Are you sure?</Trans>
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-8 text-slate-500 text-sm leading-relaxed">
            {description}
          </AlertDialog.Description>
          <div className="flex gap-x-4 justify-end">
            <AlertDialog.Cancel asChild>
              <button className="inline-flex items-center justify-center rounded px-2 h-8 text-xs font-semibold bg-slate-200 text-slate-700">
                <Trans>Cancel</Trans>
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className="inline-flex items-center justify-center rounded px-2 h-8 text-xs font-semibold bg-red-200 text-red-700"
                onClick={onClickConfirm}
              >
                <Trans>Yes, delete it</Trans>
              </button>
            </AlertDialog.Action>
          </div>
        </StyledAlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default PopupDeleteConfirmation;
