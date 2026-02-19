const AFFILIATE_BASE = {
  replika: "https://example.com/replika-affiliate",
  characterai: "https://example.com/characterai-affiliate",
  chai: "https://example.com/chai-affiliate",
  anima: "https://example.com/anima-affiliate",
  romanticai: "https://example.com/romanticai-affiliate",
  paradot: "https://example.com/paradot-affiliate",
  evaai: "https://example.com/evaai-affiliate"
};

const UTM = {
  source: "bestvirtualcompanion",
  medium: "affiliate",
  campaign: "2026_core_pages"
};

function buildAffiliateUrl(app, content = "button") {
  const base = AFFILIATE_BASE[app] || "#";
  if (base === "#") return base;
  const url = new URL(base);
  url.searchParams.set("utm_source", UTM.source);
  url.searchParams.set("utm_medium", UTM.medium);
  url.searchParams.set("utm_campaign", UTM.campaign);
  url.searchParams.set("utm_content", content);
  return url.toString();
}

function hydrateAffiliateLinks() {
  document.querySelectorAll("a[data-app]").forEach((anchor) => {
    const app = anchor.getAttribute("data-app");
    const slot = anchor.getAttribute("data-slot") || "button";
    anchor.href = buildAffiliateUrl(app, slot);
    anchor.rel = "nofollow sponsored";
    anchor.target = "_blank";
  });

  document.querySelectorAll(".year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

document.addEventListener("DOMContentLoaded", hydrateAffiliateLinks);
