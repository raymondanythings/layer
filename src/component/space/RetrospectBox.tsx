import { css } from "@emotion/react";

import { Spacing } from "@/component/common/Spacing";
import { Typography } from "@/component/common/typography";

type RetrospectBoxProps = {
  retrospectStatus: "PROCEEDING" | "COMPLETE";
};

const statusStyles = {
  PROCEEDING: {
    backgroundColor: "#f0f4fe",
    buttonColor: "#6c9cfa",
  },
  COMPLETE: {
    backgroundColor: "#F5F7F9",
    buttonColor: "#C1C3C6",
  },
};

export function RetrospectBox({ retrospectStatus }: RetrospectBoxProps) {
  const { backgroundColor, buttonColor } = statusStyles[retrospectStatus];

  return (
    <div
      css={css`
        width: 100%;
        height: 13.8rem;
        background-color: ${backgroundColor};
        border-radius: 1rem;
        padding: 2rem;
      `}
    >
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Typography variant="B1_BOLD">중간발표 이후 회고</Typography>
        <div>
          <Typography variant="B2_SEMIBOLD" color="blue700">
            1
          </Typography>
          <Typography variant="B2_SEMIBOLD" color="grey800">
            {" "}
            / 10
          </Typography>
        </div>
      </div>
      <Spacing size={0.3} />
      <Typography variant="B2_SEMIBOLD" color="darkGray">
        방향성 체크 및 팀 내 개선점 구축
      </Typography>
      <Spacing size={1.6} />
      <button
        css={css`
          width: 100%;
          height: 4rem;
          background-color: ${buttonColor};
          border-radius: 0.8rem;
        `}
      >
        <Typography variant="B2_SEMIBOLD" color="white">
          분석 확인하기
        </Typography>
      </button>
    </div>
  );
}
