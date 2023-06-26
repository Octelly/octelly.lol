<script>
	import { StyleFromScheme, ResponsiveLayout } from 'm3-svelte';
	import { page } from "$app/stores";
	import * as globals from "$lib/globals";
	$: hereNormalized = $page.url.pathname.replace(/\/\/$/, "/");
	import '$lib/style.less'
</script>

<StyleFromScheme
	lightScheme={[["primary",4283852032],["onPrimary",4294967295],["primaryContainer",4292406396],["onPrimaryContainer",4279770624],["secondary",4284244293],["onSecondary",4294967295],["secondaryContainer",4292994755],["onSecondaryContainer",4279835912],["tertiary",4282017372],["onTertiary",4294967295],["tertiaryContainer",4290637023],["onTertiaryContainer",4278198298],["error",4290386458],["onError",4294967295],["errorContainer",4294957782],["onErrorContainer",4282449922],["background",4294966516],["onBackground",4279966743],["surface",4294966516],["onSurface",4279966743],["surfaceVariant",4293190611],["onSurfaceVariant",4282796091],["outline",4286019690],["outlineVariant",4291282871],["shadow",4278190080],["scrim",4278190080],["inverseSurface",4281348395],["inverseOnSurface",4294177256],["inversePrimary",4290564195]]}
	darkScheme={[["primary",4290564195],["onPrimary",4281021440],["primaryContainer",4282403840],["onPrimaryContainer",4292406396],["secondary",4291152296],["onSecondary",4281217819],["secondaryContainer",4282730799],["onSecondaryContainer",4292994755],["tertiary",4288794820],["onTertiary",4278466351],["tertiaryContainer",4280372805],["onTertiaryContainer",4290637023],["error",4294948011],["onError",4285071365],["errorContainer",4287823882],["onErrorContainer",4294957782],["background",4279966743],["onBackground",4293255898],["surface",4279966743],["onSurface",4293255898],["surfaceVariant",4282796091],["onSurfaceVariant",4291282871],["outline",4287730307],["outlineVariant",4282796091],["shadow",4278190080],["scrim",4278190080],["inverseSurface",4293255898],["inverseOnSurface",4281348395],["inversePrimary",4283852032]]} />

<ResponsiveLayout
	fabOptions={false}
	railOptions={{
		mainItems: globals.pages.map((page) => ({ 
			...page,
			active: hereNormalized == page.href,
		}))
	}}
>
	<slot />
</ResponsiveLayout>
