<!-- src/lib/components/ImageThumbnail.svelte -->
<script lang="ts">
    interface Props {
        original: string;
        reproduction: string;
        alt: string;
    }

    let { original, reproduction, alt }: Props = $props();
</script>

<div class="grid grid-cols-2 gap-1">
    <img src={original} {alt} class="w-full h-full object-cover" />
    <img src={reproduction} alt="{alt} - reproduction" class="w-full h-full object-cover" />
</div>
