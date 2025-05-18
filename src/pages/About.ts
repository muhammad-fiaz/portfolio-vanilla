import { setMeta } from "../utils/meta.ts";
import siteConfig from "../site.config";

export default function About() {
    setMeta({
        title: `About - ${siteConfig.titlePrefix}`,
        description: "Learn more about Muhammad Fiaz, Full Stack Developer with expertise in open source.",
        keywords: "About Muhammad Fiaz, Full Stack Developer, Portfolio",
        image: "https://muhammadfiaz.com/images/og-about.png",
        url: `${siteConfig.baseUrl}/about`
    });

    const div = document.createElement('div');
    div.textContent = "This is the About Page.";
    return div;
}
