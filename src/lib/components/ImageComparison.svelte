<!-- src/lib/components/ImageComparison.svelte -->
<script lang="ts">
    interface Props {
        original: string;
        reproduction: string;
        alt: string;
    }

    let {original, reproduction, alt}: Props = $props();

    let mode = $state<'side-by-side' | 'comparison'>('side-by-side');
    let sliderPosition = $state(50);
    let isDragging = $state(false);
    let container = $state<HTMLButtonElement>();

    function handleMove(clientX: number) {
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        sliderPosition = Math.max(0, Math.min(100, percentage));
    }

    function handleMouseDown() {
        isDragging = true;
    }

    function handleMouseUp() {
        isDragging = false;
    }

    function handleMouseMove(e: MouseEvent) {
        if (!isDragging) return;
        handleMove(e.clientX);
    }

    function handleTouchMove(e: TouchEvent) {
        if (e.touches.length > 0) {
            handleMove(e.touches[0].clientX);
        }
    }

    function handleClick(e: MouseEvent) {
        handleMove(e.clientX);
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'ArrowLeft') {
            sliderPosition = Math.max(0, sliderPosition - 5);
        } else if (e.key === 'ArrowRight') {
            sliderPosition = Math.min(100, sliderPosition + 5);
        }
    }

    function toggleMode() {
        mode = mode === 'side-by-side' ? 'comparison' : 'side-by-side';
    }
</script>

<svelte:window
    onmousemove={handleMouseMove}
    onmouseup={handleMouseUp}
    ontouchend={handleMouseUp}
/>

<!-- Mode Toggle Button -->
<div class="mb-4 flex justify-center">
    <button
        onclick={toggleMode}
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition-colors"
        aria-label="Toggle between side-by-side and comparison view"
    >
        {mode === 'side-by-side' ? 'Switch to Comparison' : 'Switch to Side-by-Side'}
    </button>
</div>

{#if mode === 'side-by-side'}
    <!-- Side-by-Side Mode -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-screen">
        <div class="relative">
            <img
                src={original}
                alt="{alt} - original"
                class="w-full h-auto max-h-screen object-contain"
            />
            <div class="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                Original
            </div>
        </div>
        <div class="relative">
            <img
                src={reproduction}
                alt="{alt} - reproduction"
                class="w-full h-auto max-h-screen object-contain"
            />
            <div class="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                Reproduction
            </div>
        </div>
    </div>
{:else}
    <!-- Comparison Mode -->
    <button
        bind:this={container}
        class="relative w-full max-h-screen overflow-hidden cursor-col-resize select-none block"
        onmousedown={handleMouseDown}
        ontouchstart={handleMouseDown}
        ontouchmove={handleTouchMove}
        onclick={handleClick}
        onkeydown={handleKeyDown}
        role="slider"
        aria-label="{alt} - interactive comparison slider"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={sliderPosition}
        type="button"
    >
    <!-- Reproduction (bottom layer) -->
    <img
        src={reproduction}
        alt="{alt} - reproduction"
    class="w-full h-auto max-h-screen object-contain"
    />

    <!-- Original (top layer, clipped) -->
    <div
        class="absolute inset-0 overflow-hidden"
        style="clip-path: inset(0 {100 - sliderPosition}% 0 0);"
    >
        <img
            src={original}
            {alt}
      class="w-full h-auto max-h-screen object-contain"
        />
    </div>

    <!-- Slider handle -->
    <div
        class="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style="left: {sliderPosition}%;"
    >
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-10 h-10 bg-white rounded-full shadow-lg
             flex items-center justify-center border-2 border-gray-300"
        >
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
            </svg>
        </div>
    </div>

        <!-- Labels -->
        <div class="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
            Original
        </div>
        <div class="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
            Reproduction
        </div>
    </button>
{/if}
