<script>
    import { Card, Button, Chip } from 'm3-svelte';
    export let data;
</script>

<h1>Posts</h1>

<div style="margin: 16px; display:flex; flex-direction: row; flex-wrap:wrap; gap: 8px;">
    {#each data.posts as post}
        <div class="m3-font-body-medium" style="width: 400px;">
            <Card
                type="filled"
            >
                <h1 class="m3-font-title-large">{post.title}</h1>
                {post.description}

                <div class="m3" style="margin:8px 0;">
                    {#each post.tags as tag}
                        <div style="margin: 4px; display: inline;">
                            <Chip
                                type="input"
                            >
                                {tag}
                            </Chip>
                        </div>
                    {/each}
                </div>

                <div>
                    <div class="m3-font-label-large" style="width:fit-content; margin-left:auto;">
                        <Button
                            href="/posts/{post.timestamp}"
                            type="filled"
                        >
                            Read
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    {/each}
</div>