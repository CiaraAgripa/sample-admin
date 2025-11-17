import type { NextConfig } from "next";
import nextTranslate from "next-translate-plugin";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});


const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
};

export default withBundleAnalyzer(nextTranslate(nextConfig));
