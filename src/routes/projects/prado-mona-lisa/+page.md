---
title: "Mona Lisa Study"
date: "2025-10-04"
callout: "Following Da Vinci's brushstrokes through X-ray analysis"
tags: ["gimp", "oil-painting", "renaissance"]
thumbnail: "/images/mona-lisa/thumb_original.jpg"
thumbnail2: "/images/mona-lisa/thumb_reproduction.jpg"
original: "/images/mona-lisa/Mona_Lisa.jpg"
reproduction: "/images/mona-lisa/500px-Gioconda_copia_del_Museo_del_Prado_restaurada.png"
---

Regular markdown content here...

<script>
  import ImageComparison from '$lib/components/ImageComparison.svelte';
</script>


<ImageComparison
original={metadata.original}
reproduction={metadata.reproduction}
alt={metadata.title}
/>
