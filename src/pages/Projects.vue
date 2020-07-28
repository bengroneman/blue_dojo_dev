<template>
  <Layout>
    <div class="container">
      <h1>Projects I have worked on</h1>
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
}
</page-query>

<script>
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    ProjectsGrid,
    LatestJournals
  }
}
</script>
