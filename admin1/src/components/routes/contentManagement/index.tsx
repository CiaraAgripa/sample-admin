import { FormInput, StyledCardCon } from "@/styles/styled/reusableStyled";
import React, { useEffect } from "react";
import {
  StyledContentCardHeader,
  StyledContentmanagementCon,
  StyledMainConentManagement,
  StyledPostContainter,
  StyledPostContent,
  StyledSideConentManagement,
  StyledWritePostCon,
} from "./styled";
import DOMPurify from "dompurify";
import usePosts from "@/hooks/pagesHooks/usePosts";

const ContentManagement = () => {
  const { getPostContent, posts } = usePosts();

  useEffect(() => {
    getPostContent({ params: { page: 1, limit: 50, sortOrder: "asc" } });
  }, []);

  return (
    <StyledContentmanagementCon>
      <StyledMainConentManagement>
        <StyledWritePostCon>
          <StyledContentCardHeader>
            <p>Write Post</p>
          </StyledContentCardHeader>

          <StyledPostContent>
            <FormInput as="textarea" rows={3} />
          </StyledPostContent>
        </StyledWritePostCon>

        <StyledPostContainter>
          {posts.map((post) => {
            return (
              <StyledCardCon>
                <StyledContentCardHeader>
                  <p>{post.author}</p>
                </StyledContentCardHeader>

                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
              </StyledCardCon>
            );
          })}
        </StyledPostContainter>
      </StyledMainConentManagement>

      <StyledSideConentManagement>
        <StyledCardCon> card 2</StyledCardCon>
      </StyledSideConentManagement>
    </StyledContentmanagementCon>
  );
};

export default ContentManagement;
