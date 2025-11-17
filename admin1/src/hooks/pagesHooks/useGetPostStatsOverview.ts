import { initialPostStatusOverview } from "@/initialStateData/initialStateData";
import { localService } from "@/services/localServices";
import { TPostStatusOverview, TPostStatusOverviewCategories, TPostStatusOverviewRecentAct } from "@/types/mainSchema";
import { asyncHandler } from "@/utilities/asyncHandler";
import { useState } from "react";

const useGetPostStatsOverview = () => {
  const [postStatusOverview, setPostStatusOverview] = useState<TPostStatusOverview>(initialPostStatusOverview);
  const [postStatusCategory, setPostStatusCategory] = useState<TPostStatusOverviewCategories[]>([]);
  const [postStatusRecentAct, setPostStatusRecentAct] = useState<TPostStatusOverviewRecentAct[]>([]);

  const getPostStatusOverview = async () => {
    const response = await asyncHandler(() => localService.getPostStatsOverviewLocal());

    if (response?.success) {
      setPostStatusOverview(response.data.overview);
      setPostStatusCategory(response.data.categoryStats);
      setPostStatusRecentAct(response.data.recentActivity);
    }
  };

  return { getPostStatusOverview, postStatusCategory, setPostStatusCategory, postStatusOverview, setPostStatusOverview, setPostStatusRecentAct, postStatusRecentAct };
};

export default useGetPostStatsOverview;
