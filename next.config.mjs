import withBundleAnalyzer from "@next/bundle-analyzer";
import createJiti from "jiti";
import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/config/env");

const withNextIntl = createNextIntlPlugin();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPlugins([bundleAnalyzer, withNextIntl], nextConfig);
