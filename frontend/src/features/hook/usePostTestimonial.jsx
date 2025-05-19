import React from "react";
import { postTestimonial } from "../../../../CMS/queries/postTestimonial";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function usePostTestimonial() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTestimonial,
    onSuccess: () => {
      queryClient.refetchQueries(["singleProject"]);
    },
  });
}

export default usePostTestimonial;
