import React, { useCallback, useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { PostItem } from "./PostItem";
import { FlexColumn } from "../shared/Flex";
import { PostInterface } from "./types";

export const PostsList = () => {

  const options = useMemo(() => ({ method: "GET" }), []);

  const { data, isLoading } = useFetchData<PostInterface[]>(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );

  return (
    <FlexColumn width="100%" alignItems="center">
      <h1>Posts</h1>
      {data?.map((post) => (
        <PostItem post={post} />
      ))}
    </FlexColumn>
  );
};
