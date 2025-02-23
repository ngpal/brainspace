import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'ngpal/brainspace',
      // from data-repo-id
      repoId: 'R_kgDONhzzYg',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDONhzzYs4Clg3y',
    }
  }),
],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ngpal/",
      "amrita.town": "https://amrita.town/",
      "⬅️": "https://amrita.town/prev",
      "🎲": "https://amrita.town/random",
      "➡️": "https://amrita.town/next",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.RecentNotes({
      title: "Recent Writing",
      limit: 3,
        filter: (node) => {
        return !node.frontmatter?.tags?.includes("excalidraw")
      },

    })),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        if (node.name == "Excalidraw") {
          return false
        }

        return true
      },
      sortFn(a, b) {
          return a.name.localeCompare(b.name)
      },
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
