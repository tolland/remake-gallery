<!-- src/routes/+page.svelte -->
<script lang="ts">
  import ImageThumbnail from '$lib/components/ImageThumbnail.svelte';

    let { data } = $props();

  let selectedTag = $state<string | null>(null);

  const allTags = [...new Set(data.projects.flatMap(p => p.metadata.tags || []))];

  const filteredProjects = $derived(
    selectedTag
      ? data.projects.filter(p => p.metadata.tags?.includes(selectedTag))
      : data.projects
  );
</script>

<div class="max-w-6xl mx-auto p-8">
  <h1 class="text-4xl font-bold mb-4">Remake Gallery</h1>
  <p class="text-gray-600 mb-8">Learning through reproduction</p>

  <!-- Tag filter -->
  <div class="flex gap-2 mb-8 flex-wrap">
    <button
      class="px-3 py-1 rounded {selectedTag === null ? 'bg-blue-500 text-white' : 'bg-gray-200'}"
      onclick={() => selectedTag = null}>
      All
    </button>
    {#each allTags as tag}
      <button
        class="px-3 py-1 rounded {selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'}"
        onclick={() => selectedTag = tag}>
        {tag}
      </button>
    {/each}
  </div>

  <!-- Project grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredProjects as project}
            <a href="/projects/{project.slug}"
         class="border rounded-lg overflow-hidden hover:shadow-lg transition group">
        <div class="aspect-[4/3] overflow-hidden">
          <ImageThumbnail
            original={project.metadata.original}
            reproduction={project.metadata.reproduction}
            alt={project.metadata.title}
          />
        </div>
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
            {project.metadata.title}
          </h2>
          {#if project.metadata.callout}
            <p class="text-sm text-gray-600 mb-2">{project.metadata.callout}</p>
          {/if}
          <p class="text-xs text-gray-500">{project.metadata.date}</p>
          {#if project.metadata.tags}
            <div class="flex gap-1 mt-2 flex-wrap">
              {#each project.metadata.tags as tag}
                <span class="text-xs bg-gray-100 px-2 py-1 rounded">{tag}</span>
              {/each}
            </div>
          {/if}
        </div>
            </a>
        {/each}
    </div>
</div>
