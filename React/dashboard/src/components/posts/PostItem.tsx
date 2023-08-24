import React, { FC, useMemo, useState, useCallback } from "react";
import { PostInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { ContentWrapper } from "../shared/Common";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardUserInterface } from "../users/types";
import { RxAvatar } from "react-icons/rx";
import { CommentInterface } from "../comments/types";
import { FaRegComments } from "react-icons/fa";

interface PropsInterface {
  post: PostInterface;
}

export const PostItem: FC<PropsInterface> = ({ post }) => {
  const options = useMemo(() => ({ method: "GET" }), []);
  const [isShowComments, setIsShowComments] = useState<boolean>(false);

  const { body, id, userId, title } = post;

  const { data, isLoading } = useFetchData<DashboardUserInterface>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    options
  );

  const { data: comments, isLoading: isCommentsLoading } = useFetchData<
    CommentInterface[]
  >(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, options);

  const onShowCommentsToggle = useCallback(() => {
    setIsShowComments(!isShowComments);
  }, [isShowComments]);

  console.log(data, "USER");

  return (
    <ContentWrapper flexDirection="column" alignItems="flex-start">
      <FlexRow alignItems="center" gap="10px">
        <RxAvatar size={30} />
        <h4>{data?.username}</h4>
        <span>{data?.email}</span>
      </FlexRow>
      <h3>{title.toUpperCase()}</h3>
      <span>{body}</span>

      <FlexColumn margin="10px 0">
        <button onClick={() => onShowCommentsToggle()}>
          {isShowComments ? "Hide" : "Show"} comments
        </button>
      </FlexColumn>

      {isShowComments && (
        <FlexColumn margin="10px" width="100%">
          {comments?.map(({ name, body }) => (
            <ContentWrapper
              flexDirection="row"
              alignItems="center"
              gap="10px"
              margin="5px"
              background="darkgrey !important"
              justifyContent="space-between"
            >
              <FlexRow alignItems="center" gap="10px">
                <FaRegComments size={30} />
                <h4>{name}</h4>
              </FlexRow>
              <FlexRow width="50%">
                <p>{body}</p>
              </FlexRow>
            </ContentWrapper>
          ))}
        </FlexColumn>
      )}
    </ContentWrapper>
  );
};
