import React, { useCallback, useContext, useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { PostItem } from "./PostItem";
import { FlexColumn } from "../shared/Flex";
import { PostInterface } from "./types";
import { Search } from "../shared/Search";
import { SearchContext } from "../../contexts/SearchContext";

export const PostsList = () => {
  const { value, posts, postsSearchResults } = useContext(SearchContext)!;

  // H/W Перенести данні posts взявши їх з SearchContext

  return (
    <FlexColumn width="100%" alignItems="center">
      <h1>Posts</h1>
      <Search />
      {(value ? postsSearchResults : posts).map((post) => (
        <PostItem post={post} />
      ))}
    </FlexColumn>
  );
};
