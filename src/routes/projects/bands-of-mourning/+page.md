---
title: "Bands of Mourning"
date: "2022-01-02"
callout: "The Bands of Mourning is a book in the mistborn series of books by Brandon Sanderson."
tags: ["books", "fantasy", "fiction", "science-fiction"]
original: "/images/bands-of-mourning/91cOXqgvWhL._SL1500_.jpg"
reproduction: "/images/bands-of-mourning/brandon_sandersone_bands_of_mourning_cover.png"
---

Regular markdown content here...

<script>
  import ImageComparison from '$lib/components/ImageComparison.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';

  const attempts = [
    {
      url: '/images/bands-of-mourning/s-l1600.jpg',
      title: 'First Attempt',
      caption: 'Colors too dark, proportions off',
      attribution: {
        source: 'Image was retrieved from eBay listing',
        url: 'https://www.ebay.com/itm/194258573888',
        copyright: '© 2025'
      }
    },
    {
      url: '/images/bands-of-mourning/19293852.jpg',
      title: 'Second Attempt',
      caption: 'Better lighting, still needs work'
    },
    {
      url: '/images/bands-of-mourning/32245702588.jpg',
      title: 'Another Attempt',
      caption: 'Better lighting, still needs work'
    },
    {
      url: '/images/bands-of-mourning/816kA5xUaVL._SL1500_.jpg',
      title: 'Final Version',
      caption: 'After multiple iterations'
    },
    {
      url: '/images/bands-of-mourning/original.jpg',
      title: 'Final Version',
      caption: 'After multiple iterations'
    }
  ];
</script>

## Process Gallery

<ImageGallery images={attempts} title="Failed Attempts & Iterations" />

<ImageComparison
original={metadata.original}
reproduction={metadata.reproduction}
alt={metadata.title}
/>
