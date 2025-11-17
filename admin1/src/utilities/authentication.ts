import { ERoutes } from "@/enums/mainEnums";
import { buildAuthOptions } from "@/pages/api/auth/[...nextauth]";
import { TSessionToken } from "@/types/mainSchema";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const publicPages = [ERoutes.login];

const authentication = async (ctx: GetServerSidePropsContext) => {
  const { req, res, resolvedUrl } = ctx;

  const session = (await getServerSession(req, res, buildAuthOptions(req as NextApiRequest, res as NextApiResponse) as any)) as TSessionToken | null;

  const cleanPath = resolvedUrl.split("?")[0];
  const isPublicPage = publicPages.some((page) => (page === "/" ? cleanPath === "/" : cleanPath.startsWith(page)));

  if (!session) {
    return isPublicPage ? { props: { user: null } } : { redirect: { destination: ERoutes.login, permanent: false } };
  }

  if (isPublicPage) {
    return {
      redirect: { destination: ERoutes.root, permanent: false },
      props: { session, user: session.user, token: session.token },
    };
  }

  return {
    props: { session, user: session.user, token: session.token },
  };
};

export default authentication;
