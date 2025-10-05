<!-- src/lib/components/ImageGallery.svelte -->
<script lang="ts">
    import { X, ChevronLeft, ChevronRight, Info } from 'lucide-svelte';

    interface ImageData {
        url: string;
        title?: string;
        caption?: string;
        attribution?: {
            source?: string;
            copyright?: string;
            license?: string;
        };
        fairUse?: string;
    }

    interface Props {
        images: ImageData[];
        title?: string;
    }

    let { images, title }: Props = $props();

    let lightboxOpen = $state(false);
    let currentIndex = $state(0);
    let showAttribution = $state(false);

    const currentImage = $derived(images[currentIndex]);

    function openLightbox(index: number) {
        currentIndex = index;
        lightboxOpen = true;
        showAttribution = false;
    }

    function closeLightbox() {
        lightboxOpen = false;
        showAttribution = false;
    }

    function goToPrevious() {
        currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        showAttribution = false;
    }

    function goToNext() {
        currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        showAttribution = false;
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (!lightboxOpen) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    }
</script>

<svelte:window onkeydown={handleKeyDown} />

<div class="bg-white rounded-lg shadow-md p-6">
    {#if title}
        <h3 class="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    {/if}

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each images as image, index}
            <button
                class="aspect-square bg-gray-100 rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                onclick={() => openLightbox(index)}
                type="button"
            >
                <img
                    src={image.url}
                    alt={image.title || `Image ${index + 1}`}
                    class="w-full h-full object-cover"
                />
            </button>
        {/each}
    </div>
</div>

{#if lightboxOpen}
    <div class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <button
            onclick={closeLightbox}
            class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
            type="button"
        >
            <X size={32} />
        </button>

        <button
            onclick={goToPrevious}
            class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous"
            type="button"
        >
            <ChevronLeft size={48} />
        </button>

        <button
            onclick={goToNext}
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Next"
            type="button"
        >
            <ChevronRight size={48} />
        </button>

        <div class="max-w-5xl w-full flex flex-col max-h-full">
            <div class="flex-1 flex items-center justify-center mb-4">
                <img
                    src={currentImage.url}
                    alt={currentImage.title || `Image ${currentIndex + 1}`}
                    class="max-w-full max-h-[70vh] object-contain"
                />
            </div>

            <div class="bg-gray-900 bg-opacity-80 rounded p-4 text-white">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        {#if currentImage.title}
                            <h4 class="text-lg font-semibold">{currentImage.title}</h4>
                        {/if}
                        {#if currentImage.caption}
                            <p class="text-sm text-gray-300 mt-1">{currentImage.caption}</p>
                        {/if}
                    </div>
                    <span class="text-sm text-gray-400">
            {currentIndex + 1} / {images.length}
          </span>
                </div>

                {#if currentImage.attribution || currentImage.fairUse}
                    <div class="mt-3 pt-3 border-t border-gray-700">
                        <button
                            onclick={() => showAttribution = !showAttribution}
                            class="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                            type="button"
                        >
                            <Info size={16} />
                            {showAttribution ? 'Hide' : 'Show'} attribution & usage info
                        </button>

                        {#if showAttribution}
                            <div class="mt-3 text-sm space-y-1">
                                {#if currentImage.attribution?.source}
                                    <p>
                                        <span class="text-gray-400">Source:</span>
                                        {currentImage.attribution.source}
                                    </p>
                                {/if}
                                {#if currentImage.attribution?.copyright}
                                    <p>
                                        <span class="text-gray-400">Copyright:</span>
                                        {currentImage.attribution.copyright}
                                    </p>
                                {/if}
                                {#if currentImage.attribution?.license}
                                    <p>
                                        <span class="text-gray-400">License:</span>
                                        {currentImage.attribution.license}
                                    </p>
                                {/if}
                                {#if currentImage.fairUse}
                                    <p class="text-gray-400 italic mt-2">{currentImage.fairUse}</p>
                                {/if}
                            </div>
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}
