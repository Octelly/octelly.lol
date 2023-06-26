<script>
    import { Chip } from 'm3-svelte';
    export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | octelly.lol</title>
    <meta name="description" content={data.meta.description}/>

    <meta itemprop="name" content={data.meta.title}>
    <meta itemprop="description" content={data.meta.description}>
    <!-- <meta itemprop="image" content="http://www.example.com/image.jpg"> -->

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content={data.meta.title}>
    <meta name="twitter:description" content={data.meta.description}>
    <meta name="twitter:site" content="@uwuCorporation">
    <!-- <meta name="twitter:image" content="https://octelly.lol/images/octelly.png"> -->

	<meta property="og:title" content={data.meta.title} />
	<meta property="og:type" content="article" />
    <meta property="og:url" content={`https://octelly.lol/posts/${data.meta.timestamp}`} />
    <!-- <meta property="og:image" content="https://octelly.lol/images/octelly.png" /> -->
    <meta property="og:description" content={data.meta.description} />
    <meta property="og:site_name" content="octelly.lol" />
    <meta property="article:published_time" content={data.meta.timestamp} />
</svelte:head>

<h1>{data.meta.title}</h1>
<p style="margin-top: -1.5rem; margin-bottom: 1rem;">{data.meta.description}</p>
<div style="display:flex;gap:8px;margin-bottom: 2.5rem;">
    {#each data.meta.tags as tag}
        <div style="display: inline;">
            <Chip
                type="input"
            >
                {tag}
            </Chip>
        </div>
    {/each}
</div>

<svelte:component this={data.content} />