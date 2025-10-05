export async function load() {
    const projectFiles = import.meta.glob('./projects/*/+page.md');

    const projects = await Promise.all(
        Object.entries(projectFiles).map(async ([path, resolver]) => {
            const module = await resolver() as any;
            const slug = path.split('/')[2]; // Extract slug from path

            return {
                slug,
                metadata: module.metadata // mdsvex exposes frontmatter as metadata
            };
        })
    );

    // Sort by date, newest first
    return {
        projects: projects.sort((a, b) =>
            new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
        )
    };
}
