import CreateUser from "@/components/routes/memberManagement/createUser";
import { NextPageWithLayout } from "@/pages/_app";
import authentication from "@/utilities/authentication";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Page: NextPageWithLayout = () => <CreateUser />;

export default Page;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => await authentication(ctx);
