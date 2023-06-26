import { dev } from '$app/environment'
import { base } from "$app/paths";

import homeIcon from '@iconify/icons-mdi/home';
import homeOutline from '@iconify/icons-mdi/home-outline';

import accountIcon from '@iconify/icons-mdi/account';
import accountOutline from '@iconify/icons-mdi/account-outline';

import viewListIcon from '@iconify/icons-mdi/view-list';
import viewListOutline from '@iconify/icons-mdi/view-list-outline';

import type { Post } from '$lib/types'

export const title = 'octelly.lol'
export const description = 'Octelly\'s personal website'
export const url = dev ? 'http://localhost:5173/' : 'https://blog.octelly.lol'

export const pages = [
    {name: 'Home', href: base || '/', activeIcon: homeIcon, inactiveIcon: homeOutline} ,
    {name: 'Posts', href: base + '/posts', activeIcon: viewListIcon, inactiveIcon: viewListOutline} ,
    {name: 'About', href: base + '/about', activeIcon: accountIcon, inactiveIcon: accountOutline} ,
]